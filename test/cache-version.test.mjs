import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const index = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const vercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

test("題庫資料使用版本網址且 Vercel 每次重新驗證，避免部署後仍載入舊題庫", () => {
  assert.match(index, /src="data\/bank\.js\?v=[^"]+"/);
  assert.match(index, /src="data\/option-stats\.js\?v=[^"]+"/);

  const dataHeaders = vercel.headers.find(rule => rule.source === "/data/(.*)");
  assert.ok(dataHeaders, "Vercel 必須設定題庫資料的快取規則");
  assert.deepEqual(dataHeaders.headers, [
    { key: "Cache-Control", value: "public, max-age=0, must-revalidate" }
  ]);
});
