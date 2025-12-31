import OpenAI from "openai";
import { parse } from "node-html-parser";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);
const ATTRS = ["placeholder", "title", "aria-label", "alt", "value"];

function inSkippedTree(node) {
  let p = node.parentNode;
  while (p) {
    if (p.tagName && SKIP_TAGS.has(p.tagName)) return true;
    p = p.parentNode;
  }
  return false;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function postprocess(text, rules) {
  let out = text;

  if (rules?.brand?.enabled && rules.brand.from && rules.brand.to) {
    const from = rules.brand.from;
    const to = rules.brand.to;
    out = out.replace(new RegExp(escapeRegExp(from), "gi"), to);
    if (/^tigot/i.test(from)) {
      out = out.replace(/\bTigot[àa]\b/gi, to).replace(/\bTigota\b/gi, to);
    }
  }

  if (rules?.country?.enabled && rules.country.from && rules.country.to) {
    const from = rules.country.from;
    const to = rules.country.to;
    out = out.replace(new RegExp(escapeRegExp(from), "gi"), to);
    if (/ital/i.test(from)) {
      out = out.replace(/\bItalia\b/gi, to).replace(/\bItaly\b/gi, to);
      out = out.replace(/\bItalian\b/gi, (to === "Saudi Arabia") ? "Saudi" : to);
    }
  }

  if (rules?.currency?.enabled) {
    const toCur = (rules.currency.to || "").trim() || "SAR";
    out = out
      .replace(/€\s*0([.,]00)?/g, `0 ${toCur}`)
      .replace(/0([.,]00)?\s*€/g, `0 ${toCur}`)
      .replace(/\bEUR\b/gi, toCur)
      .replace(/€/g, toCur);

    if (rules.currency.from && rules.currency.from !== "EUR") {
      out = out.replace(new RegExp(`\\b${escapeRegExp(rules.currency.from)}\\b`, "gi"), toCur);
    }
  }

  return out;
}

function assignIds(root) {
  let i = 1;
  root.querySelectorAll("*").forEach((el) => { el._id = i++; });
}

function extractSegments(root) {
  const segments = [];
  root.querySelectorAll("*").forEach((el) => {
    if (SKIP_TAGS.has(el.tagName)) return;

    for (const a of ATTRS) {
      const v = el.getAttribute?.(a);
      if (typeof v === "string" && v.trim()) {
        segments.push({ kind: "attr", nodeId: el._id, attr: a, text: v });
      }
    }

    el.childNodes.forEach((ch, idx) => {
      if (ch.nodeType === 3) {
        const t = ch.rawText;
        if (t && t.trim() && !inSkippedTree(ch)) {
          segments.push({ kind: "text", nodeId: el._id, index: idx, text: t });
        }
      }
    });
  });
  return segments;
}

function safeJsonParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}

async function translateChunk(openai, strings, targetLang) {
  const system =
    "You are a professional UI/localization translator. " +
    "Translate UI microcopy naturally and concisely. " +
    "Do NOT add extra text. Preserve numbers, punctuation, and HTML entities. " +
    "If the target language is Arabic, use Modern Standard Arabic suitable for Gulf/Saudi audiences.";

  const payload = { targetLang, strings, expected_count: strings.length };

  const makeCall = async (extraInstruction) => {
    const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
    const prompt =
      "Return ONLY valid JSON (no markdown, no code fences). " +
      "Must be exactly: {\"strings\": [ ... ]}. " +
      "The strings array MUST have exactly expected_count items, in the same order. " +
      (extraInstruction ? (" " + extraInstruction) : "") +
      "\n\n" +
      JSON.stringify(payload);

    // Prefer the modern Responses API if available (newer SDKs).
    if (openai?.responses?.create) {
      const resp = await openai.responses.create({
        model,
        // JSON mode for Responses API: valid JSON only.
        text: { format: { type: "json_object" } },
        input: [
          { role: "system", content: system },
          { role: "user", content: prompt },
        ],
      });
      return (resp.output_text || "").trim();
    }

    // Fallback for older SDKs: Chat Completions.
    const resp = await openai.chat.completions.create({
      model,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
    });

    const out = (resp.choices?.[0]?.message?.content || "").trim();
    return out;
  };

  // First try
  let out = await makeCall("");
  let data = safeJsonParse(out);

  // Retry once if shape mismatch
  if (!data || !Array.isArray(data.strings) || data.strings.length !== strings.length) {
    out = await makeCall("IMPORTANT: Output MUST be a single JSON object with only one key: strings.");
    data = safeJsonParse(out);
  }

  if (!data || !Array.isArray(data.strings) || data.strings.length !== strings.length) {
    throw new Error("Model returned non-JSON or wrong shape.");
  }

  return data.strings;
}


export default async function handler(req, res) {
  // CORS (usually same-origin on Vercel, but helps when testing from elsewhere)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const body = (req.body && typeof req.body === "object") ? req.body : safeJsonParse(req.body || "{}");
  const { html, targetLang, rtl, rules } = body || {};

  if (!html || typeof html !== "string") {
    return res.status(400).json({ error: "Missing 'html' string." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OPENAI_API_KEY не задан в переменных окружения Vercel." });
  }

  try {
    const openai = new OpenAI({ apiKey });

    const root = parse(html, { comment: true });
    assignIds(root);

    const segments = extractSegments(root);
    const texts = segments.map((s) => s.text);

    const batchSize = 80;
    const translatedAll = [];
    for (let i = 0; i < texts.length; i += batchSize) {
      const chunk = texts.slice(i, i + batchSize);
      const translated = await translateChunk(openai, chunk, targetLang || "en");
      translatedAll.push(...translated);
    }

    segments.forEach((seg, idx) => {
      const out = postprocess(translatedAll[idx], rules);
      const el = root.querySelectorAll("*").find((x) => x._id === seg.nodeId);
      if (!el) return;

      if (seg.kind === "attr") {
        el.setAttribute(seg.attr, out);
      } else {
        const ch = el.childNodes[seg.index];
        if (ch && ch.nodeType === 3) ch.rawText = out;
      }
    });

    if (rtl) {
      const htmlTag = root.querySelector("html");
      if (htmlTag) htmlTag.setAttribute("dir", "rtl");
    }

    return res.status(200).json({ html: root.toString() });
  } catch (e) {
    return res.status(500).json({ error: `Error: ${e.message}` });
  }
}
