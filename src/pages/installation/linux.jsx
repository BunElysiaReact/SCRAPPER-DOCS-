import { Link } from 'bertui/router';
import { Code } from 'bertui-code';
import s from '../../styles/shared.module.css';

const oneLineCode = 'curl -fsSL https://raw.githubusercontent.com/BunElysiaReact/SCRAPY/main/install.sh | bash';

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
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>INSTALLATION</span>
        <h1>🐧 Linux / macOS Setup</h1>
        <p>No extra dependencies. Pure Python stdlib. One-line install.</p>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>💡</span>
        <div className={s.calloutBody}>
          <strong>For developers:</strong> Cloning the full repo (~40MB) is only needed if you want to explore the code. Regular users should use the one-line installer below.
        </div>
      </div>

      <div className={`${s.callout} ${s.calloutSuccess}`}>
        <span className={s.calloutIcon}>✅</span>
        <div className={s.calloutBody}>
          <strong>Linux advantage:</strong> The Python API uses only standard library modules — no pip installs needed. Just Python 3.
        </div>
      </div>

      <div className={`${s.callout} ${s.calloutWarning}`} style={{ marginBottom: '24px', borderLeftColor: 'var(--accent)' }}>
        <span className={s.calloutIcon}>🔴</span>
        <div className={s.calloutBody}>
          <strong style={{ fontSize: '1.1em' }}>⚠️ IMPORTANT: Correct Startup Flow ⚠️</strong>
          <p style={{ marginTop: '8px', marginBottom: '4px' }}>
            SCRAPER requires a specific order to work correctly:
          </p>
          <ol style={{ marginTop: '4px', marginBottom: '4px', paddingLeft: '20px' }}>
            <li><strong>FIRST:</strong> Load the browser extension (Step 5)</li>
            <li><strong>SECOND:</strong> The C native host creates your data folder when the extension runs</li>
            <li><strong>THIRD:</strong> Only then start the Python API server (Step 6)</li>
          </ol>
          <p style={{ marginTop: '8px', marginBottom: '0', fontWeight: 500 }}>
            The Python API reads from the data folder created by the C code. If you start Python first, the folder won't exist yet!
          </p>
        </div>
      </div>

      <h2>📋 Requirements</h2>
      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>Requirement</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><code>Python 3</code></td><td>Any recent version. Check: python3 --version</td></tr>
            <tr><td><code>Bun or Node.js</code></td><td>Only needed if you want the Bun dashboard UI. Not required.</td></tr>
            <tr><td><code>Brave / Chrome / Firefox</code></td><td>Chromium browser for full CDP support</td></tr>
          </tbody>
        </table>
      </div>

      <h2>🖥️ Which UI do you want?</h2>
      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>💡</span>
        <div className={s.calloutBody}>
          <p style={{ marginBottom: '10px' }}>
            SCRAPER comes with <strong>two UI options</strong> — both show the same data, same features. Pick whichever fits you:
          </p>
          <table>
            <thead>
              <tr>
                <th>UI</th>
                <th>How to start</th>
                <th>URL</th>
                <th>Requires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Python built-in</strong></td>
                <td><code>python3 api.py</code></td>
                <td><code>http://localhost:8080</code></td>
                <td>Just Python 3</td>
              </tr>
              <tr>
                <td><strong>Bun dashboard</strong></td>
                <td><code>bun run dev</code></td>
                <td><code>http://localhost:3000</code></td>
                <td>Bun or Node.js + api.py running</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text3)' }}>
            The Bun dashboard still talks to the Python API — so if you use it, you need api.py running too.
          </p>
        </div>
      </div>

      <h2>⚡ One-Line Install (Recommended)</h2>
      <Code language="bash" theme="dark">{oneLineCode}</Code>

      <h2>🔧 Manual Setup (Developers Only)</h2>
      <div className={`${s.callout} ${s.calloutWarning}`} style={{ marginBottom: '16px' }}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          Cloning the full repository is ~40MB and only necessary if you want to modify the code. Most users should use the one-line installer above.
        </div>
      </div>
      <a href="https://github.com/BunElysiaReact/SCRAPY/tree/main/linux" className={s.btnSecondary} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', marginBottom: '24px' }}>
        📁 Open linux/ folder on GitHub
      </a>

      <div className={s.steps}>
        <div className={s.step}>
          <div className={s.stepNum}>1</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Clone the repo</div>
            <Code language="bash" theme="dark">{cloneCode}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>2</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Make binaries executable</div>
            <Code language="bash" theme="dark">{chmodCode}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>3</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Edit the native messaging manifest</div>
            <div className={s.stepDesc}>
              Open <code>~/scrapper/linux/config/com.scraper.core.json</code> and replace YOUR_USERNAME and YOUR_EXTENSION_ID:
            </div>
            <Code language="json" theme="dark">{manifestCode}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>4</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Copy manifest to your browser NativeMessagingHosts</div>
            <p style={{ fontSize: '13px', color: 'var(--text3)', marginBottom: '6px' }}>Brave:</p>
            <Code language="bash" theme="dark">{braveCopyCode}</Code>
            <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '8px 0 6px' }}>Chrome:</p>
            <Code language="bash" theme="dark">{chromeCopyCode}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>5</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Load the browser extension</div>
            <div className={s.stepDesc}>
              Go to <code>brave://extensions</code> → Enable Developer Mode → Load Unpacked → Select{' '}
              <code>~/scrapper/linux/extension/brave/</code>. Copy the Extension ID.
            </div>
            <div className={`${s.callout} ${s.calloutWarning}`} style={{ marginTop: '12px', padding: '8px 12px' }}>
              <span className={s.calloutIcon}>🔴</span>
              <div className={s.calloutBody}>
                <strong>Stop here!</strong> Make sure the extension is loaded and running before proceeding to Step 6. The C native host creates your data folder when the extension runs.
              </div>
            </div>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>6</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Start the API server</div>
            <Code language="bash" theme="dark">{startApiCode}</Code>
            <div className={s.stepDesc} style={{ marginTop: '8px' }}>
              Open <strong>http://localhost:8080</strong> — the built-in UI is ready. 🎉
            </div>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>7</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Start the Bun dashboard (optional)</div>
            <div className={s.stepDesc} style={{ marginBottom: '8px' }}>
              Only do this if you prefer the Bun UI. The Python API (Step 6) must already be running.
            </div>
            <Code language="bash" theme="dark">{startDashCode}</Code>
            <div className={s.stepDesc} style={{ marginTop: '8px' }}>
              Open <strong>http://localhost:3000</strong> → Bun dashboard ready. 🎉
            </div>
          </div>
        </div>
      </div>

      <h2>📁 Folder Structure</h2>
      <Code language="bash" theme="dark">{folderCode}</Code>

      <div className={s.btnRow}>
        <Link to="/installation/browsers" className={s.btnPrimary}>🧩 Browser Extension Setup →</Link>
        <Link to="/api" className={s.btnSecondary}>📡 API Reference</Link>
      </div>
    </div>
  );
}