import { Link } from 'bertui/router';
import s from '../styles/shared.module.css';

const tabs = [
  { name: '📡 Live', desc: 'Real-time stream of all captured network events as they happen.' },
  { name: '📄 Bodies', desc: 'HTTP response bodies — JSON, HTML, SVG, images with preview.' },
  { name: '📥 Responses', desc: 'All HTTP responses by domain, filterable by flags.' },
  { name: '🧠 Intel', desc: 'Per-domain summary — tokens, cookies, endpoints, DOM map.' },
  { name: '🔑 Tokens', desc: 'Bearer tokens, task tokens, auth cookies, and curl snippets.' },
  { name: '🛣️ Endpoints', desc: 'All discovered API endpoints with "Copy for LLM" feature.' },
  { name: '🌳 DOM Map', desc: 'Full tag/class/ID tree — click any item to auto-generate selectors.' },
  { name: '🔍 Find', desc: 'Test CSS selectors against real rendered HTML instantly.' },
  { name: '🧭 Nav', desc: 'Navigate and track tabs, dump cookies, capture HTML.' },
  { name: '📋 Queue', desc: 'Batch-process lists of URLs with configurable human-like delays.' },
];

export default function Dashboard() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>DASHBOARD</span>
        <h1>📊 Dashboard Guide</h1>
        <p>Open at <code>http://localhost:3000</code> (dev) or <code>http://localhost:8080</code> (production).</p>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>💡</span>
        <div className={s.calloutBody}>
          The dashboard is a BertUI React app served by the Python API. All data is local — nothing leaves your machine.
        </div>
      </div>

      <h2>🗂️ Dashboard Tabs</h2>
      <div className={s.dashGrid}>
        {tabs.map((tab) => (
          <div key={tab.name} className={s.dashCard}>
            <div className="dcName" style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px', fontSize: '14px' }}>{tab.name}</div>
            <p>{tab.desc}</p>
          </div>
        ))}
      </div>

      <h2>🌳 DOM Mapper</h2>
      <p>The DOM Map tab gives you a full tree view of every tag, class, and ID on any captured page. Click any element to:</p>
      <div className={s.steps}>
        {[
          { n: '→', t: 'Auto-generate CSS selectors', d: 'Click any DOM element to instantly generate a working CSS selector.' },
          { n: '→', t: 'Copy as scraper code', d: 'Auto-generates Python/JS code to extract that element\'s text or attribute.' },
          { n: '→', t: 'Test selectors live', d: 'Switch to the Find tab to test any CSS selector against the real rendered DOM.' },
        ].map((step, i) => (
          <div key={i} className={s.step}>
            <div className={s.stepNum} style={{ fontSize: '16px', width: '28px', height: '28px' }}>{step.n}</div>
            <div className={s.stepBody}>
              <div className={s.stepTitle}>{step.t}</div>
              <div className={s.stepDesc}>{step.d}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>🔑 Token Extractor</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Token Type</th><th>Detection Method</th></tr></thead>
          <tbody>
            {[
              ['Bearer Tokens', 'Authorization: Bearer ... headers in captured requests'],
              ['JWT Tokens', 'Detects base64-encoded JSON web token format'],
              ['CSRF Tokens', 'Looks for X-CSRF-Token, _csrf, csrf_token patterns'],
              ['Custom Auth Headers', 'Flags any X-* header appearing in multiple requests'],
              ['Auth Cookies', 'Identifies cookies with auth-related names'],
            ].map(([type, method]) => (
              <tr key={type}><td><strong>{type}</strong></td><td>{method}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>📋 URL Queue</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Setting</th><th>Description</th><th>Default</th></tr></thead>
          <tbody>
            {[
              ['Delay (min)', 'Minimum delay between requests in seconds', '1s'],
              ['Delay (max)', 'Maximum delay — randomized per request', '3s'],
              ['Concurrency', 'How many tabs to open simultaneously', '1'],
              ['Capture HTML', 'Save full DOM snapshot per URL', 'Off'],
            ].map(([s2, desc, def]) => (
              <tr key={s2}><td><code>{s2}</code></td><td>{desc}</td><td><code>{def}</code></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          <strong>Use delays:</strong> Always use human-like delays (1-5s) when batch processing. Rapid requests from your real session can trigger rate limits or bans.
        </div>
      </div>

      <div className={s.btnRow}>
        <Link to="/examples" className={s.btnPrimary}>💻 Code Examples →</Link>
        <Link to="/limitations" className={s.btnSecondary}>⚠️ Limitations</Link>
      </div>
    </div>
  );
}
