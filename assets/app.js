const LANGS = [
  {
    "code": "ar",
    "name": "Арабский"
  },
  {
    "code": "en",
    "name": "Английский"
  },
  {
    "code": "ru",
    "name": "Русский"
  },
  {
    "code": "it",
    "name": "Итальянский"
  },
  {
    "code": "es",
    "name": "Испанский"
  },
  {
    "code": "fr",
    "name": "Французский"
  },
  {
    "code": "de",
    "name": "Немецкий"
  },
  {
    "code": "pt",
    "name": "Португальский"
  },
  {
    "code": "tr",
    "name": "Турецкий"
  },
  {
    "code": "fa",
    "name": "Персидский"
  },
  {
    "code": "ur",
    "name": "Урду"
  },
  {
    "code": "hi",
    "name": "Хинди"
  },
  {
    "code": "bn",
    "name": "Бенгальский"
  },
  {
    "code": "id",
    "name": "Индонезийский"
  },
  {
    "code": "ms",
    "name": "Малайский"
  },
  {
    "code": "th",
    "name": "Тайский"
  },
  {
    "code": "vi",
    "name": "Вьетнамский"
  },
  {
    "code": "zh",
    "name": "Китайский (упр.)"
  },
  {
    "code": "zh-Hant",
    "name": "Китайский (традиц.)"
  },
  {
    "code": "ja",
    "name": "Японский"
  },
  {
    "code": "ko",
    "name": "Корейский"
  },
  {
    "code": "nl",
    "name": "Нидерландский"
  },
  {
    "code": "sv",
    "name": "Шведский"
  },
  {
    "code": "no",
    "name": "Норвежский"
  },
  {
    "code": "da",
    "name": "Датский"
  },
  {
    "code": "fi",
    "name": "Финский"
  },
  {
    "code": "pl",
    "name": "Польский"
  },
  {
    "code": "cs",
    "name": "Чешский"
  },
  {
    "code": "sk",
    "name": "Словацкий"
  },
  {
    "code": "hu",
    "name": "Венгерский"
  },
  {
    "code": "ro",
    "name": "Румынский"
  },
  {
    "code": "bg",
    "name": "Болгарский"
  },
  {
    "code": "uk",
    "name": "Украинский"
  },
  {
    "code": "el",
    "name": "Греческий"
  },
  {
    "code": "he",
    "name": "Иврит"
  },
  {
    "code": "sr",
    "name": "Сербский"
  },
  {
    "code": "hr",
    "name": "Хорватский"
  },
  {
    "code": "sl",
    "name": "Словенский"
  },
  {
    "code": "lt",
    "name": "Литовский"
  },
  {
    "code": "lv",
    "name": "Латышский"
  },
  {
    "code": "et",
    "name": "Эстонский"
  },
  {
    "code": "ca",
    "name": "Каталанский"
  },
  {
    "code": "eu",
    "name": "Баскский"
  },
  {
    "code": "gl",
    "name": "Галисийский"
  },
  {
    "code": "is",
    "name": "Исландский"
  },
  {
    "code": "ga",
    "name": "Ирландский"
  },
  {
    "code": "cy",
    "name": "Валлийский"
  },
  {
    "code": "sw",
    "name": "Суахили"
  },
  {
    "code": "am",
    "name": "Амхарский"
  },
  {
    "code": "ha",
    "name": "Хауса"
  },
  {
    "code": "yo",
    "name": "Йоруба"
  },
  {
    "code": "ig",
    "name": "Игбо"
  },
  {
    "code": "zu",
    "name": "Зулу"
  },
  {
    "code": "af",
    "name": "Африкаанс"
  },
  {
    "code": "sq",
    "name": "Албанский"
  },
  {
    "code": "hy",
    "name": "Армянский"
  },
  {
    "code": "az",
    "name": "Азербайджанский"
  },
  {
    "code": "ka",
    "name": "Грузинский"
  },
  {
    "code": "kk",
    "name": "Казахский"
  },
  {
    "code": "ky",
    "name": "Киргизский"
  },
  {
    "code": "mn",
    "name": "Монгольский"
  },
  {
    "code": "ne",
    "name": "Непальский"
  },
  {
    "code": "si",
    "name": "Сингальский"
  },
  {
    "code": "ta",
    "name": "Тамильский"
  },
  {
    "code": "te",
    "name": "Телугу"
  },
  {
    "code": "kn",
    "name": "Каннада"
  },
  {
    "code": "ml",
    "name": "Малаялам"
  },
  {
    "code": "mr",
    "name": "Маратхи"
  },
  {
    "code": "gu",
    "name": "Гуджарати"
  },
  {
    "code": "pa",
    "name": "Панджаби"
  },
  {
    "code": "km",
    "name": "Кхмерский"
  },
  {
    "code": "lo",
    "name": "Лаосский"
  },
  {
    "code": "my",
    "name": "Бирманский"
  },
  {
    "code": "fil",
    "name": "Филиппинский"
  },
  {
    "code": "ps",
    "name": "Пушту"
  },
  {
    "code": "uz",
    "name": "Узбекский"
  },
  {
    "code": "tk",
    "name": "Туркменский"
  },
  {
    "code": "eo",
    "name": "Эсперанто"
  },
  {
    "code": "la",
    "name": "Латынь"
  }
];
const CURS  = [
  {
    "code": "SAR",
    "name": "Саудовский риял"
  },
  {
    "code": "AED",
    "name": "Дирхам ОАЭ"
  },
  {
    "code": "QAR",
    "name": "Катарский риял"
  },
  {
    "code": "KWD",
    "name": "Кувейтский динар"
  },
  {
    "code": "BHD",
    "name": "Бахрейнский динар"
  },
  {
    "code": "OMR",
    "name": "Оманский риал"
  },
  {
    "code": "USD",
    "name": "Доллар США"
  },
  {
    "code": "EUR",
    "name": "Евро"
  },
  {
    "code": "GBP",
    "name": "Фунт стерлингов"
  },
  {
    "code": "TRY",
    "name": "Турецкая лира"
  },
  {
    "code": "EGP",
    "name": "Египетский фунт"
  },
  {
    "code": "JOD",
    "name": "Иорданский динар"
  },
  {
    "code": "MAD",
    "name": "Марокканский дирхам"
  },
  {
    "code": "TND",
    "name": "Тунисский динар"
  },
  {
    "code": "DZD",
    "name": "Алжирский динар"
  },
  {
    "code": "IQD",
    "name": "Иракский динар"
  },
  {
    "code": "INR",
    "name": "Индийская рупия"
  },
  {
    "code": "PKR",
    "name": "Пакистанская рупия"
  },
  {
    "code": "BDT",
    "name": "Бангладешская така"
  },
  {
    "code": "CNY",
    "name": "Китайский юань"
  },
  {
    "code": "JPY",
    "name": "Японская иена"
  },
  {
    "code": "KRW",
    "name": "Южнокорейская вона"
  },
  {
    "code": "CAD",
    "name": "Канадский доллар"
  },
  {
    "code": "AUD",
    "name": "Австралийский доллар"
  },
  {
    "code": "NZD",
    "name": "Новозеландский доллар"
  },
  {
    "code": "RUB",
    "name": "Российский рубль"
  },
  {
    "code": "UAH",
    "name": "Украинская гривна"
  },
  {
    "code": "KZT",
    "name": "Казахстанский тенге"
  },
  {
    "code": "GEL",
    "name": "Грузинский лари"
  },
  {
    "code": "AMD",
    "name": "Армянский драм"
  },
  {
    "code": "AZN",
    "name": "Азербайджанский манат"
  },
  {
    "code": "BYN",
    "name": "Белорусский рубль"
  },
  {
    "code": "CHF",
    "name": "Швейцарский франк"
  },
  {
    "code": "SEK",
    "name": "Шведская крона"
  },
  {
    "code": "NOK",
    "name": "Норвежская крона"
  },
  {
    "code": "DKK",
    "name": "Датская крона"
  },
  {
    "code": "PLN",
    "name": "Польский злотый"
  },
  {
    "code": "CZK",
    "name": "Чешская крона"
  },
  {
    "code": "HUF",
    "name": "Венгерский форинт"
  },
  {
    "code": "RON",
    "name": "Румынский лей"
  },
  {
    "code": "BGN",
    "name": "Болгарский лев"
  },
  {
    "code": "ILS",
    "name": "Новый израильский шекель"
  },
  {
    "code": "IRR",
    "name": "Иранский риал"
  },
  {
    "code": "YER",
    "name": "Йеменский риал"
  },
  {
    "code": "KES",
    "name": "Кенийский шиллинг"
  },
  {
    "code": "NGN",
    "name": "Нигерийская найра"
  },
  {
    "code": "GHS",
    "name": "Ганский седи"
  },
  {
    "code": "ZAR",
    "name": "Южноафриканский рэнд"
  },
  {
    "code": "BRL",
    "name": "Бразильский реал"
  },
  {
    "code": "ARS",
    "name": "Аргентинский песо"
  },
  {
    "code": "CLP",
    "name": "Чилийский песо"
  },
  {
    "code": "COP",
    "name": "Колумбийский песо"
  },
  {
    "code": "MXN",
    "name": "Мексиканский песо"
  },
  {
    "code": "PEN",
    "name": "Перуанский соль"
  },
  {
    "code": "UYU",
    "name": "Уругвайский песо"
  },
  {
    "code": "THB",
    "name": "Тайский бат"
  },
  {
    "code": "VND",
    "name": "Вьетнамский донг"
  },
  {
    "code": "IDR",
    "name": "Индонезийская рупия"
  },
  {
    "code": "MYR",
    "name": "Малайзийский ринггит"
  },
  {
    "code": "SGD",
    "name": "Сингапурский доллар"
  },
  {
    "code": "HKD",
    "name": "Гонконгский доллар"
  },
  {
    "code": "TWD",
    "name": "Новый тайваньский доллар"
  },
  {
    "code": "PHP",
    "name": "Филиппинский песо"
  },
  {
    "code": "LKR",
    "name": "Шри-ланкийская рупия"
  },
  {
    "code": "NPR",
    "name": "Непальская рупия"
  },
  {
    "code": "ETB",
    "name": "Эфиопский быр"
  },
  {
    "code": "XOF",
    "name": "Франк КФА BCEAO"
  },
  {
    "code": "XAF",
    "name": "Франк КФА BEAC"
  }
];
const COUNTRIES = [
  {
    "iso2": "SA",
    "name": "Саудовская Аравия",
    "currency": "SAR",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "AE",
    "name": "ОАЭ",
    "currency": "AED",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "QA",
    "name": "Катар",
    "currency": "QAR",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "KW",
    "name": "Кувейт",
    "currency": "KWD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "BH",
    "name": "Бахрейн",
    "currency": "BHD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "OM",
    "name": "Оман",
    "currency": "OMR",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "EG",
    "name": "Египет",
    "currency": "EGP",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "JO",
    "name": "Иордания",
    "currency": "JOD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "MA",
    "name": "Марокко",
    "currency": "MAD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "TN",
    "name": "Тунис",
    "currency": "TND",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "DZ",
    "name": "Алжир",
    "currency": "DZD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "IQ",
    "name": "Ирак",
    "currency": "IQD",
    "lang": "ar",
    "rtl": true
  },
  {
    "iso2": "TR",
    "name": "Турция",
    "currency": "TRY",
    "lang": "tr",
    "rtl": false
  },
  {
    "iso2": "IL",
    "name": "Израиль",
    "currency": "ILS",
    "lang": "he",
    "rtl": true
  },
  {
    "iso2": "IT",
    "name": "Италия",
    "currency": "EUR",
    "lang": "it",
    "rtl": false
  },
  {
    "iso2": "GB",
    "name": "Великобритания",
    "currency": "GBP",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "US",
    "name": "США",
    "currency": "USD",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "CA",
    "name": "Канада",
    "currency": "CAD",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "AU",
    "name": "Австралия",
    "currency": "AUD",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "FR",
    "name": "Франция",
    "currency": "EUR",
    "lang": "fr",
    "rtl": false
  },
  {
    "iso2": "DE",
    "name": "Германия",
    "currency": "EUR",
    "lang": "de",
    "rtl": false
  },
  {
    "iso2": "ES",
    "name": "Испания",
    "currency": "EUR",
    "lang": "es",
    "rtl": false
  },
  {
    "iso2": "PT",
    "name": "Португалия",
    "currency": "EUR",
    "lang": "pt",
    "rtl": false
  },
  {
    "iso2": "NL",
    "name": "Нидерланды",
    "currency": "EUR",
    "lang": "nl",
    "rtl": false
  },
  {
    "iso2": "SE",
    "name": "Швеция",
    "currency": "SEK",
    "lang": "sv",
    "rtl": false
  },
  {
    "iso2": "NO",
    "name": "Норвегия",
    "currency": "NOK",
    "lang": "no",
    "rtl": false
  },
  {
    "iso2": "DK",
    "name": "Дания",
    "currency": "DKK",
    "lang": "da",
    "rtl": false
  },
  {
    "iso2": "FI",
    "name": "Финляндия",
    "currency": "EUR",
    "lang": "fi",
    "rtl": false
  },
  {
    "iso2": "PL",
    "name": "Польша",
    "currency": "PLN",
    "lang": "pl",
    "rtl": false
  },
  {
    "iso2": "CZ",
    "name": "Чехия",
    "currency": "CZK",
    "lang": "cs",
    "rtl": false
  },
  {
    "iso2": "HU",
    "name": "Венгрия",
    "currency": "HUF",
    "lang": "hu",
    "rtl": false
  },
  {
    "iso2": "RO",
    "name": "Румыния",
    "currency": "RON",
    "lang": "ro",
    "rtl": false
  },
  {
    "iso2": "BG",
    "name": "Болгария",
    "currency": "BGN",
    "lang": "bg",
    "rtl": false
  },
  {
    "iso2": "UA",
    "name": "Украина",
    "currency": "UAH",
    "lang": "uk",
    "rtl": false
  },
  {
    "iso2": "RU",
    "name": "Россия",
    "currency": "RUB",
    "lang": "ru",
    "rtl": false
  },
  {
    "iso2": "GE",
    "name": "Грузия",
    "currency": "GEL",
    "lang": "ka",
    "rtl": false
  },
  {
    "iso2": "AM",
    "name": "Армения",
    "currency": "AMD",
    "lang": "hy",
    "rtl": false
  },
  {
    "iso2": "AZ",
    "name": "Азербайджан",
    "currency": "AZN",
    "lang": "az",
    "rtl": false
  },
  {
    "iso2": "KZ",
    "name": "Казахстан",
    "currency": "KZT",
    "lang": "kk",
    "rtl": false
  },
  {
    "iso2": "IN",
    "name": "Индия",
    "currency": "INR",
    "lang": "hi",
    "rtl": false
  },
  {
    "iso2": "PK",
    "name": "Пакистан",
    "currency": "PKR",
    "lang": "ur",
    "rtl": false
  },
  {
    "iso2": "BD",
    "name": "Бангладеш",
    "currency": "BDT",
    "lang": "bn",
    "rtl": false
  },
  {
    "iso2": "CN",
    "name": "Китай",
    "currency": "CNY",
    "lang": "zh",
    "rtl": false
  },
  {
    "iso2": "JP",
    "name": "Япония",
    "currency": "JPY",
    "lang": "ja",
    "rtl": false
  },
  {
    "iso2": "KR",
    "name": "Южная Корея",
    "currency": "KRW",
    "lang": "ko",
    "rtl": false
  },
  {
    "iso2": "ID",
    "name": "Индонезия",
    "currency": "IDR",
    "lang": "id",
    "rtl": false
  },
  {
    "iso2": "MY",
    "name": "Малайзия",
    "currency": "MYR",
    "lang": "ms",
    "rtl": false
  },
  {
    "iso2": "SG",
    "name": "Сингапур",
    "currency": "SGD",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "TH",
    "name": "Таиланд",
    "currency": "THB",
    "lang": "th",
    "rtl": false
  },
  {
    "iso2": "VN",
    "name": "Вьетнам",
    "currency": "VND",
    "lang": "vi",
    "rtl": false
  },
  {
    "iso2": "BR",
    "name": "Бразилия",
    "currency": "BRL",
    "lang": "pt",
    "rtl": false
  },
  {
    "iso2": "MX",
    "name": "Мексика",
    "currency": "MXN",
    "lang": "es",
    "rtl": false
  },
  {
    "iso2": "AR",
    "name": "Аргентина",
    "currency": "ARS",
    "lang": "es",
    "rtl": false
  },
  {
    "iso2": "ZA",
    "name": "ЮАР",
    "currency": "ZAR",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "NG",
    "name": "Нигерия",
    "currency": "NGN",
    "lang": "en",
    "rtl": false
  },
  {
    "iso2": "KE",
    "name": "Кения",
    "currency": "KES",
    "lang": "en",
    "rtl": false
  }
];

