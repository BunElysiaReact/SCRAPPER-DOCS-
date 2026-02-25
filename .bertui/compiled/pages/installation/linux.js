import React from 'react';
import { Link } from "../../router.js";
import { Code } from "bertui-code";
import s from "../../styles/shared.module.css.js";
const oneLineCode = "curl -fsSL https://raw.githubusercontent.com/BunElysiaReact/SCRAPY/main/install.sh | bash";
const cloneCode = `git clone https://github.com/BunElysiaReact/SCRAPY.git ~/scrapper
cd ~/scrapper`;
const chmodCode = `chmod +x ~/scrapper/linux/c_core/native_host/debug_host
chmod +x ~/scrapper/linux/c_core/native_host/scraper_cli
chmod +x ~/scrapper/linux/rust_finder/target/release/rust_finder`;
const manifestCode = `{
  "name": "com.scraper.core",
  "description": "Scraper Core Native Host",
  "path": "/home/YOUR_USERNAME/scrapper/linux/c_core/native_host/debug_host",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://YOUR_EXTENSION_ID_HERE/"
  ]
}`;
const braveCopyCode = `cp ~/scrapper/linux/config/com.scraper.core.json \\
  ~/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts/`;
const chromeCopyCode = `cp ~/scrapper/linux/config/com.scraper.core.json \\
  ~/.config/google-chrome/NativeMessagingHosts/`;
const startApiCode = `cd ~/scrapper/linux/python_api
python3 api.py`;
const startDashCode = `cd ~/scrapper/linux/ui/scrapperui
bun install && bun run dev`;
const folderCode = `linux/
├── c_core/
│   └── native_host/
│       ├── debug_host          <- C native host binary
│       └── scraper_cli         <- CLI client binary
├── config/
│   └── com.scraper.core.json   <- Edit this!
├── extension/
│   ├── brave/                   <- Load in Brave/Chrome/Edge
│   └── firefox/                 <- Load in Firefox
├── python_api/
│   └── api.py                   <- REST API (no dependencies)
├── rust_finder/
│   └── rust_finder              <- CSS selector engine
└── ui/
    └── scrapperui/              <- Dashboard source (optional)`;
