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

const banks = context.window.BANK;
const bank = banks.find(item => item.era === "學測" && item.year === 115);
const allowedCategories = new Set(["C1", "C2", "C3", "C4", "C5"]);
const allowedTags = new Set([
  "詞義辨析", "語境搭配", "轉承語", "語境選詞", "邏輯關係", "時態語意",
  "篇章指涉", "主旨連貫", "文意選填", "篇章結構", "主旨判讀", "語境推義",
  "細節檢索", "圖文整合", "篇章理解", "指涉判讀", "資訊排序", "推論判讀", "多文本整合"
]);
const allowedTextTypes = new Set([
  "詞彙題", "文法題", "綜合測驗", "文意選填", "篇章結構", "閱讀測驗", "混合題"
]);
const answerKeys = q => Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length
  ? q.acceptedAnswers
  : String(q.answer || "").split(",").filter(Boolean);

test("各年度題庫結構完整", () => {
  assert.ok(banks.length >= 1);
  assert.equal(new Set(banks.map(item => `${item.era}|${item.year}`)).size, banks.length);
  for (const item of banks) {
    assert.ok(["學測", "指考"].includes(item.era), `${item.year} 年考試別錯誤`);
    assert.ok(item.questions.length > 0, `${item.era}${item.year} 沒有題目`);
    assert.equal(
      new Set(item.questions.map(q => q.no)).size,
      item.questions.length,
      `${item.era}${item.year} 題號重複`
    );
    for (const q of item.questions) {
      assert.ok(q.answer, `${item.era}${item.year} 第 ${q.no} 題缺答案`);
      assert.ok(allowedCategories.has(q.cat), `${item.era}${item.year} 第 ${q.no} 題分類不受控`);
      assert.ok(allowedTextTypes.has(q.textType), `${item.era}${item.year} 第 ${q.no} 題題型不受控：${q.textType}`);
      for (const tag of q.tags) assert.ok(allowedTags.has(tag), `${item.era}${item.year} 第 ${q.no} 題標籤不受控：${tag}`);
      for (const answer of answerKeys(q)) {
        assert.ok(Object.hasOwn(q.options, answer), `${item.era}${item.year} 第 ${q.no} 題答案 ${answer} 不在選項內`);
      }
      if (q.group) assert.ok(item.groups[q.group], `${item.era}${item.year} 第 ${q.no} 題缺題組 ${q.group}`);
    }
  }
});

test("完整收錄 83–115 學測與 91–110 指考", () => {
  const expectedGsat = Array.from({length: 33}, (_, index) => 83 + index);
  const expectedAst = Array.from({length: 20}, (_, index) => 91 + index);
  const actualGsat = Array.from(banks.filter(item => item.era === "學測"), item => item.year).sort((a, b) => a - b);
  const actualAst = Array.from(banks.filter(item => item.era === "指考"), item => item.year).sort((a, b) => a - b);
  assert.deepEqual(actualGsat, expectedGsat);
  assert.deepEqual(actualAst, expectedAst);
  assert.equal(banks.length, 53);
  assert.equal(banks.reduce((sum, item) => sum + item.questions.length, 0), 2850);
});

test("年度題庫不重複內嵌官方統計", () => {
  const yearlyFiles = fs.readdirSync(path.join(root, "data")).filter(name => /^(g|z)\d{2,3}\.js$/.test(name));
  for (const name of yearlyFiles) {
    const yearlyContext = {window: {BANK: []}};
    vm.createContext(yearlyContext);
    vm.runInContext(fs.readFileSync(path.join(root, "data", name), "utf8"), yearlyContext);
    for (const q of yearlyContext.window.BANK[0].questions) {
      for (const field of ["pass", "disc", "opt", "low", "optUnanswered"]) {
        assert.equal(Object.hasOwn(q, field), false, `${name} 第 ${q.no} 題不應直接內嵌 ${field}`);
      }
    }
  }
});