const els = {
  file: document.getElementById("file"),
  fileName: document.getElementById("fileName"),
  status: document.getElementById("status"),
  download: document.getElementById("download"),
  lang: document.getElementById("lang"),
  langCustom: document.getElementById("langCustom"),
  currency: document.getElementById("currency"),
  country: document.getElementById("country"),
  rtl: document.getElementById("rtl"),
  fromBrand: document.getElementById("fromBrand"),
  toBrand: document.getElementById("toBrand"),
  fromCountry: document.getElementById("fromCountry"),
  toCountry: document.getElementById("toCountry"),
  fromCurrency: document.getElementById("fromCurrency"),
};

function flagEmoji(iso2) {
  if (!iso2 || iso2.length !== 2) return "";
  const A = 0x1F1E6;
  const cps = [...iso2.toUpperCase()].map(c => A + (c.charCodeAt(0) - 65));
  return String.fromCodePoint(...cps);
}

function populateSelect(selectEl, items, defaultCode, labelFn) {
  selectEl.innerHTML = "";
  for (const it of items) {
    const opt = document.createElement("option");
    opt.value = it.code;
    opt.textContent = labelFn ? labelFn(it) : `${it.name} (${it.code})`;
    if (it.code === defaultCode) opt.selected = true;
    selectEl.appendChild(opt);
  }
}

