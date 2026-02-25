import React from 'react';
import { Link } from "../router.js";
import { Code } from "bertui-code";
import s from "../styles/shared.module.css.js";
const pythonCode = `import requests
` + `
` + `session_data = requests.get(
` + `    "http://localhost:8080/api/v1/session/all"
` + `).json()
` + `
` + `s = requests.Session()
` + `s.cookies.update({
` + `    c["name"]: c["value"]
` + `    for c in session_data["cookies"]
` + `})
` + `s.headers.update({
` + `    "User-Agent": session_data["fingerprint"]["userAgent"],
` + `    "Accept-Language": "en-US,en;q=0.9",
` + `})
` + `
` + `response = s.get("https://api.example.com/data")
` + "print(response.json())";
const curlCode = `# Source session as environment variables
` + `source <(curl -s http://localhost:8080/api/v1/export/env)
` + `
` + 'curl -X POST "https://api.example.com/upload" \\\n' + '  -H "Authorization: Bearer $SCRAPY_BEARER_TOKEN" \\\n' + '  -H "X-CSRF-Token: $SCRAPY_CSRF_TOKEN" \\\n' + '  -H "User-Agent: $SCRAPY_USER_AGENT" \\\n' + '  -b "$SCRAPY_COOKIES" \\\n' + '  -F "file=@document.pdf"';
const playwrightCode = `import requests
` + `from playwright.async_api import async_playwright
` + `import asyncio
` + `
` + `async def main():
` + `    session = requests.get(
` + `        "http://localhost:8080/api/v1/session/all"
` + `    ).json()
` + `
` + `    async with async_playwright() as p:
` + `        context = await p.chromium.launch_persistent_context(
` + `            user_data_dir="./profile",
` + `            user_agent=session["fingerprint"]["userAgent"],
` + `        )
` + `        await context.add_cookies(session["cookies"])
` + `        page = await context.new_page()
` + `        await page.goto("https://example.com/dashboard")
` + `        print(await page.title())
` + `
` + "asyncio.run(main())";
const puppeteerCode = `const puppeteer = require("puppeteer");
` + `
` + `async function main() {
` + `    const session = await fetch(
` + `        "http://localhost:8080/api/v1/session/all"
` + `    ).then(r => r.json());
` + `
` + `    const browser = await puppeteer.launch();
` + `    const page = await browser.newPage();
` + `    await page.setUserAgent(session.fingerprint.userAgent);
` + `    await page.setCookie(...session.cookies);
` + `    await page.goto("https://example.com/dashboard");
` + `    console.log("Title:", await page.title());
` + `    await browser.close();
` + `}
` + `
` + "main();";
const refreshCode = `import requests, schedule, time, json
` + `
` + `def refresh_session():
` + `    print("Please log into target sites. 5 minutes...")
` + `    time.sleep(300)
` + `
` + `    data = requests.get(
` + `        "http://localhost:8080/api/v1/bulk/all?format=json"
` + `    ).json()
` + `
` + `    filename = f"session_{int(time.time())}.json"
` + `    with open(filename, "w") as f:
` + `        json.dump(data, f, indent=2)
` + `    print(f"Session saved: {filename}")
` + `
` + `schedule.every().monday.at("09:00").do(refresh_session)
` + `while True:
` + `    schedule.run_pending()
` + "    time.sleep(60)";
export default function Examples() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "CODE EXAMPLES"), React.createElement("h1", null, "\uD83D\uDCBB Code Examples"), React.createElement("p", null, "Real working examples using SCRAPPER with your favourite automation tools.")), React.createElement("h2", null, "\uD83D\uDC0D Python + requests"), React.createElement(Code, {
    language: "python",
    theme: "dark"
  }, pythonCode), React.createElement("h2", null, "\uD83C\uDF00 curl + env vars"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, curlCode), React.createElement("h2", null, "\uD83C\uDFAD Playwright (Python)"), React.createElement(Code, {
    language: "python",
    theme: "dark"
  }, playwrightCode), React.createElement("h2", null, "\uD83E\uDD16 Puppeteer (Node.js)"), React.createElement(Code, {
    language: "javascript",
    theme: "dark"
  }, puppeteerCode), React.createElement("h2", null, "\uD83D\uDD04 Session Refresh Pipeline"), React.createElement("p", null, "Schedule weekly session refreshes — prompts you to browse, then captures automatically:"), React.createElement(Code, {
    language: "python",
    theme: "dark"
  }, refreshCode), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "⚠️"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Session lifespan:"), " Sessions depend entirely on the target site. Monitor 401/403 responses as a signal to refresh.")), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/api",
    className: s.btnPrimary
  }, "\uD83D\uDCE1 Full API Reference →"), React.createElement(Link, {
    to: "/dashboard",
    className: s.btnSecondary
  }, "\uD83D\uDCCA Dashboard Guide")));
}