test("115 年題庫題數、答案與官方統計完整", () => {
  assert.ok(bank);
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

    for (const answer of answerKeys(q)) {
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

test("官方一題兩解可接受任一公告答案", () => {
  const item = banks.find(candidate => candidate.era === "學測" && candidate.year === 84);
  const q45 = item?.questions.find(q => q.no === 45);
  assert.deepEqual(Array.from(q45?.acceptedAnswers || []), ["B", "C"]);
  for (const answer of answerKeys(q45)) assert.ok(Object.hasOwn(q45.options, answer));
  assert.equal(q45.multi, undefined);
});

test("已收錄年度的正式答對率、鑑別度與選項分析完整", () => {
  for (const item of banks) {
    const source = context.window.OPTION_STATS_SOURCES?.[`${item.era}|${item.year}`];
    if (!source) {
      for (const q of item.questions) {
        assert.equal(q.pass, undefined, `${item.era}${item.year} 第 ${q.no} 題不應臆測答對率`);
        assert.equal(q.disc, undefined, `${item.era}${item.year} 第 ${q.no} 題不應臆測鑑別度`);
        assert.equal(q.opt, undefined, `${item.era}${item.year} 第 ${q.no} 題不應臆測選項百分率`);
      }
      continue;
    }
    for (const q of item.questions) {
      assert.ok(Number.isFinite(q.pass), `${item.era}${item.year} 第 ${q.no} 題缺答對率`);
      assert.ok(Number.isFinite(q.disc), `${item.era}${item.year} 第 ${q.no} 題缺鑑別度`);
      assert.ok(q.opt, `${item.era}${item.year} 第 ${q.no} 題缺全體選項百分率`);
      assert.ok(q.low?.opt, `${item.era}${item.year} 第 ${q.no} 題缺低分組選項百分率`);
      assert.ok(q.optSource?.passDisc, `${item.era}${item.year} 第 ${q.no} 題缺正式統計來源`);
      assert.ok(q.optSource?.option, `${item.era}${item.year} 第 ${q.no} 題缺正式選項分析來源`);
      if (!q.multi) {
        assert.ok(
          Math.abs(q.opt[q.answer] - q.pass * 100) <= 1.000001,
          `${item.era}${item.year} 第 ${q.no} 題答對率 ${q.pass * 100} 與正答選項 ${q.opt[q.answer]} 差距超過官方整數四捨五入容許值`
        );
        const total = Object.values(q.opt).reduce((sum, value) => sum + value, 0) + (q.optUnanswered || 0);
        const roundingTolerance = Object.keys(q.opt).length > 6 ? 5 : 2;
        assert.ok(
          total >= 100 - roundingTolerance && total <= 100 + roundingTolerance,
          `${item.era}${item.year} 第 ${q.no} 題選項百分率總和異常：${total}`
        );
      }
    }
  }
});

test("題目圖片存在且具替代文字", () => {
  for (const item of banks) {
    for (const q of item.questions.filter(q => q.image)) {
      assert.ok(fs.existsSync(path.join(root, q.image)), `${item.era}${item.year} 第 ${q.no} 題圖片不存在`);
      assert.ok(q.imageAlt, `${item.era}${item.year} 第 ${q.no} 題圖片缺少替代文字`);
      assert.ok(q.imageAlt.length >= 20, `${item.era}${item.year} 第 ${q.no} 題圖片替代文字過短`);
      const entries = Object.entries(q.options || {});
      const imageOnly = entries.length > 0 && entries.every(([, value]) =>
        !String(value).trim() || /^Image [A-Z]$/.test(String(value))
      );
      if (imageOnly) {
        for (const [key] of entries) {
          assert.match(
            q.imageAlt,
            new RegExp(`(?:^|[^A-Z])${key}(?:[^A-Z]|$)`),
            `${item.era}${item.year} 第 ${q.no} 題替代文字缺少圖片選項 ${key}`
          );
        }
      }
    }
  }
});

test("題庫不含 Word 欄位碼或轉檔雜訊", () => {
  const artifact = /HYPERLINK|INCLUDEPICTURE|MERGEFORMAT|Administrator|�/i;
  for (const item of banks) {
    for (const [groupId, group] of Object.entries(item.groups || {})) {
      assert.doesNotMatch(
        JSON.stringify(group),
        artifact,
        `${item.era}${item.year} 題組 ${groupId} 含轉檔雜訊`
      );
    }
    for (const q of item.questions) {
      assert.doesNotMatch(
        JSON.stringify(q),
        artifact,
        `${item.era}${item.year} 第 ${q.no} 題含轉檔雜訊`
      );
    }
  }
});

test("已完成解析批次逐題完整", () => {
  const completed = [
    ["學測", 109, 56], ["學測", 107, 56], ["學測", 106, 56], ["學測", 104, 56],
    ["學測", 103, 56], ["學測", 102, 56], ["學測", 100, 56], ["學測", 99, 56],
    ["學測", 98, 56], ["學測", 96, 56], ["學測", 95, 56], ["學測", 94, 56],
    ["學測", 93, 55], ["學測", 91, 55], ["學測", 90, 55], ["學測", 88, 55],
    ["學測", 87, 60], ["學測", 86, 55], ["學測", 85, 50], ["學測", 83, 50],
    ["指考", 110, 51], ["指考", 109, 51], ["指考", 108, 51], ["指考", 107, 51],
    ["指考", 106, 51], ["指考", 105, 51], ["指考", 104, 51], ["指考", 103, 51]
  ];
  for (const [era, year, questionCount] of completed) {
    const item = banks.find(candidate => candidate.era === era && candidate.year === year);
    assert.ok(item);
    assert.equal(item.questions.length, questionCount);
    for (const q of item.questions) {
      assert.ok(q.explain, `${era}${year} 第 ${q.no} 題缺解析`);
      assert.ok(q.explain.trim().length >= 12, `${era}${year} 第 ${q.no} 題解析過短`);
      assert.doesNotMatch(q.explain, /TODO|待補|待確認|undefined|null/i);
    }
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