function populateCountries(selectEl) {
  selectEl.innerHTML = "";
  for (const c of COUNTRIES) {
    const opt = document.createElement("option");
    opt.value = c.iso2;
    opt.textContent = `${flagEmoji(c.iso2)}  ${c.name} (${c.iso2})`;
    selectEl.appendChild(opt);
  }
  selectEl.value = "SA";
}

populateSelect(els.lang, LANGS, "en");
populateSelect(els.currency, CURS, "SAR");
populateCountries(els.country);

els.file.addEventListener("change", () => {
  const f = els.file.files?.[0];
  els.fileName.textContent = f ? f.name : "Файл не выбран";
});

function applyCountryPreset() {
  const c = COUNTRIES.find(x => x.iso2 === els.country.value);
  if (!c) return;
  els.toCountry.value = c.name;

  const curOpt = Array.from(els.currency.options).find(o => o.value === c.currency);
  if (curOpt) els.currency.value = c.currency;

  const langOpt = Array.from(els.lang.options).find(o => o.value === c.lang);
  if (langOpt) els.lang.value = c.lang;

  els.rtl.checked = !!c.rtl;
}

els.country.addEventListener("change", applyCountryPreset);
applyCountryPreset();

els.lang.addEventListener("change", () => {
  const v = els.lang.value;
  els.rtl.checked = /^ar(\b|-)/.test(v) || v === "he";
});

