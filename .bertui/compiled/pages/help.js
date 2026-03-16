import React from 'react';
import { useState } from "react";
import { Link } from "../router.js";
import { Code } from "bertui-code";
import s from "../styles/shared.module.css.js";
const issues = [
  {
    category: "\uD83D\uDD0C Native Host & Extension",
    items: [
      {
        error: "❌ Disconnected: Access to the specified native messaging host is forbidden.",
        where: "Browser DevTools Console (background.js)",
        cause: "The extension ID in the native messaging manifest doesn't match the actual extension ID in your browser. This happens when you reload, reinstall, or move the extension folder — it gets a new ID.",
        fix: `# Step 1 — Find your real extension ID
# Open brave://extensions or chrome://extensions
# Copy the ID shown under SCRAPPER

# Step 2 — Re-register it
scrapper-register-ext YOUR_ACTUAL_ID_HERE

# Step 3 — Reload the extension in the browser
# brave://extensions → click the reload icon on SCRAPPER`,
        note: "Every time you reinstall or move the extension folder, the ID changes and you must re-register."
      },
      {
        error: "scrapper-start: command not found",
        where: "Terminal",
        cause: "The installer added ~/.scrapper/bin to your PATH in ~/.bashrc but your current terminal session hasn't picked it up yet. The installer runs in a subshell — PATH changes die with it.",
        fix: `# Fix for current terminal session
source ~/.bashrc

# Then try again
scrapper-start`,
        note: "You only need to do this once after install. New terminals will have it automatically."
      },
      {
        error: "scrapper: command not found (after typing 'scrapper start')",
        where: "Terminal",
        cause: "The command uses a dash, not a space. 'scrapper start' looks for a program called 'scrapper' — which doesn't exist. The correct command is 'scrapper-start'.",
        fix: `# Wrong
scrapper start

# Right
scrapper-start

# With dev mode
scrapper-start --dev`
      },
      {
        error: "Native port open → immediately Disconnected",
        where: "Browser DevTools Console (background.js)",
        cause: "The native host binary can't be found at the path specified in the manifest, or it's not executable.",
        fix: `# Check the manifest path is correct
cat ~/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts/com.scraper.core.json

# Check the binary exists and is executable
ls -la ~/.scrapper/bin/native_host

# If not executable, fix it
chmod +x ~/.scrapper/bin/native_host`
      }
    ]
  },
  {
    category: "\uD83D\uDCC2 Data Not Being Saved",
    items: [
      {
        error: "Extension popup shows requests but ~/.scrapper/data/ is empty",
        where: "File system",
        cause: "The C binary (native host) has a hardcoded path from the developer's machine compiled in. It's writing data to /home/PeaseErnest/scraper/data/ instead of ~/.scrapper/data/.",
        fix: `# Quick fix — symlink the old path to the new one
mkdir -p /home/PeaseErnest/scraper
ln -s ~/.scrapper/data /home/PeaseErnest/scraper/data
ln -s ~/.scrapper/logs /home/PeaseErnest/scraper/logs

# Verify it works — browse a site then check
ls ~/.scrapper/data/`,
        note: "This is fixed in the latest binary. If you're on an older version, run scrapper-update to get the new one."
      },
      {
        error: "API returns empty data / no sessions found",
        where: "http://localhost:8080 or API response",
        cause: "SCRAPPER only captures data when you actually browse. The data folder is empty because you haven't visited any sites since starting SCRAPPER.",
        fix: `# Make sure this order is followed:
# 1. Start SCRAPPER
scrapper-start

# 2. Open your browser — the extension must be active
# 3. Browse to your target site and click around
# 4. Come back and check the API
curl http://localhost:8080/api/v1/session/all`,
        note: "The extension must be loaded and the native host must be running BEFORE you browse. Order matters."
      }
    ]
  },
  {
    category: "\uD83D\uDE80 Installation Problems",
    items: [
      {
        error: "Failed to download linux.tar.gz from repo",
        where: "Installer output",
        cause: "Network issue, or the tarball hasn't been pushed to the repo yet.",
        fix: `# Check if you can reach GitHub
curl -I https://github.com/BunElysiaReact/SCRAPY

# Try the install again
curl -fsSL https://raw.githubusercontent.com/BunElysiaReact/SCRAPY/main/install.sh | bash`
      },
      {
        error: "tar: Error opening archive: Failed to open '/tmp/scrapper-linux.tar.gz'",
        where: "Installer output",
        cause: "The download silently failed or was incomplete.",
        fix: `# Download it manually and check the size
curl -fsSL https://github.com/BunElysiaReact/SCRAPY/raw/main/linux.tar.gz -o /tmp/scrapper-linux.tar.gz
ls -lh /tmp/scrapper-linux.tar.gz

# If it looks right, extract manually
tar -xzf /tmp/scrapper-linux.tar.gz -C ~/.scrapper --strip-components=1`
      },
      {
        error: "Permission denied when running scrapper-start",
        where: "Terminal",
        cause: "The launcher scripts weren't made executable, or the binary lost its executable flag.",
        fix: `chmod +x ~/.scrapper/bin/scrapper-start
chmod +x ~/.scrapper/bin/scrapper-stop
chmod +x ~/.scrapper/bin/scrapper-update
chmod +x ~/.scrapper/bin/scrapper-register-ext
chmod +x ~/.scrapper/bin/native_host
chmod +x ~/.scrapper/bin/rust_finder`
      },
      {
        error: "Python3 not found",
        where: "Installer warning or scrapper-start output",
        cause: "Python 3 is not installed on the system.",
        fix: `# Ubuntu / Debian
sudo apt install python3

# Arch
sudo pacman -S python

# macOS
brew install python3

# Verify
python3 --version`
      }
    ]
  },
  {
    category: "\uD83C\uDF10 Browser & Extension Issues",
    items: [
      {
        error: "Firefox: extension removed on restart",
        where: "Firefox browser",
        cause: "Firefox doesn't allow permanently loading unsigned unpacked extensions. Temporary add-ons are removed every time the browser restarts.",
        fix: `# Option 1 — Use Brave or Chrome instead (recommended)
# They support persistent unpacked extensions with no issues

# Option 2 — Re-load after every Firefox restart
# about:debugging → This Firefox → Load Temporary Add-on
# Select: ~/.scrapper/extension/firefox/manifest.json`,
        note: "A signed Firefox extension is on the roadmap. For now, Brave or Chrome is the better choice."
      },
      {
        error: "Works in Brave but not Chrome (or vice versa)",
        where: "Browser",
        cause: "Different browsers give extensions different IDs. Registering the extension in one browser doesn't cover the other.",
        fix: `# Load the extension in Chrome separately
# chrome://extensions → Developer mode → Load unpacked
# → select ~/.scrapper/extension/brave/

# Copy the Chrome extension ID (different from Brave's)
# Register it
scrapper-register-ext YOUR_CHROME_EXTENSION_ID`,
        note: "You need to register separately for each browser you use."
      },
      {
        error: "Extension popup shows 0 requests even while browsing",
        where: "Extension popup",
        cause: "The extension is loaded but not tracking the current tab. You need to click 'Start Tracking' in the popup.",
        fix: `# Click the SCRAPPER extension icon in your browser toolbar
# Click "Start Tracking" or "Track Tab"
# Then browse your target site
# The live feed should start showing requests immediately`
      }
    ]
  },
  {
    category: "\uD83E\uDE9F Windows Specific",
    items: [
      {
        error: "Windows Defender blocked debug_host.exe",
        where: "Windows Security / installer",
        cause: "Windows Defender flags unsigned executables from unknown publishers. The native host binary is not code-signed.",
        fix: `# Option 1 — Add an exclusion in Windows Security
# Windows Security → Virus & threat protection
# → Manage settings → Add or remove exclusions
# → Add folder: %USERPROFILE%.scrapper\bin
# Option 2 — Run PowerShell as Administrator and allow it
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
      },
      {
        error: "scrapper-register-ext.ps1 cannot be loaded, execution policy",
        where: "PowerShell",
        cause: "PowerShell's execution policy blocks running scripts by default on Windows.",
        fix: `# Run this once in PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then try again
scrapper-register-ext.ps1 YOUR_EXTENSION_ID`
      },
      {
        error: "Native messaging manifest not found / host not registered",
        where: "Browser on Windows",
        cause: "On Windows, native messaging also requires a registry key — not just the JSON file. The installer handles this but Administrator privileges are required.",
        fix: `# Re-run the installer as Administrator
# Right-click PowerShell → Run as Administrator
irm https://raw.githubusercontent.com/BunElysiaReact/SCRAPY/main/install.ps1 | iex`
      }
    ]
  },
  {
    category: "\uD83D\uDC0D Python API Issues",
    items: [
      {
        error: "[API] Dashboard: file not found",
        where: "scrapper-start terminal output",
        cause: "The dashboard hasn't been built yet, or the dist/ folder is missing from the tarball extraction.",
        fix: `# Check if dist exists
ls ~/.scrapper/ui/scrapperui/dist/

# If missing, build it
cd ~/.scrapper/ui/scrapperui
bun install && bun run build

# Or just use the built-in Python UI at port 8080 — no build needed`,
        note: "The Python API at localhost:8080 has its own built-in UI. The Bun dashboard is optional."
      },
      {
        error: "Address already in use: port 8080",
        where: "scrapper-start terminal output",
        cause: "A previous SCRAPPER process is still running in the background.",
        fix: `# Stop any running SCRAPPER processes
scrapper-stop

# Or kill manually
pkill -f "python_api/api.py"

# Then start again
scrapper-start`
      },
      {
        error: "ModuleNotFoundError on Windows (pywin32)",
        where: "Windows terminal running api.py",
        cause: "The Windows version of the Python API requires pywin32 for named pipe communication. It's not installed by default.",
        fix: `pip install pywin32`
      }
    ]
  }
];
function IssueItem({ error, where, cause, fix, note }) {
  const [open, setOpen] = useState(false);
  return React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "8px",
      marginBottom: "12px",
      overflow: "hidden"
    }
  }, React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "16px",
      background: "var(--surface)",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      gap: "16px"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: "13px",
      color: "var(--red, #f87171)",
      marginBottom: "4px",
      wordBreak: "break-word"
    }
  }, error), React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text3)"
    }
  }, "\uD83D\uDCCD ", where)), React.createElement("span", {
    style: {
      fontSize: "18px",
      flexShrink: 0,
      color: "var(--accent)",
      transition: "transform 0.2s",
      transform: open ? "rotate(45deg)" : "rotate(0deg)"
    }
  }, "+")), open && React.createElement("div", {
    style: { padding: "0 16px 16px", borderTop: "1px solid var(--border)" }
  }, React.createElement("div", {
    style: { marginTop: "14px", marginBottom: "10px" }
  }, React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: "600",
      textTransform: "uppercase",
      color: "var(--text3)",
      marginBottom: "6px",
      letterSpacing: "0.05em"
    }
  }, "Why it happens"), React.createElement("div", {
    style: { fontSize: "14px", color: "var(--text2)", lineHeight: "1.6" }
  }, cause)), React.createElement("div", {
    style: { marginBottom: note ? "10px" : "0" }
  }, React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: "600",
      textTransform: "uppercase",
      color: "var(--text3)",
      marginBottom: "6px",
      letterSpacing: "0.05em"
    }
  }, "Fix"), React.createElement(Code, {
    language: "bash",
    theme: "dark"
  }, fix)), note && React.createElement("div", {
    style: {
      marginTop: "10px",
      padding: "10px 14px",
      background: "var(--surface2, rgba(255,255,255,0.04))",
      borderRadius: "6px",
      borderLeft: "3px solid var(--yellow, #fbbf24)",
      fontSize: "13px",
      color: "var(--text2)",
      lineHeight: "1.6"
    }
  }, "\uD83D\uDCA1 ", note)));
}
function IssueCategory({ category, items }) {
  return React.createElement("div", {
    style: { marginBottom: "40px" }
  }, React.createElement("h2", {
    style: { marginBottom: "16px", fontSize: "18px" }
  }, category), items.map((item, i) => React.createElement(IssueItem, {
    key: i,
    ...item
  })));
}
export default function Troubleshooting() {
  const [search, setSearch] = useState("");
  const filtered = search.trim().length < 2 ? issues : issues.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => item.error.toLowerCase().includes(search.toLowerCase()) || item.cause.toLowerCase().includes(search.toLowerCase()) || item.fix.toLowerCase().includes(search.toLowerCase()))
  })).filter((cat) => cat.items.length > 0);
  return React.createElement("div", {
    className: s.page
  }, React.createElement("div", {
    className: s.pageHeader
  }, React.createElement("span", {
    className: s.pageTag
  }, "TROUBLESHOOTING"), React.createElement("h1", null, "\uD83D\uDC1B Common Errors & Fixes"), React.createElement("p", null, "Every error you're likely to hit, with exact fixes. Built from real install sessions.")), React.createElement("div", {
    className: `${s.callout} ${s.calloutInfo}`,
    style: { marginBottom: "28px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDCA1"), React.createElement("div", {
    className: s.calloutBody
  }, React.createElement("strong", null, "Before anything else — check this order:"), React.createElement("ol", {
    style: { margin: "8px 0 0 0", paddingLeft: "20px", lineHeight: "2" }
  }, React.createElement("li", null, "Extension loaded in browser ✓"), React.createElement("li", null, "Extension ID registered with ", React.createElement("code", null, "scrapper-register-ext"), " ✓"), React.createElement("li", null, React.createElement("code", null, "scrapper-start"), " running in terminal ✓"), React.createElement("li", null, "Actually browsed a site with the extension active ✓")), React.createElement("div", {
    style: { marginTop: "8px", fontSize: "13px", color: "var(--text3)" }
  }, "90% of issues come from the wrong order or a stale extension ID."))), React.createElement("input", {
    type: "text",
    placeholder: "Search errors...",
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
  }, 'No errors match "', search, '".', " ", React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/issues",
    target: "_blank",
    rel: "noreferrer"
  }, "Open an issue on GitHub"), " ", "and we'll add it here.")) : filtered.map((cat, i) => React.createElement(IssueCategory, {
    key: i,
    category: cat.category,
    items: cat.items
  })), React.createElement("div", {
    className: `${s.callout} ${s.calloutWarning}`,
    style: { marginTop: "16px" }
  }, React.createElement("span", {
    className: s.calloutIcon
  }, "\uD83D\uDC1B"), React.createElement("div", {
    className: s.calloutBody
  }, "Hit an error not listed here?", " ", React.createElement("a", {
    href: "https://github.com/BunElysiaReact/SCRAPY/issues",
    target: "_blank",
    rel: "noreferrer"
  }, "Open a GitHub issue"), " ", "with your error message and OS — we will fix it and add it to this page.")), React.createElement("div", {
    className: s.btnRow
  }, React.createElement(Link, {
    to: "/faq",
    className: s.btnPrimary
  }, "❓ FAQ →"), React.createElement(Link, {
    to: "/installation/linux",
    className: s.btnSecondary
  }, "⚡ Back to Install")));
}
