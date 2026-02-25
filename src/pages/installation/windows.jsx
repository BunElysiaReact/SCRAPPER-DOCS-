import React from 'react';
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
const edgeCopy   = 'copy "%USERPROFILE%\\scrapper\\windows\\config\\com.scraper.core.json" "%APPDATA%\\Microsoft\\Edge\\NativeMessagingHosts\\"';

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
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>INSTALLATION</span>
        <h1>🪟 Windows Setup</h1>
        <p>Pre-compiled EXEs. One dependency. BAT scripts to start/stop everything.</p>
      </div>

      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          <strong>Dev note:</strong> SCRAPER is developed and tested on Linux. The Windows paths and installer have been carefully thought through, but are not personally tested by the author. If something's off, open an issue — contributions welcome.
        </div>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>ℹ️</span>
        <div className={s.calloutBody}>
          <strong>Windows difference:</strong> The Python API uses <code>pywin32</code> for named pipe communication. This is the only extra dependency.
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
                <td><code>python api.py</code></td>
                <td><code>http://localhost:8080</code></td>
                <td>Just Python 3 + pywin32</td>
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

      <h2>⚡ One-Line Install (PowerShell)</h2>
      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>
          Run PowerShell as Administrator to register native messaging hosts correctly.
        </div>
      </div>
      <Code language="bash" theme="dark">{psInstall}</Code>

      <h2>🔧 Manual Setup (Developers Only)</h2>
      <a 
        href="https://github.com/BunElysiaReact/SCRAPY/tree/main/windows" 
        className={s.btnSecondary} 
        target="_blank" 
        rel="noreferrer" 
        style={{ display: 'inline-flex', marginBottom: '24px' }}
      >
        📁 Open windows/ folder on GitHub
      </a>

      <div className={s.steps}>
        <div className={s.step}>
          <div className={s.stepNum}>1</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Download the windows/ folder</div>
            <div className={s.stepDesc}>
              Place it at <code>C:\Users\YOUR_USERNAME\scrapper\windows\</code>
            </div>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>2</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Install the one Python dependency</div>
            <Code language="bash" theme="dark">{pipCode}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>3</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Edit the native messaging manifest</div>
            <div className={s.stepDesc}>
              Open <code>%USERPROFILE%\scrapper\windows\config\com.scraper.core.json</code> and replace YOUR_USERNAME and YOUR_EXTENSION_ID:
            </div>
            <Code language="json" theme="dark">{manifestCode}</Code>
            <div className={`${s.callout} ${s.calloutInfo}`} style={{ marginTop: '10px' }}>
              <span className={s.calloutIcon}>💡</span>
              <div className={s.calloutBody}>
                Run <code>echo %USERNAME%</code> in CMD to see your actual username.
              </div>
            </div>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>4</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Copy manifest to your browser NativeMessagingHosts</div>
            <p style={{ fontSize: '13px', color: 'var(--text3)', marginBottom: '6px' }}>Brave:</p>
            <Code language="bash" theme="dark">{braveCopy}</Code>
            <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '8px 0 6px' }}>Chrome:</p>
            <Code language="bash" theme="dark">{chromeCopy}</Code>
            <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '8px 0 6px' }}>Edge:</p>
            <Code language="bash" theme="dark">{edgeCopy}</Code>
          </div>
        </div>

        <div className={s.step}>
          <div className={s.stepNum}>5</div>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>Load the browser extension</div>
            <div className={s.stepDesc}>
              Go to <code>brave://extensions</code> → Enable Developer Mode → Load Unpacked → Select{' '}
              <code>%USERPROFILE%\scrapper\windows\extension\brave\</code>. Copy the Extension ID and paste it back into Step 3.
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
              Or double-click <code>scrapy-start.bat</code>. Open <strong>http://localhost:8080</strong> → Built-in UI ready. 🎉
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

      <h2>📁 Folder Structure After Install</h2>
      <Code language="bash" theme="dark">{folderCode}</Code>

      <div className={s.btnRow}>
        <Link to="/installation/browsers" className={s.btnPrimary}>🧩 Browser Extension Setup →</Link>
        <Link to="/api" className={s.btnSecondary}>📡 API Reference</Link>
      </div>
    </div>
  );
}