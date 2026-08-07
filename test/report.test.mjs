import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

await import("../js/report-client.js");
const report = globalThis.GSAT_ENGLISH_REPORT;
const { formatMessage, default: handler } = await import("../api/report.js");

function responseRecorder() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.body = value; return this; },
    end() { return this; }
  };
}

test("題目回報只送出允許欄位並限制文字長度", () => {
  const payload = report.buildPayload({
    questionId: "指考92-60",
    year: 92,
    era: "指考",
    no: 60,
    originalNo: 60,
    category: "閱讀理解",
    stem: "題幹".repeat(300),
    context: "題組脈絡".repeat(500),
    options: "選項內容".repeat(600),
    answer: "C",
    picked: "B",
    explain: "解析".repeat(600),
    issueType: "答案或選項有疑問",
    note: "補充".repeat(400),
    url: "https://gsat-english-bqe.pages.dev/",
    unexpected: "不應送出"
  });

  assert.equal(payload.questionId, "指考92-60");
  assert.equal(payload.stem.length, 500);
  assert.equal(payload.context.length, 1800);
  assert.equal(payload.options.length, 1600);
  assert.equal(payload.explain.length, 1200);
  assert.equal(payload.note.length, 800);
  assert.equal("unexpected" in payload, false);
});

test("三個正式站都使用同一個 Cloudflare Pages 回報 API", () => {
  assert.equal(report.endpoint({ hostname: "gsat-english-bqe.pages.dev" }), "/api/report");
  assert.equal(
    report.endpoint({ hostname: "gsat-english-lac.vercel.app" }),
    "https://gsat-english-bqe.pages.dev/api/report"
  );
  assert.equal(
    report.endpoint({ hostname: "gsat-english.netlify.app" }),
    "https://gsat-english-bqe.pages.dev/api/report"
  );
});

test("前端送出回報後會解析成功結果", async () => {
  let request;
  const result = await report.submit(
    { questionId: "學測115-1", issueType: "解析不清楚" },
    { hostname: "gsat-english-bqe.pages.dev" },
    async (url, options) => {
      request = { url, options };
      return { ok: true, json: async () => ({ ok: true }) };
    }
  );

  assert.deepEqual(result, { ok: true });
  assert.equal(request.url, "/api/report");
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.headers["Content-Type"], "application/json");
});

test("Telegram 訊息保留完整題目脈絡與學生當下作答", () => {
  const message = formatMessage({
    questionId: "指考92-60",
    year: "92",
    era: "指考",
    no: "60",
    originalNo: "60",
    category: "閱讀理解",
    stem: "The passage was written mainly to ________.",
    context: "Passenger bag-matching and airline security",
    options: "(A) trade-offs\n(B) TSA mission\n(C) argue for bag-matching\n(D) electronic detection",
    answer: "C",
    picked: "B",
    explain: "全文主旨是主張行李配對為有效安全措施。",
    issueType: "答案或選項有疑問",
    note: "我覺得 B 也可以。",
    url: "https://gsat-english-bqe.pages.dev/?q=指考92-60"
  });

  assert.match(message, /指考92-60/);
  assert.match(message, /學生選擇：B/);
  assert.match(message, /標準答案：C/);
  assert.match(message, /完整選項：/);
  assert.match(message, /argue for bag-matching/);
  assert.match(message, /題組脈絡：Passenger bag-matching/);
  assert.match(message, /目前解析：全文主旨/);
});

test("題目脈絡很長時仍保留使用者的補充說明", () => {
  const message = formatMessage({
    questionId: "學測115-47",
    year: "115",
    era: "學測",
    no: "47",
    issueType: "其他",
    note: "這是一定要保留的使用者補充",
    stem: "題幹".repeat(250),
    options: "完整選項".repeat(400),
    context: "題組文章".repeat(500),
    explain: "目前解析".repeat(400)
  });

  assert.match(message, /這是一定要保留的使用者補充/);
  assert.ok(message.length <= 3900);
});

test("Vercel 回報 API 接受三個正式站的 CORS 預檢", async () => {
  for (const origin of [
    "https://gsat-english-lac.vercel.app",
    "https://gsat-english-bqe.pages.dev",
    "https://gsat-english.netlify.app"
  ]) {
    const res = responseRecorder();
    await handler({ method: "OPTIONS", headers: { origin } }, res);
    assert.equal(res.statusCode, 204);
    assert.equal(res.headers["Access-Control-Allow-Origin"], origin);
    assert.equal(res.headers["Access-Control-Allow-Methods"], "POST, OPTIONS");
  }
});

test("有效回報會由後端送往 Telegram，前端不會接觸機密", async () => {
  const originalFetch = globalThis.fetch;
  const originalToken = process.env.TELEGRAM_BOT_TOKEN;
  const originalChatId = process.env.TELEGRAM_CHAT_ID;
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ ok: true }) };
  };
  process.env.TELEGRAM_BOT_TOKEN = "test-token";
  process.env.TELEGRAM_CHAT_ID = "test-chat";

  try {
    const res = responseRecorder();
    await handler({
      method: "POST",
      headers: { origin: "https://gsat-english-bqe.pages.dev", "x-forwarded-for": "203.0.113.1" },
      body: {
        questionId: "指考92-60",
        year: "92",
        era: "指考",
        no: "60",
        issueType: "解析不清楚",
        stem: "The passage was written mainly to ________.",
        options: "(A) ...\n(B) ...\n(C) ...\n(D) ...",
        answer: "C"
      }
    }, res);

    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.body, { ok: true });
    assert.match(request.url, /^https:\/\/api\.telegram\.org\/bottest-token\/sendMessage$/);
    const telegramBody = JSON.parse(request.options.body);
    assert.equal(telegramBody.chat_id, "test-chat");
    assert.match(telegramBody.text, /指考92-60/);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
    else process.env.TELEGRAM_BOT_TOKEN = originalToken;
    if (originalChatId === undefined) delete process.env.TELEGRAM_CHAT_ID;
    else process.env.TELEGRAM_CHAT_ID = originalChatId;
  }
});

test("同一來源十分鐘最多送出六筆回報", async () => {
  const originalFetch = globalThis.fetch;
  const originalToken = process.env.TELEGRAM_BOT_TOKEN;
  const originalChatId = process.env.TELEGRAM_CHAT_ID;
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ ok: true }) });
  process.env.TELEGRAM_BOT_TOKEN = "test-token";
  process.env.TELEGRAM_CHAT_ID = "test-chat";

  try {
    for (let index = 1; index <= 7; index += 1) {
      const res = responseRecorder();
      await handler({
        method: "POST",
        headers: { origin: "https://gsat-english.netlify.app", "x-forwarded-for": "203.0.113.2" },
        body: {
          questionId: `學測115-${index}`,
          issueType: "解析不清楚"
        }
      }, res);
      assert.equal(res.statusCode, index <= 6 ? 200 : 429);
    }
  } finally {
    globalThis.fetch = originalFetch;
    if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
    else process.env.TELEGRAM_BOT_TOKEN = originalToken;
    if (originalChatId === undefined) delete process.env.TELEGRAM_CHAT_ID;
    else process.env.TELEGRAM_CHAT_ID = originalChatId;
  }
});

test("練習頁提供低輸入題目回報表單並附帶完整題目資料", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /js\/report-client\.js/);
  assert.match(html, /class="reportPanel"/);
  assert.match(html, /name="issueType"/);
  assert.match(html, /GSAT_ENGLISH_REPORT\.submit/);
  assert.match(html, /options:/);
  assert.match(html, /explain:/);
  assert.doesNotMatch(html, /mailto:hk6429@gmail\.com/);
});
