import React from "react";
import { Link } from "../../router.js";
import { Code } from "bertui-code";
import s from "../../styles/shared.module.css.js";
const psInstall = "irm https://raw.githubusercontent.com/BunElysiaReact/SCRAPY/main/install.ps1 | iex";
const pipCode = "pip install pywin32";
const manifestCode = `{
  "name": "com.scraper.core",
  "description": "Scraper Core Native Host",
  "path": "C:\\\\Users\\\\YOUR_USERNAME\\\\scrapper\\\\windows\\\\c_core\\\\native_host\\\\debug_host.exe",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://YOUR_EXTENSION_ID_HERE/"
  ]
}`;
const braveCopy = 'copy "%USERPROFILE%\\scrapper\\windows\\config\\com.scraper.core.json" "%APPDATA%\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts\\"';
const chromeCopy = 'copy "%USERPROFILE%\\scrapper\\windows\\config\\com.scraper.core.json" "%APPDATA%\\Google\\Chrome\\NativeMessagingHosts\\"';
const edgeCopy = 'copy "%USERPROFILE%\\scrapper\\windows\\config\\com.scraper.core.json" "%APPDATA%\\Microsoft\\Edge\\NativeMessagingHosts\\"';
const startApiCode = `cd %USERPROFILE%\\scrapper\\windows\\python_api
python api.py`;
const startDashCode = `cd %USERPROFILE%\\scrapper\\windows\\ui\\scrapperui
bun install && bun run dev`;
const folderCode = `%USERPROFILE%\\scrapper\\windows\\
├── c_core/
│   └── native_host/
│       ├── debug_host.exe         <- C native messaging host
│       └── scraper_cli.exe        <- CLI client
├── config/
│   └── com.scraper.core.json      <- Edit this!
├── extension/
│   ├── brave/                      <- Load in Brave/Chrome
│   │   ├── background.js
│   │   ├── content.js
│   │   ├── icon.png
│   │   ├── manifest.json
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── stealth.js
│   ├── chrome/
│   │   └── Readme.MD
│   └── firefox/
│       ├── background.js
│       ├── content.js
│       ├── manifest.json
│       └── popup.html
├── python_api/
│   ├── api.py
│   └── dashboard.html
├── rust_finder/
│   └── rust_finder.exe            <- Fast HTML selector engine
└── ui/
    └── scrapperui/                 <- Dashboard source (optional)
        ├── dist/
        ├── public/
        └── src/`;
export default function WindowsInstall() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "INSTALLATION"), React.createElement("h1", null, "\uD83E\uDE9F Windows Setup"), React.createElement("p", null, "Pre-compiled EXEs. One dependency. BAT scripts to start/stop everything.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Dev note:"), " SCRAPER is developed and tested on Linux. The Windows paths and installer have been carefully thought through, but are not personally tested by the author. If something's off, open an issue — contributions welcome.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "ℹ️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Windows difference:"), " The Python API uses ", React.createElement("code", null, "pywin32"), " for named pipe communication. This is the only extra dependency.")), React.createElement("div", {
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
  }, "The Python API reads from the data folder created by the C code. If you start Python first, the folder won't exist yet!"))), React.createElement("h2", null, "\uD83D\uDDA5️ Which UI do you want?"), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("p", {
    style: { marginBottom: "10px" }
  }, "SCRAPER comes with ", React.createElement("strong", null, "two UI options"), " — both show the same data, same features. Pick whichever fits you:"), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "UI"), React.createElement("th", null, "How to start"), React.createElement("th", null, "URL"), React.createElement("th", null, "Requires"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Python built-in")), React.createElement("td", null, React.createElement("code", null, "python api.py")), React.createElement("td", null, React.createElement("code", null, "http://localhost:8080")), React.createElement("td", null, "Just Python 3 + pywin32")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Bun dashboard")), React.createElement("td", null, React.createElement("code", null, "bun run dev")), React.createElement("td", null, React.createElement("code", null, "http://localhost:3000")), React.createElement("td", null, "Bun or Node.js + api.py running")))), React.createElement("p", {
    style: { marginTop: "10px", fontSize: "13px", color: "var(--text3)" }
  }, "The Bun dashboard still talks to the Python API — so if you use it, you need api.py running too."))), React.createElement("h2", null, "⚡ One-Line Install (PowerShell)"), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, "Run PowerShell as Administrator to register native messaging hosts correctly.")), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, psInstall), React.createElement("h2", null, "\uD83D\uDD27 Manual Setup (Developers Only)"), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/tree/main/windows",
    className: s.btnSecondary,
    target: "_blank",
    rel: "noreferrer",
    style: { display: "inline-flex", marginBottom: "24px" }
  }, "\uD83D\uDCC1 Open windows/ folder on GitHub"), React.createElement("div", {
    className: s.steps
  }, React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "1"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Download the windows/ folder"), React.createElement("div", {
    className: s.stepDesc
  }, "Place it at ", React.createElement("code", null, "C:\\Users\\YOUR_USERNAME\\scrapper\\windows\\")))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "2"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Install the one Python dependency"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, pipCode))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "3"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Edit the native messaging manifest"), React.createElement("div", {
    className: s.stepDesc
  }, "Open ", React.createElement("code", null, "%USERPROFILE%\\scrapper\\windows\\config\\com.scraper.core.json"), " and replace YOUR_USERNAME and YOUR_EXTENSION_ID:"), React.createElement(Code, {
    language: "json",
    theme: "dark"
  }, manifestCode), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`,
    style: { marginTop: "10px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, "Run ", React.createElement("code", null, "echo %USERNAME%"), " in CMD to see your actual username.")))), React.createElement("div", {
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
  }, braveCopy), React.createElement("p", {
    style: { fontSize: "13px", color: "var(--text3)", margin: "8px 0 6px" }
  }, "Chrome:"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, chromeCopy), React.createElement("p", {
    style: { fontSize: "13px", color: "var(--text3)", margin: "8px 0 6px" }
  }, "Edge:"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, edgeCopy))), React.createElement("div", {
    className: s.step
  }, React.createElement("div", {
    className: s.stepNum
  }, "5"), React.createElement("div", {
    className: s.stepBody
  }, React.createElement("div", {
    className: s.stepTitle
  }, "Load the browser extension"), React.createElement("div", {
    className: s.stepDesc
  }, "Go to ", React.createElement("code", null, "brave://extensions"), " → Enable Developer Mode → Load Unpacked → Select", " ", React.createElement("code", null, "%USERPROFILE%\\scrapper\\windows\\extension\\brave\\"), ". Copy the Extension ID and paste it back into Step 3."), React.createElement("div", {
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
  }, "Or double-click ", React.createElement("code", null, "scrapy-start.bat"), ". Open ", React.createElement("strong", null, "http://localhost:8080"), " → Built-in UI ready. \uD83C\uDF89"))), React.createElement("div", {
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
  }, "Open ", React.createElement("strong", null, "http://localhost:3000"), " → Bun dashboard ready. \uD83C\uDF89")))), React.createElement("h2", null, "\uD83D\uDCC1 Folder Structure After Install"), React.createElement(Code, {
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
