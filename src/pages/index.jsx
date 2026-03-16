import { Link } from 'bertui/router';
import styles from '../styles/home.module.css';
import s from '../styles/shared.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>v2.1.0 · Session Observer · Local Only</div>

          <h1 className={styles.title}>
            The Session Observer
            <span className={styles.gradient}>for Web Automation</span>
          </h1>

          <p className={styles.subtitle}>
            SCRAPPER isn't a scraper — it's a <strong>session observer</strong> that captures
            your real browser data for use in any automation tool. Cookies, tokens, fingerprint
            — all served via a clean local REST API.
            <br /><br />
            <strong>🔒 No domain. No cloud. All local. All yours.</strong>
          </p>

          <div className={styles.actions}>
            <Link to="/installation/linux" className={s.btnPrimary}>🐧 Get Started on Linux</Link>
            <Link to="/installation/windows" className={s.btnSecondary}>🪟 Windows Setup</Link>
            <a href="https://github.com/BunElysiaReact/SCRAPY" className={s.btnGhost} target="_blank" rel="noreferrer">⭐ GitHub</a>
            <Link to="/faq" className={s.btnPrimary}>F.A.Q</Link>
            <Link to="/help" className={s.btnPrimary}>Help</Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}><span className={styles.statValue}>97%</span><span className={styles.statLabel}>Success Rate</span></div>
            <div className={styles.stat}><span className={styles.statValue}>~20MB</span><span className={styles.statLabel}>RAM Usage</span></div>
            <div className={styles.stat}><span className={styles.statValue}>4</span><span className={styles.statLabel}>Browser Support</span></div>
            <div className={styles.stat}><span className={styles.statValue}>9</span><span className={styles.statLabel}>API Endpoints</span></div>
          </div>
        </div>
      </div>

      <div className={s.page}>
        <h2>🤔 The Problem SCRAPPER Solves</h2>
        <p>
          Every web automation tool — Puppeteer, Playwright, Selenium, even curl — tries to{' '}
          <strong>imitate</strong> a human. But they're always guessing.
        </p>
        <div className={s.tableWrap}>
          <table>
            <thead><tr><th>Challenge</th><th>Why It's Hard</th></tr></thead>
            <tbody>
              {[
                ['Authentication', 'Manually scripting logins for every site is tedious and fragile'],
                ['Session state', 'Cookies expire, tokens rotate, localStorage gets cleared'],
                ['Reverse engineering', 'Hours spent in DevTools understanding API patterns'],
                ['Bot detection', 'TLS fingerprints, browser entropy, Cloudflare, hCaptcha'],
                ['Setup complexity', 'Fighting with headless browsers, proxies, and stealth plugins'],
              ].map(([ch, why]) => (
                <tr key={ch}><td><strong>{ch}</strong></td><td>{why}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>💡 What SCRAPPER Is (And Isn't)</h2>
        <div className={s.tableWrap}>
          <table>
            <thead><tr><th>SCRAPPER IS...</th><th>SCRAPPER IS NOT...</th></tr></thead>
            <tbody>
              {[
                ['🔍 A session observer that watches YOUR real browser', '❌ A replacement for Puppeteer/Playwright/Selenium'],
                ['💾 A data capture tool that saves your actual session', '❌ A tool that scrapes websites for you'],
                ['📡 A local API server serving your captured data', '❌ A hosted service or cloud platform'],
                ['🧠 A reverse engineering assistant revealing hidden APIs', '❌ A magic "scrape anything" button'],
                ['🎯 A visual debugger for understanding site structure', '❌ A no-code automation builder'],
              ].map(([is, not]) => (
                <tr key={is}><td>{is}</td><td>{not}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`${s.callout} ${s.calloutInfo}`}>
          <span className={s.calloutIcon}>ℹ️</span>
          <div className={s.calloutBody}>
            <strong>Key insight:</strong> SCRAPPER doesn't scrape. It gives you the REAL data YOU need to scrape successfully.
          </div>
        </div>

        <h2>🏗️ Architecture Overview</h2>
        <div className={s.flow}>
          <div className={`${s.flowBox} ${s.flowCyan}`}>🌐 Browser Extension</div>
          <span className={s.flowArrow}>→</span>
          <div className={`${s.flowBox} ${s.flowPurple}`}>⚙️ C Native Host</div>
          <span className={s.flowArrow}>→</span>
          <div className={`${s.flowBox} ${s.flowGreen}`}>📡 Python REST API</div>
          <span className={s.flowArrow}>→</span>
          <div className={s.flowBox}>🤖 Your Scripts</div>
        </div>

        <div className={s.platformGrid} style={{ marginTop: '32px' }}>
          <Link to="/installation/linux" className={s.platformCard}>
            <div className={s.pcIcon}>🐧</div>
            <div className={s.pcName}>Linux / macOS</div>
            <div className={s.pcDesc}>No extra deps · Pure Python stdlib · One-line install</div>
          </Link>
          <Link to="/installation/windows" className={s.platformCard}>
            <div className={s.pcIcon}>🪟</div>
            <div className={s.pcName}>Windows</div>
            <div className={s.pcDesc}>Pre-compiled EXEs · pywin32 required · BAT scripts</div>
          </Link>
        </div>

        <h2>⚡ Quick Links</h2>
        <div className={s.platformGrid}>
          {[
            { to: '/api', icon: '📡', name: 'API Reference', desc: '9 endpoints' },
            { to: '/examples', icon: '💻', name: 'Code Examples', desc: 'Python, curl, Playwright, Puppeteer' },
            { to: '/dashboard', icon: '📊', name: 'Dashboard Guide', desc: 'Live feed, DOM mapper, tokens' },
            { to: '/downloads', icon: '📦', name: 'Downloads', desc: 'Linux & Windows folders' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={s.platformCard}>
              <div className={s.pcIcon} style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div className={s.pcName} style={{ fontSize: '14px' }}>{item.name}</div>
              <div className={s.pcDesc}>{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
