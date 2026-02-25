import { Link, useRouter } from 'bertui/router';
import styles from '../styles/layout.module.css';
import '../styles/global.css';
import { useState } from 'react';

const navSections = [
  {
    label: 'Overview',
    items: [
      { to: '/', label: '🕷️ Introduction' },
      { to: '/how-it-works', label: '🔄 How It Works' },
    ],
  },
  {
    label: 'Setup',
    items: [
      { to: '/installation/linux', label: '🐧 Linux / macOS' },
      { to: '/installation/windows', label: '🪟 Windows' },
      { to: '/installation/browsers', label: '🧩 Browser Extensions' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { to: '/api', label: '📡 API Reference' },
      { to: '/examples', label: '💻 Code Examples' },
      { to: '/dashboard', label: '📊 Dashboard Guide' },
    ],
  },
  {
    label: 'More',
    items: [
      { to: '/downloads', label: '📦 Downloads' },
      { to: '/limitations', label: '⚠️ Limitations' },
    ],
  },
];

export default function DefaultLayout({ children }) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🕷️</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>SCRAPPER</span>
            <span className={styles.logoVersion}>v2.1.0 by BertUI</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          {navSections.map((section) => (
            <div key={section.label} className={styles.navSection}>
              <span className={styles.navLabel}>{section.label}</span>
              {section.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${styles.navLink} ${pathname === item.to ? styles.navLinkActive : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.footer}>
          <a
            href="https://github.com/BunElysiaReact/SCRAPY"
            className={styles.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </aside>

      <main className={styles.main}>
        <button
          className={styles.mobileToggle}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        {children}
      </main>
    </div>
  );
}