document.getElementById("go").addEventListener("click", async () => {
  const f = els.file.files?.[0];
  if (!f) return alert("Загрузи HTML файл (.html)");

  const html = await f.text();

  const targetLang = (els.langCustom.value || "").trim() || els.lang.value;
  const rtl = els.rtl.checked;

  const rules = {
    brand: { enabled: true, from: els.fromBrand.value.trim(), to: els.toBrand.value.trim() },
    country: { enabled: true, from: els.fromCountry.value.trim(), to: els.toCountry.value.trim(), iso2: els.country.value },
    currency: { enabled: true, from: els.fromCurrency.value.trim(), to: els.currency.value },
  };

  els.status.textContent = "Перевожу…";

  let res;
  try {
    res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html, targetLang, rtl, rules })
    });
  } catch (e) {
    els.status.textContent = "Ошибка сети. Проверь интернет / Vercel.";
    return;
  }

  const raw = await res.text();
  let data = null;
  try {
    data = JSON.parse(raw);
  } catch {
    els.status.textContent = "Ошибка сервера. Открой Vercel → Functions → Logs.";
    alert(els.status.textContent);
    return;
  }

  if (!res.ok) {
    els.status.textContent = data?.error || "Ошибка перевода. Открой Vercel → Functions → Logs.";
    alert(els.status.textContent);
    return;
  }

  const blob = new Blob([data.html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  els.download.href = url;
  els.download.download = "index.html";
  els.download.style.display = "inline-flex";
  els.download.textContent = "Скачать index.html";

  els.status.textContent = "Готово ✅";
});