export default function LinuxInstall() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "INSTALLATION"), React.createElement("h1", null, "\uD83D\uDC27 Linux / macOS Setup"), React.createElement("p", null, "No extra dependencies. Pure Python stdlib. One-line install.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "For developers:"), " Cloning the full repo (~40MB) is only needed if you want to explore the code. Regular users should use the one-line installer below.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutSuccess}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "✅"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Linux advantage:"), " The Python API uses only standard library modules — no pip installs needed. Just Python 3.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`,
    style: { marginBottom: "24px", borderLeftColor: "var(--accent)" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDD34"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", {
    style: { fontSize: "1.1em" }
  }, "⚠️ IMPORTANT: Correct Startup Flow ⚠️"), React.createElement("p", {
    style: { marginTop: "8px", marginBottom: "4px" }
  }, "SCRAPER requires a specific order to work correctly:"), React.createElement("ol", {
    style: { marginTop: "4px", marginBottom: "4px", paddingLeft: "20px" }
  }, React.createElement("li", null, React.createElement("strong", null, "FIRST:"), " Load the browser extension (Step 5)"), React.createElement("li", null, React.createElement("strong", null, "SECOND:"), " The C native host creates your data folder when the extension runs"), React.createElement("li", null, React.createElement("strong", null, "THIRD:"), " Only then start the Python API server (Step 6)")), React.createElement("p", {
    style: { marginTop: "8px", marginBottom: "0", fontWeight: 500 }
  }, "The Python API reads from the data folder created by the C code. If you start Python first, the folder won't exist yet!"))), React.createElement("h2", null, "\uD83D\uDCCB Requirements"), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Requirement"), React.createElement("th", null, "Notes"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("code", null, "Python 3")), React.createElement("td", null, "Any recent version. Check: python3 --version")), React.createElement("tr", null, React.createElement("td", null, React.createElement("code", null, "Bun or Node.js")), React.createElement("td", null, "Only needed if you want the Bun dashboard UI. Not required.")), React.createElement("tr", null, React.createElement("td", null, React.createElement("code", null, "Brave / Chrome / Firefox")), React.createElement("td", null, "Chromium browser for full CDP support"))))), React.createElement("h2", null, "\uD83D\uDDA5️ Which UI do you want?"), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("p", {
    style: { marginBottom: "10px" }
  }, "SCRAPER comes with ", React.createElement("strong", null, "two UI options"), " — both show the same data, same features. Pick whichever fits you:"), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "UI"), React.createElement("th", null, "How to start"), React.createElement("th", null, "URL"), React.createElement("th", null, "Requires"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Python built-in")), React.createElement("td", null, React.createElement("code", null, "python3 api.py")), React.createElement("td", null, React.createElement("code", null, "http://localhost:8080")), React.createElement("td", null, "Just Python 3")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Bun dashboard")), React.createElement("td", null, React.createElement("code", null, "bun run dev")), React.createElement("td", null, React.createElement("code", null, "http://localhost:3000")), React.createElement("td", null, "Bun or Node.js + api.py running")))), React.createElement("p", {
    style: { marginTop: "10px", fontSize: "13px", color: "var(--text3)" }
  }, "The Bun dashboard still talks to the Python API — so if you use it, you need api.py running too."))), React.createElement("h2", null, "⚡ One-Line Install (Recommended)"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, oneLineCode), React.createElement("h2", null, "\uD83D\uDD27 Manual Setup (Developers Only)"), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`,
    style: { marginBottom: "16px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, "Cloning the full repository is ~40MB and only necessary if you want to modify the code. Most users should use the one-line installer above.")), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/tree/main/linux",
    className: s.btnSecondary,
    target: "_blank",
    rel: "noreferrer",
    style: { display: "inline-flex", marginBottom: "24px" }
  }, "\uD83D\uDCC1 Open linux/ folder on GitHub"), React.createElement("div", {
    className: s.steps
  }, React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "1"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Clone the repo"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, cloneCode))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "2"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Make binaries executable"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, chmodCode))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "3"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Edit the native messaging manifest"), React.createElement("div", {
    className: s.stepDesc
  }, "Open ", React.createElement("code", null, "~/scrapper/linux/config/com.scraper.core.json"), " and replace YOUR_USERNAME and YOUR_EXTENSION_ID:"), React.createElement(Code, {
    language: "json",
    theme: "dark"
  }, manifestCode))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "4"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Copy manifest to your browser NativeMessagingHosts"), React.createElement("p", {
    style: { fontSize: "13px", color: "var(--text3)", marginBottom: "6px" }
  }, "Brave:"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, braveCopyCode), React.createElement("p", {
    style: { fontSize: "13px", color: "var(--text3)", margin: "8px 0 6px" }
  }, "Chrome:"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, chromeCopyCode))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "5"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Load the browser extension"), React.createElement("div", {
    className: s.stepDesc
  }, "Go to ", React.createElement("code", null, "brave://extensions"), " → Enable Developer Mode → Load Unpacked → Select", " ", React.createElement("code", null, "~/scrapper/linux/extension/brave/"), ". Copy the Extension ID."), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`,
    style: { marginTop: "12px", padding: "8px 12px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDD34"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Stop here!"), " Make sure the extension is loaded and running before proceeding to Step 6. The C native host creates your data folder when the extension runs.")))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "6"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Start the API server"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, startApiCode), React.createElement("div", {
    className: s.stepDesc,
    style: { marginTop: "8px" }
  }, "Open ", React.createElement("strong", null, "http://localhost:8080"), " — the built-in UI is ready. \uD83C\uDF89"))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "7"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Start the Bun dashboard (optional)"), React.createElement("div", {
    className: s.stepDesc,
    style: { marginBottom: "8px" }
  }, "Only do this if you prefer the Bun UI. The Python API (Step 6) must already be running."), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, startDashCode), React.createElement("div", {
    className: s.stepDesc,
    style: { marginTop: "8px" }
  }, "Open ", React.createElement("strong", null, "http://localhost:3000"), " → Bun dashboard ready. \uD83C\uDF89")))), React.createElement("h2", null, "\uD83D\uDCC1 Folder Structure"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, folderCode), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/installation/browsers",
    className: s.btnPrimary
  }, "\uD83E\uDDE9 Browser Extension Setup →"), React.createElement(Link, {
    to: "/api",
    className: s.btnSecondary
  }, "\uD83D\uDCE1 API Reference")));
}
