import { Link } from 'bertui/router';
import { Code } from 'bertui-code';
import s from '../styles/shared.module.css';

const chmodCode = 'chmod +x debug_host scraper_cli rust_finder';

const buildCode =
'# Linux\n' +
'gcc -O2 -o debug_host debug_host.c -lpthread\n' +
'cargo build --release\n' +
'\n' +
'# Windows (cross-compile)\n' +
'x86_64-w64-mingw32-gcc -o debug_host.exe debug_host_win.c\n' +
'cargo build --release --target x86_64-pc-windows-gnu';

export default function Downloads() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>DOWNLOADS</span>
        <h1>📦 Downloads</h1>
        <p>Download the platform folder from GitHub. No zip — direct folder with pre-compiled binaries.</p>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>ℹ️</span>
        <div className={s.calloutBody}>
          All binaries are pre-compiled — no Rust or C compiler required. Download the <code>linux/</code> or <code>windows/</code> folder directly.
        </div>
      </div>

      <h2>🐧 Linux / macOS</h2>
      <div className={s.downloadCard}>
        <div>
          <div className={s.downloadName}>🐧 linux/ folder</div>
          <div className={s.downloadMeta}>Pre-compiled binaries · No extra deps · Pure Python stdlib</div>
        </div>
        <a href="https://github.com/BunElysiaReact/SCRAPY/tree/main/linux" className={s.downloadBtn} target="_blank" rel="noreferrer">
          📁 Open on GitHub →
        </a>
      </div>

      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>File</th><th>Description</th></tr></thead>
          <tbody>
            {[
              ['debug_host', 'C native messaging host binary'],
              ['scraper_cli', 'CLI client binary'],
              ['rust_finder', 'Rust CSS selector engine'],
              ['api.py', 'Python REST API (no dependencies)'],
              ['extension/brave/', 'Browser extension (Brave/Chrome/Edge)'],
              ['extension/firefox/', 'Browser extension (Firefox)'],
            ].map(([file, desc]) => (
              <tr key={file}><td><code>{file}</code></td><td>{desc}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${s.callout} ${s.calloutWarning}`}>
        <span className={s.calloutIcon}>⚠️</span>
        <div className={s.calloutBody}>After downloading, make binaries executable:</div>
      </div>
      <Code language="bash" theme="dark">{chmodCode}</Code>

      <h2>🪟 Windows</h2>
      <div className={s.downloadCard}>
        <div>
          <div className={s.downloadName}>🪟 windows/ folder</div>
          <div className={s.downloadMeta}>Pre-compiled EXEs · Requires pywin32 · BAT start/stop scripts</div>
        </div>
        <a href="https://github.com/BunElysiaReact/SCRAPY/tree/main/windows" className={s.downloadBtn} target="_blank" rel="noreferrer">
          📁 Open on GitHub →
        </a>
      </div>

      <div className={s.tableWrap}>
        <table>
          <thead><tr><th>File</th><th>Description</th></tr></thead>
          <tbody>
            {[
              ['debug_host.exe', 'C native messaging host'],
              ['scraper_cli.exe', 'CLI client'],
              ['rust_finder.exe', 'Rust CSS selector engine'],
              ['api.py', 'Python REST API (requires pywin32)'],
              ['scrapper-start.bat', 'Start everything'],
              ['scrapper-stop.bat', 'Stop everything'],
            ].map(([file, desc]) => (
              <tr key={file}><td><code>{file}</code></td><td>{desc}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>📦 Full Repository</h2>
      <div className={s.downloadCard}>
        <div>
          <div className={s.downloadName}>⭐ Full SCRAPY Repository</div>
          <div className={s.downloadMeta}>Source code · C + Rust + Python + BertUI · MIT License</div>
        </div>
        <a href="https://github.com/BunElysiaReact/SCRAPY" className={s.downloadBtn} target="_blank" rel="noreferrer">
          🐙 View on GitHub →
        </a>
      </div>

      <h2>🔨 Build from Source</h2>
      <Code language="bash" theme="dark">{buildCode}</Code>

      <div className={s.btnRow}>
        <Link to="/installation/linux" className={s.btnPrimary}>🐧 Linux Setup Guide →</Link>
        <Link to="/installation/windows" className={s.btnSecondary}>🪟 Windows Setup Guide</Link>
      </div>
    </div>
  );
}
