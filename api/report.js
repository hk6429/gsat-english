// 題庫勘誤回報 API（Telegram Bot API）
// POST：學生/老師在解析框內填寫問題描述後送出，直接推播到大乃的 Telegram（@Invitation11510710_bot）

function clip(v, max) {
  return String(v ?? "").slice(0, max);
}

const TYPE_LABELS = {
  answer: "答案錯",
  explain: "解析錯",
  content: "題目/選項/圖片缺漏或錯誤",
  other: "其他",
};

// 只允許自家三個部署來源跨域回報（CF/Netlify 鏡像站會 POST 回 Vercel）
const ALLOW_ORIGINS = new Set([
  "https://gsat-english-lac.vercel.app",
  "https://gsat-english.pages.dev",
  "https://gsat-english.netlify.app",
]);

// 每個 IP 記憶體節流（同一 serverless 實例內）：60 秒內最多 5 次，擋掉腳本灌爆
const RL_WINDOW = 60 * 1000;
const RL_MAX = 5;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < RL_WINDOW);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear(); // 防記憶體無限成長
  return arr.length > RL_MAX;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOW_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return res.status(429).json({ error: "too many requests" });

  const b = req.body || {};
  const id = clip(b.id, 20);
  const era = clip(b.era, 10);
  const year = clip(b.year, 6);
  const no = clip(b.no, 6);
  // 欄位驗證：考別限白名單、年/題號限純數字，擋掉塞垃圾內容
  if (!id || !["學測", "指考"].includes(era) || !/^\d{2,3}$/.test(year) || !/^\d{1,2}$/.test(no)) {
    return res.status(400).json({ error: "bad payload" });
  }

  const typeLabel = TYPE_LABELS[b.type] || "其他";
  const desc = clip(b.desc, 300).trim();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ error: "not configured" });

  const text = [
    "【學測英文題庫勘誤回報】",
    `題目：${era} ${year} 年第 ${no} 題（${id}）`,
    `類型：${typeLabel}`,
    desc ? `描述：${desc}` : "（未填寫描述）",
  ].join("\n");

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!r.ok) return res.status(502).json({ error: "telegram send failed" });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ error: "network error" });
  }
}
