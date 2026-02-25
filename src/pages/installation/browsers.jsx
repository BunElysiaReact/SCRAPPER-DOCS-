import { Link } from 'bertui/router';
import { Code } from 'bertui-code';
import s from '../../styles/shared.module.css';

const regLinux = 'scrapy-register-ext YOUR_EXTENSION_ID_HERE';
const regWin = 'scrapper-register-ext.ps1 YOUR_EXTENSION_ID_HERE';

export default function BrowsersInstall() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>INSTALLATION</span>
        <h1>🧩 Browser Extensions</h1>
        <p>Load the extension in developer mode. Brave and Chrome share the same extension folder.</p>
      </div>

      <h2>⭐ Brave & Chrome (Recommended)</h2>
      <div className={`${s.callout} ${s.calloutSuccess}`}>
        <span className={s.calloutIcon}>✅</span>
        <div className={s.calloutBody}>
          Full feature support: CDP debugging, DOM mapping, fingerprint capture, stealth injection, live feed.
          Use the <strong>same</strong> <code>extension/brave/</code> folder for both browsers.
        </div>
      </div>

      <div className={s.steps}>
        {[
          { n: '1', t: 'Open the Extensions page', d: <span>Navigate to <code>brave://extensions</code> or <code>chrome://extensions</code></span> },
          { n: '2', t: 'Enable Developer mode', d: 'Toggle the Developer mode switch in the top right corner.' },
          { n: '3', t: 'Click Load unpacked', d: <span>Select the <code>extension/brave/</code> folder.</span> },
          { n: '4', t: 'Copy the Extension ID', d: 'A 32-character string appears under the extension name. You need this for the manifest.' },
        ].map((step) => (
          <div key={step.n} className={s.step}>
            <div className={s.stepNum}>{step.n}</div>
            <div className={s.stepBody}>
              <div className={s.stepTitle}>{step.t}</div>
              <div className={s.stepDesc}>{step.d}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>🔵 Microsoft Edge</h2>
      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>ℹ️</span>
        <div className={s.calloutBody}>
          Edge is Chromium-based — use the same <code>extension/brave/</code> folder.
          Go to <code>edge://extensions</code> → Developer mode → Load unpacked.
        </div>
      </div>

      <h2>🦊 Firefox</h2>
      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          <strong>Firefox limitations:</strong> No CDP support. Captures cookies, localStorage, basic headers —
          but NOT response bodies, DOM mapping, or fingerprint capture.
        </div>
      </div>

      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Feature</th><th>Firefox</th></tr></thead>
          <tbody>
            {[
              ['All cookies (including auth)', 'green', '✅ Full'],
              ['localStorage / sessionStorage', 'green', '✅ Full'],
              ['Basic network request/response logging', 'green', '✅ Full'],
              ['Response bodies', 'yellow', '⚠️ Not available'],
              ['DOM mapping', 'red', '❌ CDP required'],
              ['Browser fingerprint capture', 'red', '❌ CDP required'],
            ].map(([feat, color, val]) => (
              <tr key={feat}>
                <td>{feat}</td>
                <td><span className={s[color]}>{val}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={s.steps}>
        {[
          { n: '1', t: 'Open Debugging', d: <span>Navigate to <code>about:debugging</code></span> },
          { n: '2', t: 'Click This Firefox', d: 'Click "This Firefox" in the left sidebar.' },
          { n: '3', t: 'Load Temporary Add-on', d: <span>Select <code>extension/firefox/manifest.json</code></span> },
        ].map((step) => (
          <div key={step.n} className={s.step}>
            <div className={s.stepNum}>{step.n}</div>
            <div className={s.stepBody}>
              <div className={s.stepTitle}>{step.t}</div>
              <div className={s.stepDesc}>{step.d}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>🔗 Register Your Extension ID</h2>
      <p>After loading the extension, register its ID with SCRAPPER:</p>
      <Code language="bash" theme="dark">{regLinux}</Code>
      <Code language="bash" theme="dark">{regWin}</Code>

      <div className={s.btnRow}>
        <Link to="/api" className={s.btnPrimary}>📡 API Reference →</Link>
        <Link to="/examples" className={s.btnSecondary}>💻 Code Examples</Link>
      </div>
    </div>
  );
}
