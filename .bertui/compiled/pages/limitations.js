import React from 'react';
import { Link } from "../router.js";
import s from "../styles/shared.module.css.js";
export default function Limitations() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "LIMITATIONS"), React.createElement("h1", null, "⚠️ Limitations"), React.createElement("p", null, "Honest expectations. Read this before you automate anything important.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83C\uDFAF"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Why this page exists:"), " SCRAPPER is powerful, but it's not magic. Understanding its limits will save you hours of debugging.")), React.createElement("h2", null, "✅ What SCRAPPER CAN Do"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Capability"), React.createElement("th", null, "Details"))), React.createElement("tbody", null, [
    ["Capture REAL cookies and tokens", "Including HttpOnly cookies invisible to JavaScript"],
    ["Save sessions for reuse", "Days to months depending on the site"],
    ["Bypass bot detection", "Uses real TLS fingerprint and real session — not flagged as automated"],
    ["Export in multiple formats", "JSON, JSONL, HAR, CSV, TXT — works with any tool"],
    ["Serve via clean local REST API", "Any language that can make HTTP requests can use the data"],
    ["Reveal hidden API endpoints", "Captures all network traffic so you see exactly what calls are made"]
  ].map(([cap, detail]) => React.createElement("tr", {
    key: cap
  }, React.createElement("td", null, React.createElement("span", {
    className: s.green
  }, "✅ ", cap)), React.createElement("td", null, detail)))))), React.createElement("h2", null, "❌ What SCRAPPER CANNOT Do"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Limitation"), React.createElement("th", null, "What It Means"))), React.createElement("tbody", null, [
    ["Scrape without you browsing first", "You must log in and browse the target site manually at least once"],
    ["Guess cookies or tokens", "SCRAPPER only captures what your real browser receives"],
    ["Extend cookie lifetimes", "When the site expires your cookies, they expire"],
    ["Work without native host running", "C native host + browser extension must both be running"],
    ["Run headless on a server", "Requires a real browser with the extension loaded"]
  ].map(([lim, meaning]) => React.createElement("tr", {
    key: lim
  }, React.createElement("td", null, React.createElement("span", {
    className: s.red
  }, "❌ ", lim)), React.createElement("td", null, meaning)))))), React.createElement("h2", null, "\uD83D\uDEA8 Risks to Be Aware Of"), React.createElement("div", {
    className: `${s.callout} ${s.calloutDanger}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDEA8"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Account Risk:"), " SCRAPPER uses your real identity. Aggressive rate-limit hitting or violating a site's ToS can get your REAL account banned. Use delays. Be conservative.")), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Risk"), React.createElement("th", null, "Mitigation"))), React.createElement("tbody", null, [
    ["Brittle session lifespan", "Set up a session refresh pipeline. Monitor for 401/403 responses."],
    ["Internal APIs change without notice", "Pin to specific API versions if available. Monitor for breaking changes."],
    ["Account ban risk", "Use randomized delays (1-5s), respect rate limits, don't violate ToS."],
    ["Single device binding", "device-id is tied to one session — can't easily share across machines yet."],
    ["Learning curve", "You must read network traffic to understand correct API payloads. Use the Intel tab."]
  ].map(([risk, fix]) => React.createElement("tr", {
    key: risk
  }, React.createElement("td", null, React.createElement("span", {
    className: s.yellow
  }, "⚠️ ", risk)), React.createElement("td", null, fix)))))), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnPrimary
  }, "\uD83D\uDC27 Get Started →"), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/issues",
    className: s.btnGhost,
    target: "_blank",
    rel: "noreferrer"
  }, "\uD83D\uDC1B Report an Issue")));
}
