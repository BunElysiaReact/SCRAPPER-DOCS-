import React from 'react';
import { Link } from "../router.js";
import { Code } from "bertui-code";
import s from "../styles/shared.module.css.js";
const cookiesRequest = "GET http://localhost:8080/api/v1/session/cookies?domain=github.com";
const cookiesResponse = `[
` + `  {
` + `    "name": "session_id",
` + `    "value": "abc123...",
` + `    "domain": "github.com",
` + `    "httpOnly": true,
` + `    "secure": true
` + `  }
` + "]";
const fingerprintResponse = `{
` + `  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36...",
` + `  "platform": "Linux x86_64",
` + `  "language": "en-US",
` + `  "screenWidth": 1920,
` + `  "screenHeight": 1080,
` + `  "timezone": "Africa/Nairobi",
` + `  "headers": {
` + `    "Accept": "text/html,application/xhtml+xml...",
` + `    "Accept-Language": "en-US,en;q=0.9"
` + `  }
` + "}";
const tokensResponse = `{
` + `  "bearer": ["eyJhbGciOiJIUzI1NiJ9..."],
` + `  "csrf": ["f47ac10b-58cc..."],
` + `  "jwt": ["eyJ0eXAiOiJKV1Q..."],
` + `  "custom": {
` + `    "x-auth-token": "abc123...",
` + `    "x-task-token": "xyz789..."
` + `  }
` + "}";
const envResponse = `export SCRAPY_BEARER_TOKEN="eyJhbGciOiJIUzI1NiJ9..."
` + `export SCRAPY_CSRF_TOKEN="abc123..."
` + `export SCRAPY_USER_AGENT="Mozilla/5.0..."
` + 'export SCRAPY_COOKIES="session=abc; token=xyz"';
function Endpoint({ path, desc, params = [] }) {
  return React.createElement("div", {
    className: s.endpoint
  }, React.createElement("div", {
    className: s.endpointLine
  }, React.createElement("span", {
    className: s.methodGet
  }, "GET"), React.createElement("span", {
    className: s.endpointPath
  }, path)), React.createElement("p", {
    className: s.endpointDesc
  }, desc), params.length > 0 && React.createElement("div", {
    className: s.endpointParams
  }, params.map(([key, val]) => React.createElement("span", {
    key,
    className: s.paramTag
  }, key, React.createElement("span", null, "=", val)))));
}
export default function ApiReference() {
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "API REFERENCE"), React.createElement("h1", null, "\uD83D\uDCE1 REST API Reference"), React.createElement("p", null, "All endpoints at ", React.createElement("code", null, "http://localhost:8080"), ". No auth required — local only.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "ℹ️"), React.createElement("div", {
    className: s.calloutBody
  }, "The API server must be running (", React.createElement("code", null, "python3 api.py"), ") and the extension must have captured at least one session.")), React.createElement("h2", null, "\uD83C\uDF6A Session Endpoints"), React.createElement(Endpoint, {
    path: "/api/v1/session/cookies",
    desc: "All cookies for a specific domain, including HttpOnly and Secure cookies.",
    params: [["domain", "example.com"]]
  }), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, cookiesRequest), React.createElement(Code, {
    language: "json",
    theme: "dark"
  }, cookiesResponse), React.createElement(Endpoint, {
    path: "/api/v1/session/all",
    desc: "Complete session dump — cookies for all domains, tokens, fingerprint, and recent requests."
  }), React.createElement(Endpoint, {
    path: "/api/v1/session/localstorage",
    desc: "localStorage and sessionStorage data for a specific domain.",
    params: [["domain", "example.com"]]
  }), React.createElement("h2", null, "\uD83D\uDDA5️ Fingerprint"), React.createElement(Endpoint, {
    path: "/api/v1/fingerprint",
    desc: "Your browser fingerprint — user agent, screen resolution, timezone, language, and full header set."
  }), React.createElement(Code, {
    language: "json",
    theme: "dark"
  }, fingerprintResponse), React.createElement("h2", null, "\uD83D\uDD11 Tokens"), React.createElement(Endpoint, {
    path: "/api/v1/tokens/all",
    desc: "All extracted auth tokens — Bearer, JWTs, CSRF tokens, and custom auth headers."
  }), React.createElement(Code, {
    language: "json",
    theme: "dark"
  }, tokensResponse), React.createElement("h2", null, "\uD83D\uDCE4 Network Traffic"), React.createElement(Endpoint, {
    path: "/api/v1/requests/recent",
    desc: "Recent captured HTTP requests with URLs, methods, headers, and POST bodies.",
    params: [["limit", "50"]]
  }), React.createElement("h2", null, "\uD83C\uDF33 DOM"), React.createElement(Endpoint, {
    path: "/api/v1/dom/snapshot",
    desc: "Full rendered DOM snapshot for a URL, after JavaScript execution.",
    params: [["url", "example.com"]]
  }), React.createElement("h2", null, "\uD83D\uDCE6 Export"), React.createElement(Endpoint, {
    path: "/api/v1/export/env",
    desc: "Everything as shell environment variables. Source directly in your shell scripts."
  }), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, envResponse), React.createElement(Endpoint, {
    path: "/api/v1/bulk/all",
    desc: "Everything in a single request in your chosen format.",
    params: [["format", "json | jsonl | har | csv | txt"]]
  }), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/examples",
    className: s.btnPrimary
  }, "\uD83D\uDCBB See Code Examples →"), React.createElement(Link, {
    to: "/dashboard",
    className: s.btnSecondary
  }, "\uD83D\uDCCA Dashboard Guide")));
}
