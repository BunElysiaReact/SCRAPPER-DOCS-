import React from 'react';
import { useState } from "react";
import { Link } from "../router.js";
import s from "../styles/shared.module.css.js";
const faqs = [
  {
    category: "\uD83C\uDFAF The Basics",
    items: [
      {
        q: "Is SCRAPPER actually a scraper?",
        a: "Not exactly. SCRAPPER is a session observer — it watches YOUR browser and serves YOUR session data via API. You still write the scraping code using whatever you like (Python requests, curl, Puppeteer, etc.). SCRAPPER just handles the hard part: auth."
      },
      {
        q: "Do I need to be a developer to use this?",
        a: "Yes. SCRAPPER is a developer tool. The GUI helps you understand what's being captured, but you still need to write code to do something useful with it."
      },
      {
        q: "Is this free?",
        a: "Yes. Open source, runs locally, costs $0 forever."
      },
      {
        q: "Will this save me from Puppeteer hell?",
        a: "Yes. If you've spent hours fighting Cloudflare challenges, login flows that break, sessions that expire, or bot detection — SCRAPPER is worth the setup time. One 5-minute session capture can replace weeks of brittle automation."
      }
    ]
  },
  {
    category: "\uD83D\uDCBB Platform Support",
    items: [
      {
        q: "Does this work on my OS?",
        a: "Linux: ✅ Full support, one-liner install. macOS: ✅ Should work, use the Linux installer. Windows: ✅ Supported via PowerShell — note that Windows paths are carefully thought through but developed on Linux, so open an issue if something's off."
      },
      {
        q: "Which browsers are supported?",
        a: "Brave ✅ (recommended), Chrome ✅, Edge ✅, Firefox ⚠️ (cookies + headers only, no request bodies). Safari ❌ not supported yet."
      },
      {
        q: "Can I use my existing browser with all my logins?",
        a: "Yes — that's the whole point. Use your real browser with your real accounts. SCRAPPER just watches and captures."
      }
    ]
  },
  {
    category: "⚙️ Installation & Setup",
    items: [
      {
        q: "Why do I need to manually copy an extension ID?",
        a: "Security. The native host needs to verify it's really your SCRAPPER extension talking to it, not a malicious website. It's annoying, it's only once, and automatic detection is planned for a future release."
      },
      {
        q: "My extension ID keeps changing!",
        a: "That happens if you move the extension folder, reinstall it, or load it on a different browser profile. Once you have a working setup, don't touch it. A Chrome Web Store version (coming later) will eliminate this entirely."
      },
      {
        q: "Firefox says the extension is temporary and will be removed on restart!",
        a: "Known issue. Firefox temporary add-ons don't persist across restarts. Use Brave, Chrome, or Edge instead."
      },
      {
        q: "The one-liner install failed. What now?",
        a: "Most common causes: missing Python 3, missing Bun/Node.js, permission issues (try sudo on Linux or run PowerShell as Administrator on Windows), or antivirus blocking the native host binary. Check ~/.scrapper/logs/ and open a GitHub issue if you're stuck."
      },
      {
        q: "Do I need to keep the terminal open?",
        a: "Yes — the API server needs to stay running. Use screen or tmux on Linux/macOS to keep it in the background. Windows users can use Task Scheduler. Proper service setup docs are planned."
      }
    ]
  },
  {
    category: "\uD83D\uDD04 Updates",
    items: [
      {
        q: "How do I update SCRAPPER?",
        a: "Right now, re-run the one-liner installer — it overwrites everything cleanly. A dedicated scrapper-update command is planned for a future release. The tool is currently stable so updates won't be frequent."
      },
      {
        q: "What updates are coming?",
        a: "Roadmap includes: a one-liner that handles everything including extension ID registration automatically, a Chrome Web Store version, a dedicated update command, Firefox extension signing, and better Windows installer polish."
      },
      {
        q: "Will updates break my setup?",
        a: "The goal is no. Captured data lives in ~/.scrapper/data/ and won't be touched by the installer. That said, always back up anything important before updating."
      }
    ]
  },
  {
    category: "\uD83D\uDCCA Data & API",
    items: [
      {
        q: "What exactly does the API give me?",
        a: "All cookies (including HttpOnly), localStorage and sessionStorage, auth tokens (Bearer, JWT, CSRF), browser fingerprint, recent network requests with headers and bodies, DOM snapshots — all available as JSON, JSONL, HAR, CSV, or env vars."
      },
      {
        q: "How long do captured sessions last?",
        a: "Depends entirely on the website. Some last days, some hours. When tokens expire, just browse the site again — SCRAPPER will capture the fresh session automatically."
      },
      {
        q: "Can I use this with Python / Node / Go / curl / anything?",
        a: "Yes. The API is plain HTTP. Any language that can make HTTP requests works."
      },
      {
        q: "What's the 97% success rate claim about?",
        a: "That applies specifically to sites with their own internal API, where you hit those endpoints directly using captured tokens. If you're scraping raw HTML, success depends on your selectors — not SCRAPPER."
      }
    ]
  },
  {
    category: "\uD83D\uDD12 Security & Privacy",
    items: [
      {
        q: "Does SCRAPPER see my passwords?",
        a: "It can see whatever your browser sends in network requests — including login form submissions. Run this only on your local machine and never expose the API port to the internet."
      },
      {
        q: "Can SCRAPPER see HTTPS traffic?",
        a: "Yes. The extension runs inside your browser after HTTPS decryption, so it sees exactly what your browser sees."
      },
      {
        q: "Is this legal?",
        a: "The tool itself is legal. What you do with it depends on the website's Terms of Service, applicable data privacy laws (GDPR, CCPA), and how aggressively you hit their servers. You are responsible for your usage."
      },
      {
        q: "Can I get banned?",
        a: "Yes, if you hit a site too hard using your real session. Add delays, act human, be respectful. You literally are a human — the session came from one."
      },
      {
        q: "Is there a cloud or hosted version?",
        a: "No, and there won't be. Your sessions stay on your machine. That's by design."
      }
    ]
  },
  {
    category: "\uD83D\uDC1B Troubleshooting",
    items: [
      {
        q: "Nothing is showing up in the GUI!",
        a: "Check in order: (1) Is the API server running? (2) Is the extension loaded? (3) Did you register the extension ID with scrapper-register-ext? (4) Have you actually browsed any pages? Generate some traffic first, then check the GUI."
      },
      {
        q: "The API returns empty data.",
        a: "You probably haven't browsed any sites since starting SCRAPPER. Go visit your target site, log in, click around — then check the API."
      },
      {
        q: "It works in Brave but not Chrome.",
        a: "Different browsers get different extension IDs. Run scrapper-register-ext separately for each browser you want to use."
      },
      {
        q: "The native host won't start on Windows.",
        a: "Windows Defender is likely blocking debug_host.exe. Add an exception for it in your antivirus settings and make sure you ran the installer as Administrator."
      },
      {
        q: "Cookies are missing for a site.",
        a: "Make sure you're querying cookies for the right domain: GET /api/v1/session/cookies?domain=targetsite.com — cookies are scoped per domain."
      }
    ]
  }
];
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return React.createElement("div", {
    style: { borderBottom: "1px solid var(--border)", padding: "0" }
  }, React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      color: "var(--text1)",
      fontSize: "15px",
      fontWeight: "500",
      gap: "16px"
    }
  }, React.createElement("span", null, q), React.createElement("span", {
    style: {
      fontSize: "18px",
      flexShrink: 0,
      color: "var(--accent)",
      transition: "transform 0.2s",
      transform: open ? "rotate(45deg)" : "rotate(0deg)"
    }
  }, "+")), open && React.createElement("div", {
    style: {
      paddingBottom: "16px",
      color: "var(--text2)",
      fontSize: "14px",
      lineHeight: "1.7"
    }
  }, a));
}
function FAQCategory({ category, items }) {
  return React.createElement("div", {
    style: { marginBottom: "40px" }
  }, React.createElement("h2", {
    style: { marginBottom: "8px", fontSize: "18px" }
  }, category), React.createElement("div", {
    style: { border: "1px solid var(--border)", borderRadius: "8px", padding: "0 20px" }
  }, items.map((item, i) => React.createElement(FAQItem, {
    key: i,
    q: item.q,
    a: item.a
  }))));
}
export default function FAQ() {
  const [search, setSearch] = useState("");
  const filtered = search.trim().length < 2 ? faqs : faqs.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase()))
  })).filter((cat) => cat.items.length > 0);
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "FAQ"), React.createElement("h1", null, "❓ Frequently Asked Questions"), React.createElement("p", null, "Everything you'll wonder about SCRAPPER, answered.")), React.createElement("input", {
    type: "text",
    placeholder: "Search questions...",
    value: search,
    onChange: (e) => setSearch(e.target.value),
    style: {
      width: "100%",
      padding: "10px 16px",
      marginBottom: "32px",
      borderRadius: "8px",
      border: "1px solid var(--border)",
      background: "var(--surface)",
      color: "var(--text1)",
      fontSize: "14px",
      boxSizing: "border-box"
    }
  }), filtered.length === 0 ? React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDD0D"), React.createElement("div", {
    className: s.calloutBody
  }, 'No questions match "', search, '". Try different keywords or', " ", React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/issues",
    target: "_blank",
    rel: "noreferrer"
  }, "open an issue on GitHub"), ".")) : filtered.map((cat, i) => React.createElement(FAQCategory, {
    key: i,
    category: cat.category,
    items: cat.items
  })), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`,
    style: { marginTop: "16px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCAC"), React.createElement("div", {
    className: s.calloutBody
  }, "Still stuck?", " ", React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/issues",
    target: "_blank",
    rel: "noreferrer"
  }, "Open a GitHub issue"), " ", "— questions asked there may end up here.")), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnPrimary
  }, "⚡ Get Started →"), React.createElement(Link, {
    to: "/api",
    className: s.btnSecondary
  }, "\uD83D\uDCE1 API Reference")));
}
