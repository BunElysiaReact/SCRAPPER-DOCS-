import React from 'react';
import { Link } from "../router.js";
import s from "../styles/shared.module.css.js";
export default function HowItWorks() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "ARCHITECTURE"), React.createElement("h1", null, "\uD83D\uDD04 How SCRAPPER Works"), React.createElement("p", null, "Two phases. One local API. Complete session control.")), React.createElement("h2", null, "\uD83C\uDFD7️ Architecture"), React.createElement("p", null, "SCRAPPER is composed of three independent layers that work together:"), React.createElement("div", {
    className: s.archDiagram
  }, React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "┌─────────────────────────────────────────────────┐"), `
`, React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "│"), " ", React.createElement("span", {
    style: { color: "var(--accent3)" }
  }, "\uD83C\uDF10 Browser Extension"), "  (Brave / Chrome / Edge / Firefox)     ", React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "│"), "   Captures: cookies, tokens, requests, DOM, fingerprint  ", React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "var(--accent)" }
  }, "└─────────────────────────┬───────────────────────┘"), `
`, `                          │  Native Messaging (CDP)
`, React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "┌─────────────────────────▼───────────────────────┐"), `
`, React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "│"), " ", React.createElement("span", {
    style: { color: "var(--accent3)" }
  }, "⚙️  C Native Host"), "  (debug_host / debug_host.exe)         ", React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "│"), "   Ultra-low latency — Unix socket / named pipe          ", React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "#a78bfa" }
  }, "└─────────────────────────┬───────────────────────┘"), `
`, `                          │  HTTP / localhost
`, React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "┌─────────────────────────▼───────────────────────┐"), `
`, React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "│"), " ", React.createElement("span", {
    style: { color: "var(--accent3)" }
  }, "\uD83D\uDCE1 Python REST API"), "  (api.py · localhost:8080)             ", React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "│"), "   /session  /tokens  /fingerprint  /dom  /export        ", React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "│"), `
`, React.createElement("span", {
    style: { color: "var(--accent4)" }
  }, "└─────────────────────────┬───────────────────────┘"), `
`, `                          │  HTTP GET
`, `        ┌─────────────────┼─────────────────┐
`, `     Python            curl             Node.js
`, `     Playwright      Puppeteer          Selenium
`), React.createElement("h2", null, "\uD83D\uDCF8 Phase 1: Capture"), React.createElement("p", null, "While your browser is open and you're logged in, SCRAPPER silently captures everything:"), React.createElement("div", {
    className: s.steps
  }, [
    { n: "1", title: "Open your browser with the SCRAPPER extension loaded", desc: "The extension activates automatically. No manual trigger needed." },
    { n: "2", title: "Log into the sites you want to automate", desc: "Complete authentication normally — 2FA, CAPTCHA, everything. SCRAPPER watches the session that's created." },
    { n: "3", title: "Browse naturally, click buttons, make requests", desc: "Every network request, DOM state, cookie change, and token is captured in real-time." },
    { n: "4", title: "Session data is stored locally", desc: "Everything saves to your ~/scrapper/data folder. No cloud. No external servers." }
  ].map((step) => React.createElement("div", {
    key: step.n,
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, step.n), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, step.title), React.createElement("div", {
    className: s.stepDesc
  }, step.desc))))), React.createElement("h2", null, "\uD83E\uDD16 Phase 2: Automate"), React.createElement("p", null, "Once captured, the browser can close. Your scripts fetch real session data from the local API."), React.createElement("div", {
    className: s.steps
  }, [
    { n: "1", title: "Your script calls GET /api/v1/session/all", desc: "The Python API (localhost:8080) returns your real cookies, tokens, and fingerprint." },
    { n: "2", title: "Inject into your automation tool", desc: "Pass the real cookies to Playwright, Puppeteer, requests, or any HTTP client." },
    { n: "3", title: "Make authenticated requests", desc: "Your requests look identical to your real browser session — same fingerprint, same cookies, same headers." },
    { n: "4", title: "Refresh when needed", desc: "If a session expires, open the browser, browse for a minute, and the API auto-updates." }
  ].map((step) => React.createElement("div", {
    key: step.n,
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, step.n), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, step.title), React.createElement("div", {
    className: s.stepDesc
  }, step.desc))))), React.createElement("h2", null, "\uD83D\uDCE6 What SCRAPPER Captures"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Category"), React.createElement("th", null, "What's Captured"), React.createElement("th", null, "Firefox"))), React.createElement("tbody", null, [
    ["\uD83C\uDF6A Cookies", "All cookies including HttpOnly, Secure, all domains", "green", "✅ Full"],
    ["\uD83D\uDCBE Storage", "localStorage & sessionStorage", "green", "✅ Full"],
    ["\uD83D\uDD11 Auth Tokens", "Bearer, JWT, CSRF, and custom tokens", "green", "✅ Full"],
    ["\uD83D\uDDA5️ Fingerprint", "User agent, screen, timezone, language, headers", "yellow", "⚠️ Partial"],
    ["\uD83D\uDCE4 Requests", "All HTTP requests — URLs, methods, headers, POST data", "yellow", "⚠️ No bodies"],
    ["\uD83D\uDCE5 Responses", "All HTTP responses — status, headers, bodies", "yellow", "⚠️ No bodies"],
    ["\uD83C\uDF33 DOM State", "Full DOM snapshots, selector testing, tag/class/ID maps", "red", "❌ CDP only"]
  ].map(([cat, desc, color, ff]) => React.createElement("tr", {
    key: cat
  }, React.createElement("td", null, React.createElement("strong", null, cat)), React.createElement("td", null, desc), React.createElement("td", null, React.createElement("span", {
    className: s[color]
  }, ff))))))), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Firefox limitation:"), " No Chrome Debugger Protocol support. Use Brave, Chrome, or Edge for full capture.")), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnPrimary
  }, "\uD83D\uDC27 Setup on Linux"), React.createElement(Link, {
    to: "/installation/windows",
    className: s.btnSecondary
  }, "\uD83E\uDE9F Setup on Windows")));
}
