import React from 'react';
import { Link } from "../../router.js";
import { Code } from "bertui-code";
import s from "../../styles/shared.module.css.js";
const regLinux = "scrapy-register-ext YOUR_EXTENSION_ID_HERE";
const regWin = "scrapper-register-ext.ps1 YOUR_EXTENSION_ID_HERE";
export default function BrowsersInstall() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "INSTALLATION"), React.createElement("h1", null, "\uD83E\uDDE9 Browser Extensions"), React.createElement("p", null, "Load the extension in developer mode. Brave and Chrome share the same extension folder.")), React.createElement("h2", null, "⭐ Brave & Chrome (Recommended)"), React.createElement("div", {
    className: `${s.callout} ${s.calloutSuccess}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "✅"), React.createElement("div", {
    className: s.calloutBody
  }, "Full feature support: CDP debugging, DOM mapping, fingerprint capture, stealth injection, live feed. Use the ", React.createElement("strong", null, "same"), " ", React.createElement("code", null, "extension/brave/"), " folder for both browsers.")), React.createElement("div", {
    className: s.steps
  }, [
    { n: "1", t: "Open the Extensions page", d: React.createElement("span", null, "Navigate to ", React.createElement("code", null, "brave://extensions"), " or ", React.createElement("code", null, "chrome://extensions")) },
    { n: "2", t: "Enable Developer mode", d: "Toggle the Developer mode switch in the top right corner." },
    { n: "3", t: "Click Load unpacked", d: React.createElement("span", null, "Select the ", React.createElement("code", null, "extension/brave/"), " folder.") },
    { n: "4", t: "Copy the Extension ID", d: "A 32-character string appears under the extension name. You need this for the manifest." }
  ].map((step) => React.createElement("div", {
    key: step.n,
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, step.n), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, step.t), React.createElement("div", {
    className: s.stepDesc
  }, step.d))))), React.createElement("h2", null, "\uD83D\uDD35 Microsoft Edge"), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "ℹ️"), React.createElement("div", {
    className: s.calloutBody
  }, "Edge is Chromium-based — use the same ", React.createElement("code", null, "extension/brave/"), " folder. Go to ", React.createElement("code", null, "edge://extensions"), " → Developer mode → Load unpacked.")), React.createElement("h2", null, "\uD83E\uDD8A Firefox"), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Firefox limitations:"), " No CDP support. Captures cookies, localStorage, basic headers — but NOT response bodies, DOM mapping, or fingerprint capture.")), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Feature"), React.createElement("th", null, "Firefox"))), React.createElement("tbody", null, [
    ["All cookies (including auth)", "green", "✅ Full"],
    ["localStorage / sessionStorage", "green", "✅ Full"],
    ["Basic network request/response logging", "green", "✅ Full"],
    ["Response bodies", "yellow", "⚠️ Not available"],
    ["DOM mapping", "red", "❌ CDP required"],
    ["Browser fingerprint capture", "red", "❌ CDP required"]
  ].map(([feat, color, val]) => React.createElement("tr", {
    key: feat
  }, React.createElement("td", null, feat), React.createElement("td", null, React.createElement("span", {
    className: s[color]
  }, val))))))), React.createElement("div", {
    className: s.steps
  }, [
    { n: "1", t: "Open Debugging", d: React.createElement("span", null, "Navigate to ", React.createElement("code", null, "about:debugging")) },
    { n: "2", t: "Click This Firefox", d: 'Click "This Firefox" in the left sidebar.' },
    { n: "3", t: "Load Temporary Add-on", d: React.createElement("span", null, "Select ", React.createElement("code", null, "extension/firefox/manifest.json")) }
  ].map((step) => React.createElement("div", {
    key: step.n,
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, step.n), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, step.t), React.createElement("div", {
    className: s.stepDesc
  }, step.d))))), React.createElement("h2", null, "\uD83D\uDD17 Register Your Extension ID"), React.createElement("p", null, "After loading the extension, register its ID with SCRAPPER:"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, regLinux), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, regWin), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/api",
    className: s.btnPrimary
  }, "\uD83D\uDCE1 API Reference →"), React.createElement(Link, {
    to: "/examples",
    className: s.btnSecondary
  }, "\uD83D\uDCBB Code Examples")));
}
