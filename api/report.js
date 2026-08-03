const DEFAULT_ORIGINS = new Set([
  "https://gsat-english-lac.vercel.app",
  "https://gsat-english-bqe.pages.dev",
  "https://gsat-english.netlify.app"
]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 6;
const rateBuckets = globalThis.__GSAT_ENGLISH_REPORT_RATE_BUCKETS__
  || (globalThis.__GSAT_ENGLISH_REPORT_RATE_BUCKETS__ = new Map());

export function clean(value, max = 800) {
  return String(value == null ? "" : value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export function formatMessage(input) {
  const p = input || {};
  const year = clean(p.year, 10);
  const options = clean(p.options, 1600);
  const context = clean(p.context, 1800);
  const explain = clean(p.explain, 1200);
  const lines = [
    "學測-英文科題目問題回報",
    "",
    `題目：${clean(p.questionId, 80) || "未提供"}`,
    `來源：${clean(p.era, 20)} ${year}${year ? " 年" : ""}第 ${clean(p.no, 10)} 題`,
    ...(clean(p.originalNo, 10) ? [`原卷題號：${clean(p.originalNo, 10)}`] : []),
    `分類：${clean(p.category, 40) || "未提供"}`,
    `問題類型：${clean(p.issueType, 40) || "其他"}`,
    `回報內容：${clean(p.note, 800) || "未補充說明"}`,
    `學生選擇：${clean(p.picked, 20) || "未作答"}`,
    `標準答案：${clean(p.answer, 40) || "未提供"}`,
    "",
    `題幹：${clean(p.stem, 500) || "未提供"}`,
    ...(options ? [`完整選項：\n${options}`] : []),
    ...(context ? [`題組脈絡：${context}`] : []),
    ...(explain ? [`目前解析：${explain}`] : []),
    "",
    `頁面：${clean(p.url, 300)}`
  ];
  return lines.join("\n").slice(0, 3900);
}

function allowedOrigins() {
  const extras = clean(process.env.REPORT_ALLOWED_ORIGINS || "", 1000)
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  return new Set([...DEFAULT_ORIGINS, ...extras]);
}

function setCors(req, res) {
  const origin = clean(req.headers?.origin || "", 300);
  const local = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  if (allowedOrigins().has(origin) || local) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isRateLimited(req) {
  const forwarded = clean(req.headers?.["x-forwarded-for"] || "", 200);
  const key = forwarded.split(",")[0].trim() || clean(req.socket?.remoteAddress || "unknown", 100);
  const now = Date.now();
  const recent = (rateBuckets.get(key) || []).filter(timestamp => now - timestamp < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    rateBuckets.set(key, recent);
    return true;
  }
  recent.push(now);
  rateBuckets.set(key, recent);
  if (rateBuckets.size > 500) {
    for (const [ip, timestamps] of rateBuckets) {
      if (!timestamps.some(timestamp => now - timestamp < RATE_WINDOW_MS)) rateBuckets.delete(ip);
    }
  }
  return false;
}

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "僅接受 POST" });

  const origin = clean(req.headers?.origin || "", 300);
  const local = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  if (origin && !allowedOrigins().has(origin) && !local) {
    return res.status(403).json({ ok: false, error: "不允許的來源" });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  } catch {
    return res.status(400).json({ ok: false, error: "回報格式錯誤" });
  }
  if (clean(body.website, 120)) return res.status(200).json({ ok: true });
  if (!clean(body.questionId, 80) || !clean(body.issueType, 40)) {
    return res.status(400).json({ ok: false, error: "回報資料不完整" });
  }
  if (isRateLimited(req)) {
    return res.status(429).json({ ok: false, error: "回報次數過多，請稍後再試" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(503).json({ ok: false, error: "教師回報系統尚未完成設定" });
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(body),
      disable_web_page_preview: true
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) {
    console.error("Telegram report delivery failed", response.status, result.description || "unknown");
    return res.status(502).json({ ok: false, error: "回報暫時無法送出，請稍後再試" });
  }
  return res.status(200).json({ ok: true });
}

export { DEFAULT_ORIGINS };
