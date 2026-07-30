import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = {window:{}};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "bank.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "option-stats.js"), "utf8"), context);

const [bank] = context.window.BANK;
const allowedCategories = new Set(["C1", "C2", "C3", "C4", "C5"]);
const allowedTags = new Set([
  "詞義辨析", "語境搭配", "轉承語", "語境選詞", "邏輯關係", "時態語意",
  "篇章指涉", "主旨連貫", "文意選填", "篇章結構", "主旨判讀", "語境推義",
  "細節檢索", "圖文整合", "篇章理解", "指涉判讀", "資訊排序", "推論判讀", "多文本整合"
]);

test("115 年題庫題數、答案與官方統計完整", () => {
  assert.equal(bank.year, 115);
  assert.equal(bank.questions.length, 47);
  assert.equal(bank.questions.filter(q => q.multi).length, 1);
  assert.equal(Object.keys(bank.groups).length, 8);

  for (const q of bank.questions) {
    assert.ok(q.answer, `第 ${q.no} 題缺答案`);
    assert.ok(Number.isFinite(q.pass), `第 ${q.no} 題缺答對率`);
    assert.ok(Number.isFinite(q.disc), `第 ${q.no} 題缺鑑別度`);
    assert.ok(q.opt, `第 ${q.no} 題缺全體選項百分率`);
    assert.ok(q.low?.opt, `第 ${q.no} 題缺低分組選項百分率`);
    assert.ok(allowedCategories.has(q.cat), `第 ${q.no} 題分類不受控`);
    for (const tag of q.tags) assert.ok(allowedTags.has(tag), `第 ${q.no} 題標籤不受控：${tag}`);

    for (const answer of q.answer.split(",")) {
      assert.ok(Object.hasOwn(q.options, answer), `第 ${q.no} 題答案 ${answer} 不在選項內`);
    }

    if (!q.multi) {
      const total = Object.values(q.opt).reduce((sum, value) => sum + value, 0) + q.optUnanswered;
      const roundingTolerance = Object.keys(q.opt).length > 6 ? 5 : 1;
      assert.ok(
        total >= 100 - roundingTolerance && total <= 100 + roundingTolerance,
        `第 ${q.no} 題選項百分率總和異常：${total}`
      );
      assert.ok(
        Math.abs(q.opt[q.answer] - q.pass * 100) < 1e-9,
        `第 ${q.no} 題答對率與正答選項百分率不一致`
      );
    }
  }

  const mixed = bank.questions.find(q => q.no === 49);
  assert.equal(mixed.answer, "A,D,E");
});

test("題目圖片存在且具替代文字", () => {
  for (const q of bank.questions.filter(q => q.image)) {
    assert.ok(fs.existsSync(path.join(root, q.image)), `第 ${q.no} 題圖片不存在`);
    assert.ok(q.imageAlt, `第 ${q.no} 題圖片缺少替代文字`);
  }
});

test("主要 HTML 內嵌 JavaScript 可解析", () => {
  for (const file of ["index.html", "check.html"]) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const [, source] of scripts) {
      assert.doesNotThrow(() => new Function(source), `${file} 內嵌 JavaScript 語法錯誤`);
    }
  }
});
