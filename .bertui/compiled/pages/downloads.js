import React from 'react';
import { Link } from "../router.js";
import { Code } from "bertui-code";
import s from "../styles/shared.module.css.js";
const chmodCode = "chmod +x debug_host scraper_cli rust_finder";
const buildCode = `# Linux
` + `gcc -O2 -o debug_host debug_host.c -lpthread
` + `cargo build --release
` + `
` + `# Windows (cross-compile)
` + `x86_64-w64-mingw32-gcc -o debug_host.exe debug_host_win.c
` + "cargo build --release --target x86_64-pc-windows-gnu";
export default function Downloads() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "DOWNLOADS"), React.createElement("h1", null, "\uD83D\uDCE6 Downloads"), React.createElement("p", null, "Download the platform folder from GitHub. No zip — direct folder with pre-compiled binaries.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "ℹ️"), React.createElement("div", {
    className: s.calloutBody
  }, "All binaries are pre-compiled — no Rust or C compiler required. Download the ", React.createElement("code", null, "linux/"), " or ", React.createElement("code", null, "windows/"), " folder directly.")), React.createElement("h2", null, "\uD83D\uDC27 Linux / macOS"), React.createElement("div", {
    className: s.downloadCard
  }, React.createElement("div", null, React.createElement("div", {
    className: s.downloadName
  }, "\uD83D\uDC27 linux/ folder"), React.createElement("div", {
    className: s.downloadMeta
  }, "Pre-compiled binaries · No extra deps · Pure Python stdlib")), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/tree/main/linux",
    className: s.downloadBtn,
    target: "_blank",
    rel: "noreferrer"
  }, "\uD83D\uDCC1 Open on GitHub →")), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "File"), React.createElement("th", null, "Description"))), React.createElement("tbody", null, [
    ["debug_host", "C native messaging host binary"],
    ["scraper_cli", "CLI client binary"],
    ["rust_finder", "Rust CSS selector engine"],
    ["api.py", "Python REST API (no dependencies)"],
    ["extension/brave/", "Browser extension (Brave/Chrome/Edge)"],
    ["extension/firefox/", "Browser extension (Firefox)"]
  ].map(([file, desc]) => React.createElement("tr", {
    key: file
  }, React.createElement("td", null, React.createElement("code", null, file)), React.createElement("td", null, desc)))))), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, "After downloading, make binaries executable:")), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, chmodCode), React.createElement("h2", null, "\uD83E\uDE9F Windows"), React.createElement("div", {
    className: s.downloadCard
  }, React.createElement("div", null, React.createElement("div", {
    className: s.downloadName
  }, "\uD83E\uDE9F windows/ folder"), React.createElement("div", {
    className: s.downloadMeta
  }, "Pre-compiled EXEs · Requires pywin32 · BAT start/stop scripts")), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/tree/main/windows",
    className: s.downloadBtn,
    target: "_blank",
    rel: "noreferrer"
  }, "\uD83D\uDCC1 Open on GitHub →")), React.createElement("div", {
    className: s.tableWrap
  }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "File"), React.createElement("th", null, "Description"))), React.createElement("tbody", null, [
    ["debug_host.exe", "C native messaging host"],
    ["scraper_cli.exe", "CLI client"],
    ["rust_finder.exe", "Rust CSS selector engine"],
    ["api.py", "Python REST API (requires pywin32)"],
    ["scrapper-start.bat", "Start everything"],
    ["scrapper-stop.bat", "Stop everything"]
  ].map(([file, desc]) => React.createElement("tr", {
    key: file
  }, React.createElement("td", null, React.createElement("code", null, file)), React.createElement("td", null, desc)))))), React.createElement("h2", null, "\uD83D\uDCE6 Full Repository"), React.createElement("div", {
    className: s.downloadCard
  }, React.createElement("div", null, React.createElement("div", {
    className: s.downloadName
  }, "⭐ Full SCRAPY Repository"), React.createElement("div", {
    className: s.downloadMeta
  }, "Source code · C + Rust + Python + BertUI · MIT License")), React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY",
    className: s.downloadBtn,
    target: "_blank",
    rel: "noreferrer"
  }, "\uD83D\uDC19 View on GitHub →")), React.createElement("h2", null, "\uD83D\uDD28 Build from Source"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, buildCode), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnPrimary
  }, "\uD83D\uDC27 Linux Setup Guide →"), React.createElement(Link, {
    to: "/installation/windows",
    className: s.btnSecondary
  }, "\uD83E\uDE9F Windows Setup Guide")));
}
