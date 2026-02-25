import React from 'react';
import { Link } from "../router.js";
import styles from "../styles/home.module.css.js";
import s from "../styles/shared.module.css.js";
export default function Home() {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: styles.hero
  }, React.createElement("div", {
    className: styles.heroInner
  }, React.createElement("div", {
    className: styles.badge
  }, "v2.1.0 · Session Observer · Local Only"), React.createElement("h1", {
    className: styles.title
  }, "The Session Observer", React.createElement("span", {
    className: styles.gradient
  }, "for Web Automation")), React.createElement("p", {
    className: styles.subtitle
  }, "SCRAPPER isn't a scraper — it's a ", React.createElement("strong", null, "session observer"), " that captures your real browser data for use in any automation tool. Cookies, tokens, fingerprint — all served via a clean local REST API.", React.createElement("br", null), React.createElement("br", null), React.createElement("strong", null, "\uD83D\uDD12 No domain. No cloud. All local. All yours.")), React.createElement("div", {
    className: styles.actions
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnPrimary
  }, "\uD83D\uDC27 Get Started on Linux"), React.createElement(Link, {
    to: "/installation/windows",
    className: s.btnSecondary
  }, "\uD83E\uDE9F Windows Setup"), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY",
    className: s.btnGhost,
    target: "_blank",
    rel: "noreferrer"
  }, "⭐ GitHub"), React.createElement(Link, {
    to: "/faq",
    className: s.btnPrimary
  }, "F.A.Q")), React.createElement("div", {
    className: styles.stats
  }, React.createElement("div", {
    className: styles.stat
  }, React.createElement("span", {
    className: styles.statValue
  }, "97%"), React.createElement("span", {
    className: styles.statLabel
  }, "Success Rate")), React.createElement("div", {
    className: styles.stat
  }, React.createElement("span", {
    className: styles.statValue
  }, "~20MB"), React.createElement("span", {
    className: styles.statLabel
  }, "RAM Usage")), React.createElement("div", {
    className: styles.stat
  }, React.createElement("span", {
    className: styles.statValue
  }, "4"), React.createElement("span", {
    className: styles.statLabel
  }, "Browser Support")), React.createElement("div", {
    className: styles.stat
  }, React.createElement("span", {
    className: styles.statValue
  }, "9"), React.createElement("span", {
    className: styles.statLabel
  }, "API Endpoints"))))), React.createElement("div", {
    className: s.page
  }, React.createElement("h2", null, "\uD83E\uDD14 The Problem SCRAPPER Solves"), React.createElement("p", null, "Every web automation tool — Puppeteer, Playwright, Selenium, even curl — tries to", " ", React.createElement("strong", null, "imitate"), " a human. But they're always guessing."), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Challenge"), React.createElement("th", null, "Why It's Hard"))), React.createElement("tbody", null, [
    ["Authentication", "Manually scripting logins for every site is tedious and fragile"],
    ["Session state", "Cookies expire, tokens rotate, localStorage gets cleared"],
    ["Reverse engineering", "Hours spent in DevTools understanding API patterns"],
    ["Bot detection", "TLS fingerprints, browser entropy, Cloudflare, hCaptcha"],
    ["Setup complexity", "Fighting with headless browsers, proxies, and stealth plugins"]
  ].map(([ch, why]) => React.createElement("tr", {
    key: ch
  }, React.createElement("td", null, React.createElement("strong", null, ch)), React.createElement("td", null, why)))))), React.createElement("h2", null, "\uD83D\uDCA1 What SCRAPPER Is (And Isn't)"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "SCRAPPER IS..."), React.createElement("th", null, "SCRAPPER IS NOT..."))), React.createElement("tbody", null, [
    ["\uD83D\uDD0D A session observer that watches YOUR real browser", "❌ A replacement for Puppeteer/Playwright/Selenium"],
    ["\uD83D\uDCBE A data capture tool that saves your actual session", "❌ A tool that scrapes websites for you"],
    ["\uD83D\uDCE1 A local API server serving your captured data", "❌ A hosted service or cloud platform"],
    ["\uD83E\uDDE0 A reverse engineering assistant revealing hidden APIs", '❌ A magic "scrape anything" button'],
    ["\uD83C\uDFAF A visual debugger for understanding site structure", "❌ A no-code automation builder"]
  ].map(([is, not]) => React.createElement("tr", {
    key: is
  }, React.createElement("td", null, is), React.createElement("td", null, not)))))), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "ℹ️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Key insight:"), " SCRAPPER doesn't scrape. It gives you the REAL data YOU need to scrape successfully.")), React.createElement("h2", null, "\uD83C\uDFD7️ Architecture Overview"), React.createElement("div", {
    className: s.flow
  }, React.createElement("div", {
    className: `${s.flowBox} ${s.flowCyan}`
  }, "\uD83C\uDF10 Browser Extension"), React.createElement("span", {
    className: s.flowArrow
  }, "→"), React.createElement("div", {
    className: `${s.flowBox} ${s.flowPurple}`
  }, "⚙️ C Native Host"), React.createElement("span", {
    className: s.flowArrow
  }, "→"), React.createElement("div", {
    className: `${s.flowBox} ${s.flowGreen}`
  }, "\uD83D\uDCE1 Python REST API"), React.createElement("span", {
    className: s.flowArrow
  }, "→"), React.createElement("div", {
    className: s.flowBox
  }, "\uD83E\uDD16 Your Scripts")), React.createElement("div", {
    className: s.platformGrid,
    style: { marginTop: "32px" }
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.platformCard
  }, React.createElement("div", {
    className: s.pcIcon
  }, "\uD83D\uDC27"), React.createElement("div", {
    className: s.pcName
  }, "Linux / macOS"), React.createElement("div", {
    className: s.pcDesc
  }, "No extra deps · Pure Python stdlib · One-line install")), React.createElement(Link, {
    to: "/installation/windows",
    className: s.platformCard
  }, React.createElement("div", {
    className: s.pcIcon
  }, "\uD83E\uDE9F"), React.createElement("div", {
    className: s.pcName
  }, "Windows"), React.createElement("div", {
    className: s.pcDesc
  }, "Pre-compiled EXEs · pywin32 required · BAT scripts"))), React.createElement("h2", null, "⚡ Quick Links"), React.createElement("div", {
    className: s.platformGrid
  }, [
    { to: "/api", icon: "\uD83D\uDCE1", name: "API Reference", desc: "9 endpoints" },
    { to: "/examples", icon: "\uD83D\uDCBB", name: "Code Examples", desc: "Python, curl, Playwright, Puppeteer" },
    { to: "/dashboard", icon: "\uD83D\uDCCA", name: "Dashboard Guide", desc: "Live feed, DOM mapper, tokens" },
    { to: "/downloads", icon: "\uD83D\uDCE6", name: "Downloads", desc: "Linux & Windows folders" }
  ].map((item) => React.createElement(Link, {
    key: item.to,
    to: item.to,
    className: s.platformCard
  }, React.createElement("div", {
    className: s.pcIcon,
    style: { fontSize: "24px", marginBottom: "8px" }
  }, item.icon), React.createElement("div", {
    className: s.pcName,
    style: { fontSize: "14px" }
  }, item.name), React.createElement("div", {
    className: s.pcDesc
  }, item.desc))))));
}
