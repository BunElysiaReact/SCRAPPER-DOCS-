import React from 'react';
import { Link } from "../router.js";
import s from "../styles/shared.module.css.js";
const tabs = [
  { name: "\uD83D\uDCE1 Live", desc: "Real-time stream of all captured network events as they happen." },
  { name: "\uD83D\uDCC4 Bodies", desc: "HTTP response bodies — JSON, HTML, SVG, images with preview." },
  { name: "\uD83D\uDCE5 Responses", desc: "All HTTP responses by domain, filterable by flags." },
  { name: "\uD83E\uDDE0 Intel", desc: "Per-domain summary — tokens, cookies, endpoints, DOM map." },
  { name: "\uD83D\uDD11 Tokens", desc: "Bearer tokens, task tokens, auth cookies, and curl snippets." },
  { name: "\uD83D\uDEE3️ Endpoints", desc: 'All discovered API endpoints with "Copy for LLM" feature.' },
  { name: "\uD83C\uDF33 DOM Map", desc: "Full tag/class/ID tree — click any item to auto-generate selectors." },
  { name: "\uD83D\uDD0D Find", desc: "Test CSS selectors against real rendered HTML instantly." },
  { name: "\uD83E\uDDED Nav", desc: "Navigate and track tabs, dump cookies, capture HTML." },
  { name: "\uD83D\uDCCB Queue", desc: "Batch-process lists of URLs with configurable human-like delays." }
];
export default function Dashboard() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "DASHBOARD"), React.createElement("h1", null, "\uD83D\uDCCA Dashboard Guide"), React.createElement("p", null, "Open at ", React.createElement("code", null, "http://localhost:3000"), " (dev) or ", React.createElement("code", null, "http://localhost:8080"), " (production).")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, "The dashboard is a BertUI React app served by the Python API. All data is local — nothing leaves your machine.")), React.createElement("h2", null, "\uD83D\uDDC2️ Dashboard Tabs"), React.createElement("div", {
    className: s.dashGrid
  }, tabs.map((tab) => React.createElement("div", {
    key: tab.name,
    className: s.dashCard
  }, React.createElement("div", {
    className: "dcName",
    style: { fontWeight: 700, color: "var(--text)", marginBottom: "4px", fontSize: "14px" }
  }, tab.name), React.createElement("p", null, tab.desc)))), React.createElement("h2", null, "\uD83C\uDF33 DOM Mapper"), React.createElement("p", null, "The DOM Map tab gives you a full tree view of every tag, class, and ID on any captured page. Click any element to:"), React.createElement("div", {
    className: s.steps
  }, [
    { n: "→", t: "Auto-generate CSS selectors", d: "Click any DOM element to instantly generate a working CSS selector." },
    { n: "→", t: "Copy as scraper code", d: "Auto-generates Python/JS code to extract that element's text or attribute." },
    { n: "→", t: "Test selectors live", d: "Switch to the Find tab to test any CSS selector against the real rendered DOM." }
  ].map((step, i) => React.createElement("div", {
    key: i,
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum,
    style: { fontSize: "16px", width: "28px", height: "28px" }
  }, step.n), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, step.t), React.createElement("div", {
    className: s.stepDesc
  }, step.d))))), React.createElement("h2", null, "\uD83D\uDD11 Token Extractor"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Token Type"), React.createElement("th", null, "Detection Method"))), React.createElement("tbody", null, [
    ["Bearer Tokens", "Authorization: Bearer ... headers in captured requests"],
    ["JWT Tokens", "Detects base64-encoded JSON web token format"],
    ["CSRF Tokens", "Looks for X-CSRF-Token, _csrf, csrf_token patterns"],
    ["Custom Auth Headers", "Flags any X-* header appearing in multiple requests"],
    ["Auth Cookies", "Identifies cookies with auth-related names"]
  ].map(([type, method]) => React.createElement("tr", {
    key: type
  }, React.createElement("td", null, React.createElement("strong", null, type)), React.createElement("td", null, method)))))), React.createElement("h2", null, "\uD83D\uDCCB URL Queue"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Setting"), React.createElement("th", null, "Description"), React.createElement("th", null, "Default"))), React.createElement("tbody", null, [
    ["Delay (min)", "Minimum delay between requests in seconds", "1s"],
    ["Delay (max)", "Maximum delay — randomized per request", "3s"],
    ["Concurrency", "How many tabs to open simultaneously", "1"],
    ["Capture HTML", "Save full DOM snapshot per URL", "Off"]
  ].map(([s2, desc, def]) => React.createElement("tr", {
    key: s2
  }, React.createElement("td", null, React.createElement("code", null, s2)), React.createElement("td", null, desc), React.createElement("td", null, React.createElement("code", null, def))))))), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Use delays:"), " Always use human-like delays (1-5s) when batch processing. Rapid requests from your real session can trigger rate limits or bans.")), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/examples",
    className: s.btnPrimary
  }, "\uD83D\uDCBB Code Examples →"), React.createElement(Link, {
    to: "/limitations",
    className: s.btnSecondary
  }, "⚠️ Limitations")));
}
