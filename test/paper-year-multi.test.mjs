import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const index = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("教師出卷年度採核取方塊複選", () => {
  assert.match(index, /id="paperYearQuickOptions"/);
  assert.match(index, /class="paper-year-checkbox"/);
  assert.match(index, /function selectedPaperYearKeys\(\)/);
  assert.match(index, /years\.has\(`\$\{q\.era\}\|\$\{q\.year\}`\)/);
});

test("首頁年度採核取方塊複選並套用到題庫篩選", () => {
  assert.match(index, /id="mainYearOptions"/);
  assert.match(index, /class="main-year-checkbox"/);
  assert.match(index, /function selectedYearKeys\(\)/);
  assert.match(index, /years\.has\(`\$\{q\.era\}\|\$\{q\.year\}`\)/);
});

test("教師出卷首次只渲染一頁題目，避免首頁一次建立全部題目", () => {
  assert.match(index, /const PAPER_PAGE_SIZE\s*=\s*\d+/);
  assert.match(index, /function renderPaperPage\(\)/);
  assert.match(index, /paperPool\.slice\(start,\s*start\s*\+\s*PAPER_PAGE_SIZE\)/);
  assert.match(index, /id="paperPrevBtn"/);
  assert.match(index, /id="paperNextBtn"/);
});
