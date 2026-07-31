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
