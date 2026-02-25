import { Link } from 'bertui/router';
import s from '../styles/shared.module.css';

export default function Limitations() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>LIMITATIONS</span>
        <h1>⚠️ Limitations</h1>
        <p>Honest expectations. Read this before you automate anything important.</p>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>🎯</span>
        <div className={s.calloutBody}>
          <strong>Why this page exists:</strong> SCRAPPER is powerful, but it's not magic. Understanding its limits will save you hours of debugging.
        </div>
      </div>

      <h2>✅ What SCRAPPER CAN Do</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Capability</th><th>Details</th></tr></thead>
          <tbody>
            {[
              ['Capture REAL cookies and tokens', 'Including HttpOnly cookies invisible to JavaScript'],
              ['Save sessions for reuse', 'Days to months depending on the site'],
              ['Bypass bot detection', 'Uses real TLS fingerprint and real session — not flagged as automated'],
              ['Export in multiple formats', 'JSON, JSONL, HAR, CSV, TXT — works with any tool'],
              ['Serve via clean local REST API', 'Any language that can make HTTP requests can use the data'],
              ['Reveal hidden API endpoints', 'Captures all network traffic so you see exactly what calls are made'],
            ].map(([cap, detail]) => (
              <tr key={cap}>
                <td><span className={s.green}>✅ {cap}</span></td>
                <td>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>❌ What SCRAPPER CANNOT Do</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Limitation</th><th>What It Means</th></tr></thead>
          <tbody>
            {[
              ['Scrape without you browsing first', 'You must log in and browse the target site manually at least once'],
              ['Guess cookies or tokens', 'SCRAPPER only captures what your real browser receives'],
              ['Extend cookie lifetimes', 'When the site expires your cookies, they expire'],
              ['Work without native host running', 'C native host + browser extension must both be running'],
              ['Run headless on a server', 'Requires a real browser with the extension loaded'],
            ].map(([lim, meaning]) => (
              <tr key={lim}>
                <td><span className={s.red}>❌ {lim}</span></td>
                <td>{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>🚨 Risks to Be Aware Of</h2>
      <div className={`${s.callout} ${s.calloutDanger}`}>
        <span className={s.calloutIcon}>🚨</span>
        <div className={s.calloutBody}>
          <strong>Account Risk:</strong> SCRAPPER uses your real identity. Aggressive rate-limit hitting or violating a site's ToS can get your REAL account banned. Use delays. Be conservative.
        </div>
      </div>

      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Risk</th><th>Mitigation</th></tr></thead>
          <tbody>
            {[
              ['Brittle session lifespan', 'Set up a session refresh pipeline. Monitor for 401/403 responses.'],
              ['Internal APIs change without notice', 'Pin to specific API versions if available. Monitor for breaking changes.'],
              ['Account ban risk', 'Use randomized delays (1-5s), respect rate limits, don\'t violate ToS.'],
              ['Single device binding', 'device-id is tied to one session — can\'t easily share across machines yet.'],
              ['Learning curve', 'You must read network traffic to understand correct API payloads. Use the Intel tab.'],
            ].map(([risk, fix]) => (
              <tr key={risk}>
                <td><span className={s.yellow}>⚠️ {risk}</span></td>
                <td>{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={s.btnRow}>
        <Link to="/installation/linux" className={s.btnPrimary}>🐧 Get Started →</Link>
        <a href="https://github.com/BunElysiaReact/SCRAPY/issues" className={s.btnGhost} target="_blank" rel="noreferrer">🐛 Report an Issue</a>
      </div>
    </div>
  );
}
