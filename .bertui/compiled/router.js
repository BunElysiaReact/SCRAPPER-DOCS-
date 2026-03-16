import React, { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext(null);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within a Router');
  return context;
}

export function Router({ routes }) {
  const [currentRoute, setCurrentRoute] = useState(null);
  const [params, setParams] = useState({});

  useEffect(() => {
    matchAndSetRoute(window.location.pathname);
    const handlePopState = () => matchAndSetRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [routes]);

  function matchAndSetRoute(pathname) {
    for (const route of routes) {
      if (route.type === 'static' && route.path === pathname) {
        setCurrentRoute(route);
        setParams({});
        return;
      }
    }
    for (const route of routes) {
      if (route.type === 'dynamic') {
        const pattern = route.path.replace(/\[([^\]]+)\]/g, '([^/]+)');
        const regex = new RegExp('^' + pattern + '$');
        const match = pathname.match(regex);
        if (match) {
          const paramNames = [...route.path.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
          const extractedParams = {};
          paramNames.forEach((name, i) => { extractedParams[name] = match[i + 1]; });
          setCurrentRoute(route);
          setParams(extractedParams);
          return;
        }
      }
    }
    setCurrentRoute(null);
    setParams({});
  }

  function navigate(path) {
    window.history.pushState({}, '', path);
    matchAndSetRoute(path);
  }

  const Component = currentRoute?.component;
  return React.createElement(
    RouterContext.Provider,
    { value: { currentRoute, params, navigate, pathname: window.location.pathname } },
    Component ? React.createElement(Component, { params }) : React.createElement(NotFound)
  );
}

export function Link({ to, children, ...props }) {
  const { navigate } = useRouter();
  return React.createElement('a', {
    href: to,
    onClick: (e) => { e.preventDefault(); navigate(to); },
    ...props
  }, children);
}

function NotFound() {
  return React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', alignItems: 'center',
             justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui' }
  },
    React.createElement('h1', { style: { fontSize: '6rem', margin: 0 } }, '404'),
    React.createElement('p', { style: { fontSize: '1.5rem', color: '#666' } }, 'Page not found'),
    React.createElement('a', { href: '/', style: { color: '#10b981', textDecoration: 'none' } }, 'Go home')
  );
}

import Page0 from './pages/index.js';
import Page1 from './pages/api.js';
import Page2 from './pages/dashboard.js';
import Page3 from './pages/downloads.js';
import Page4 from './pages/examples.js';
import Page5 from './pages/faq.js';
import Page6 from './pages/help.js';
import Page7 from './pages/how-it-works.js';
import Page8 from './pages/installation/browsers.js';
import Page9 from './pages/installation/linux.js';
import Page10 from './pages/installation/windows.js';
import Page11 from './pages/limitations.js';

export const routes = [
  { path: '/', component: Page0, type: 'static' },
  { path: '/api', component: Page1, type: 'static' },
  { path: '/dashboard', component: Page2, type: 'static' },
  { path: '/downloads', component: Page3, type: 'static' },
  { path: '/examples', component: Page4, type: 'static' },
  { path: '/faq', component: Page5, type: 'static' },
  { path: '/help', component: Page6, type: 'static' },
  { path: '/how-it-works', component: Page7, type: 'static' },
  { path: '/installation/browsers', component: Page8, type: 'static' },
  { path: '/installation/linux', component: Page9, type: 'static' },
  { path: '/installation/windows', component: Page10, type: 'static' },
  { path: '/limitations', component: Page11, type: 'static' }
];