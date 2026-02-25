import { Link } from 'bertui/router';
import s from '../styles/shared.module.css';

export default function HowItWorks() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>ARCHITECTURE</span>
        <h1>🔄 How SCRAPPER Works</h1>
        <p>Two phases. One local API. Complete session control.</p>
      </div>

      <h2>🏗️ Architecture</h2>
      <p>SCRAPPER is composed of three independent layers that work together:</p>

      <div className={s.archDiagram}>
        <span style={{ color: 'var(--accent)' }}>┌─────────────────────────────────────────────────┐</span>{'\n'}
        <span style={{ color: 'var(--accent)' }}>│</span>{' '}
        <span style={{ color: 'var(--accent3)' }}>🌐 Browser Extension</span>
        {'  (Brave / Chrome / Edge / Firefox)     '}
        <span style={{ color: 'var(--accent)' }}>│</span>{'\n'}
        <span style={{ color: 'var(--accent)' }}>│</span>
        {'   Captures: cookies, tokens, requests, DOM, fingerprint  '}
        <span style={{ color: 'var(--accent)' }}>│</span>{'\n'}
        <span style={{ color: 'var(--accent)' }}>└─────────────────────────┬───────────────────────┘</span>{'\n'}
        {'                          │  Native Messaging (CDP)\n'}
        <span style={{ color: '#a78bfa' }}>┌─────────────────────────▼───────────────────────┐</span>{'\n'}
        <span style={{ color: '#a78bfa' }}>│</span>{' '}
        <span style={{ color: 'var(--accent3)' }}>⚙️  C Native Host</span>
        {'  (debug_host / debug_host.exe)         '}
        <span style={{ color: '#a78bfa' }}>│</span>{'\n'}
        <span style={{ color: '#a78bfa' }}>│</span>
        {'   Ultra-low latency — Unix socket / named pipe          '}
        <span style={{ color: '#a78bfa' }}>│</span>{'\n'}
        <span style={{ color: '#a78bfa' }}>└─────────────────────────┬───────────────────────┘</span>{'\n'}
        {'                          │  HTTP / localhost\n'}
        <span style={{ color: 'var(--accent4)' }}>┌─────────────────────────▼───────────────────────┐</span>{'\n'}
        <span style={{ color: 'var(--accent4)' }}>│</span>{' '}
        <span style={{ color: 'var(--accent3)' }}>📡 Python REST API</span>
        {'  (api.py · localhost:8080)             '}
        <span style={{ color: 'var(--accent4)' }}>│</span>{'\n'}
        <span style={{ color: 'var(--accent4)' }}>│</span>
        {'   /session  /tokens  /fingerprint  /dom  /export        '}
        <span style={{ color: 'var(--accent4)' }}>│</span>{'\n'}
        <span style={{ color: 'var(--accent4)' }}>└─────────────────────────┬───────────────────────┘</span>{'\n'}
        {'                          │  HTTP GET\n'}
        {'        ┌─────────────────┼─────────────────┐\n'}
        {'     Python            curl             Node.js\n'}
        {'     Playwright      Puppeteer          Selenium\n'}
      </div>

      <h2>📸 Phase 1: Capture</h2>
      <p>While your browser is open and you're logged in, SCRAPPER silently captures everything:</p>

      <div className={s.steps}>
        {[
          { n: '1', title: 'Open your browser with the SCRAPPER extension loaded', desc: 'The extension activates automatically. No manual trigger needed.' },
          { n: '2', title: 'Log into the sites you want to automate', desc: 'Complete authentication normally — 2FA, CAPTCHA, everything. SCRAPPER watches the session that\'s created.' },
          { n: '3', title: 'Browse naturally, click buttons, make requests', desc: 'Every network request, DOM state, cookie change, and token is captured in real-time.' },
          { n: '4', title: 'Session data is stored locally', desc: 'Everything saves to your ~/scrapper/data folder. No cloud. No external servers.' },
        ].map((step) => (
          <div key={step.n} className={s.step}>
            <div className={s.stepNum}>{step.n}</div>
            <div className={s.stepBody}>
              <div className={s.stepTitle}>{step.title}</div>
              <div className={s.stepDesc}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>🤖 Phase 2: Automate</h2>
      <p>Once captured, the browser can close. Your scripts fetch real session data from the local API.</p>

      <div className={s.steps}>
        {[
          { n: '1', title: 'Your script calls GET /api/v1/session/all', desc: 'The Python API (localhost:8080) returns your real cookies, tokens, and fingerprint.' },
          { n: '2', title: 'Inject into your automation tool', desc: 'Pass the real cookies to Playwright, Puppeteer, requests, or any HTTP client.' },
          { n: '3', title: 'Make authenticated requests', desc: 'Your requests look identical to your real browser session — same fingerprint, same cookies, same headers.' },
          { n: '4', title: 'Refresh when needed', desc: 'If a session expires, open the browser, browse for a minute, and the API auto-updates.' },
        ].map((step) => (
          <div key={step.n} className={s.step}>
            <div className={s.stepNum}>{step.n}</div>
            <div className={s.stepBody}>
              <div className={s.stepTitle}>{step.title}</div>
              <div className={s.stepDesc}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>📦 What SCRAPPER Captures</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Category</th><th>What's Captured</th><th>Firefox</th></tr></thead>
          <tbody>
            {[
              ['🍪 Cookies', 'All cookies including HttpOnly, Secure, all domains', 'green', '✅ Full'],
              ['💾 Storage', 'localStorage & sessionStorage', 'green', '✅ Full'],
              ['🔑 Auth Tokens', 'Bearer, JWT, CSRF, and custom tokens', 'green', '✅ Full'],
              ['🖥️ Fingerprint', 'User agent, screen, timezone, language, headers', 'yellow', '⚠️ Partial'],
              ['📤 Requests', 'All HTTP requests — URLs, methods, headers, POST data', 'yellow', '⚠️ No bodies'],
              ['📥 Responses', 'All HTTP responses — status, headers, bodies', 'yellow', '⚠️ No bodies'],
              ['🌳 DOM State', 'Full DOM snapshots, selector testing, tag/class/ID maps', 'red', '❌ CDP only'],
            ].map(([cat, desc, color, ff]) => (
              <tr key={cat}>
                <td><strong>{cat}</strong></td>
                <td>{desc}</td>
                <td><span className={s[color]}>{ff}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          <strong>Firefox limitation:</strong> No Chrome Debugger Protocol support. Use Brave, Chrome, or Edge for full capture.
        </div>
      </div>

      <div className={s.btnRow}>
        <Link to="/installation/linux" className={s.btnPrimary}>🐧 Setup on Linux</Link>
        <Link to="/installation/windows" className={s.btnSecondary}>🪟 Setup on Windows</Link>
      </div>
    </div>
  );
}
