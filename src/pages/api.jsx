import { Link } from 'bertui/router';
import { Code } from 'bertui-code';
import s from '../styles/shared.module.css';

const cookiesRequest = 'GET http://localhost:8080/api/v1/session/cookies?domain=github.com';

const cookiesResponse = '[\n' +
'  {\n' +
'    "name": "session_id",\n' +
'    "value": "abc123...",\n' +
'    "domain": "github.com",\n' +
'    "httpOnly": true,\n' +
'    "secure": true\n' +
'  }\n' +
']';

const fingerprintResponse = '{\n' +
'  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36...",\n' +
'  "platform": "Linux x86_64",\n' +
'  "language": "en-US",\n' +
'  "screenWidth": 1920,\n' +
'  "screenHeight": 1080,\n' +
'  "timezone": "Africa/Nairobi",\n' +
'  "headers": {\n' +
'    "Accept": "text/html,application/xhtml+xml...",\n' +
'    "Accept-Language": "en-US,en;q=0.9"\n' +
'  }\n' +
'}';

const tokensResponse = '{\n' +
'  "bearer": ["eyJhbGciOiJIUzI1NiJ9..."],\n' +
'  "csrf": ["f47ac10b-58cc..."],\n' +
'  "jwt": ["eyJ0eXAiOiJKV1Q..."],\n' +
'  "custom": {\n' +
'    "x-auth-token": "abc123...",\n' +
'    "x-task-token": "xyz789..."\n' +
'  }\n' +
'}';

const envResponse = 'export SCRAPY_BEARER_TOKEN="eyJhbGciOiJIUzI1NiJ9..."\n' +
'export SCRAPY_CSRF_TOKEN="abc123..."\n' +
'export SCRAPY_USER_AGENT="Mozilla/5.0..."\n' +
'export SCRAPY_COOKIES="session=abc; token=xyz"';

function Endpoint({ path, desc, params = [] }) {
  return (
    <div className={s.endpoint}>
      <div className={s.endpointLine}>
        <span className={s.methodGet}>GET</span>
        <span className={s.endpointPath}>{path}</span>
      </div>
      <p className={s.endpointDesc}>{desc}</p>
      {params.length > 0 && (
        <div className={s.endpointParams}>
          {params.map(([key, val]) => (
            <span key={key} className={s.paramTag}>{key}<span>={val}</span></span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ApiReference() {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <span className={s.pageTag}>API REFERENCE</span>
        <h1>📡 REST API Reference</h1>
        <p>All endpoints at <code>http://localhost:8080</code>. No auth required — local only.</p>
      </div>

      <div className={`${s.callout} ${s.calloutInfo}`}>
        <span className={s.calloutIcon}>ℹ️</span>
        <div className={s.calloutBody}>
          The API server must be running (<code>python3 api.py</code>) and the extension must have captured at least one session.
        </div>
      </div>

      <h2>🍪 Session Endpoints</h2>
      <Endpoint path="/api/v1/session/cookies" desc="All cookies for a specific domain, including HttpOnly and Secure cookies." params={[['domain', 'example.com']]} />
      <Code language="bash" theme="dark">{cookiesRequest}</Code>
      <Code language="json" theme="dark">{cookiesResponse}</Code>

      <Endpoint path="/api/v1/session/all" desc="Complete session dump — cookies for all domains, tokens, fingerprint, and recent requests." />

      <Endpoint path="/api/v1/session/localstorage" desc="localStorage and sessionStorage data for a specific domain." params={[['domain', 'example.com']]} />

      <h2>🖥️ Fingerprint</h2>
      <Endpoint path="/api/v1/fingerprint" desc="Your browser fingerprint — user agent, screen resolution, timezone, language, and full header set." />
      <Code language="json" theme="dark">{fingerprintResponse}</Code>

      <h2>🔑 Tokens</h2>
      <Endpoint path="/api/v1/tokens/all" desc="All extracted auth tokens — Bearer, JWTs, CSRF tokens, and custom auth headers." />
      <Code language="json" theme="dark">{tokensResponse}</Code>

      <h2>📤 Network Traffic</h2>
      <Endpoint path="/api/v1/requests/recent" desc="Recent captured HTTP requests with URLs, methods, headers, and POST bodies." params={[['limit', '50']]} />

      <h2>🌳 DOM</h2>
      <Endpoint path="/api/v1/dom/snapshot" desc="Full rendered DOM snapshot for a URL, after JavaScript execution." params={[['url', 'example.com']]} />

      <h2>📦 Export</h2>
      <Endpoint path="/api/v1/export/env" desc="Everything as shell environment variables. Source directly in your shell scripts." />
      <Code language="bash" theme="dark">{envResponse}</Code>

      <Endpoint path="/api/v1/bulk/all" desc="Everything in a single request in your chosen format." params={[['format', 'json | jsonl | har | csv | txt']]} />

      <div className={s.btnRow}>
        <Link to="/examples" className={s.btnPrimary}>💻 See Code Examples →</Link>
        <Link to="/dashboard" className={s.btnSecondary}>📊 Dashboard Guide</Link>
      </div>
    </div>
  );
}
