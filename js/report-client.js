(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.GSAT_ENGLISH_REPORT = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const fields = [
    "questionId", "year", "era", "no", "originalNo", "category",
    "stem", "context", "options", "answer", "picked", "explain",
    "issueType", "note", "url", "website"
  ];
  const limits = {
    stem: 500,
    context: 1800,
    options: 1600,
    explain: 1200,
    note: 800,
    url: 300,
    website: 120
  };

  function text(value, max) {
    return String(value == null ? "" : value).trim().slice(0, max);
  }

  function buildPayload(input) {
    const source = input || {};
    return fields.reduce((payload, field) => {
      payload[field] = text(source[field], limits[field] || 80);
      return payload;
    }, {});
  }

  function endpoint(locationLike) {
    const hostname = String(locationLike?.hostname || "");
    return ["gsat-english-bqe.pages.dev", "localhost", "127.0.0.1"].includes(hostname)
      ? "/api/report"
      : "https://gsat-english-bqe.pages.dev/api/report";
  }

  async function submit(input, locationLike, fetchImpl) {
    const send = fetchImpl || fetch;
    const response = await send(endpoint(locationLike), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildPayload(input))
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || "回報暫時無法送出");
    return data;
  }

  return { buildPayload, endpoint, submit };
});
