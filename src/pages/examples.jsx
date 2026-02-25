import { Link } from 'bertui/router';
import { Code } from 'bertui-code';
import s from '../styles/shared.module.css';

const pythonCode =
'import requests\n' +
'\n' +
'session_data = requests.get(\n' +
'    "http://localhost:8080/api/v1/session/all"\n' +
').json()\n' +
'\n' +
's = requests.Session()\n' +
's.cookies.update({\n' +
'    c["name"]: c["value"]\n' +
'    for c in session_data["cookies"]\n' +
'})\n' +
's.headers.update({\n' +
'    "User-Agent": session_data["fingerprint"]["userAgent"],\n' +
'    "Accept-Language": "en-US,en;q=0.9",\n' +
'})\n' +
'\n' +
'response = s.get("https://api.example.com/data")\n' +
'print(response.json())';

const curlCode =
'# Source session as environment variables\n' +
'source <(curl -s http://localhost:8080/api/v1/export/env)\n' +
'\n' +
'curl -X POST "https://api.example.com/upload" \\\n' +
'  -H "Authorization: Bearer $SCRAPY_BEARER_TOKEN" \\\n' +
'  -H "X-CSRF-Token: $SCRAPY_CSRF_TOKEN" \\\n' +
'  -H "User-Agent: $SCRAPY_USER_AGENT" \\\n' +
'  -b "$SCRAPY_COOKIES" \\\n' +
'  -F "file=@document.pdf"';

const playwrightCode =
'import requests\n' +
'from playwright.async_api import async_playwright\n' +
'import asyncio\n' +
'\n' +
'async def main():\n' +
'    session = requests.get(\n' +
'        "http://localhost:8080/api/v1/session/all"\n' +
'    ).json()\n' +
'\n' +
'    async with async_playwright() as p:\n' +
'        context = await p.chromium.launch_persistent_context(\n' +
'            user_data_dir="./profile",\n' +
'            user_agent=session["fingerprint"]["userAgent"],\n' +
'        )\n' +
'        await context.add_cookies(session["cookies"])\n' +
'        page = await context.new_page()\n' +
'        await page.goto("https://example.com/dashboard")\n' +
'        print(await page.title())\n' +
'\n' +
'asyncio.run(main())';

const puppeteerCode =
'const puppeteer = require("puppeteer");\n' +
'\n' +
'async function main() {\n' +
'    const session = await fetch(\n' +
'        "http://localhost:8080/api/v1/session/all"\n' +
'    ).then(r => r.json());\n' +
'\n' +
'    const browser = await puppeteer.launch();\n' +
'    const page = await browser.newPage();\n' +
'    await page.setUserAgent(session.fingerprint.userAgent);\n' +
'    await page.setCookie(...session.cookies);\n' +
'    await page.goto("https://example.com/dashboard");\n' +
'    console.log("Title:", await page.title());\n' +
'    await browser.close();\n' +
'}\n' +
'\n' +
'main();';

const refreshCode =
'import requests, schedule, time, json\n' +
'\n' +
'def refresh_session():\n' +
'    print("Please log into target sites. 5 minutes...")\n' +
'    time.sleep(300)\n' +
'\n' +
'    data = requests.get(\n' +
'        "http://localhost:8080/api/v1/bulk/all?format=json"\n' +
'    ).json()\n' +
'\n' +
'    filename = f"session_{int(time.time())}.json"\n' +
'    with open(filename, "w") as f:\n' +
'        json.dump(data, f, indent=2)\n' +
'    print(f"Session saved: {filename}")\n' +
'\n' +
'schedule.every().monday.at("09:00").do(refresh_session)\n' +
'while True:\n' +
'    schedule.run_pending()\n' +
'    time.sleep(60)';

export default function Examples() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>CODE EXAMPLES</span>
        <h1>💻 Code Examples</h1>
        <p>Real working examples using SCRAPPER with your favourite automation tools.</p>
      </div>

      <h2>🐍 Python + requests</h2>
      <Code language="python" theme="dark">{pythonCode}</Code>

      <h2>🌀 curl + env vars</h2>
      <Code language="bash" theme="dark">{curlCode}</Code>

      <h2>🎭 Playwright (Python)</h2>
      <Code language="python" theme="dark">{playwrightCode}</Code>

      <h2>🤖 Puppeteer (Node.js)</h2>
      <Code language="javascript" theme="dark">{puppeteerCode}</Code>

      <h2>🔄 Session Refresh Pipeline</h2>
      <p>Schedule weekly session refreshes — prompts you to browse, then captures automatically:</p>
      <Code language="python" theme="dark">{refreshCode}</Code>

      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          <strong>Session lifespan:</strong> Sessions depend entirely on the target site. Monitor 401/403 responses as a signal to refresh.
        </div>
      </div>

      <div className={s.btnRow}>
        <Link to="/api" className={s.btnPrimary}>📡 Full API Reference →</Link>
        <Link to="/dashboard" className={s.btnSecondary}>📊 Dashboard Guide</Link>
      </div>
    </div>
  );
}
