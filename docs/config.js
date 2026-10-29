/* Configure a URL HTTPS do backend antes de publicar no GitHub Pages. */
window.WG_API_URL = window.WG_API_URL || '';
(() => {
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const path = typeof input === 'string' ? input : input.url;
    if (!path.startsWith('/api/')) return originalFetch(input, init);
    if (!window.WG_API_URL && location.hostname.endsWith('github.io')) {
      return Promise.reject(new Error('O painel e os pedidos precisam de um backend. Configure a URL do servidor em config.js.'));
    }
    return originalFetch(window.WG_API_URL ? `${window.WG_API_URL.replace(/\/$/, '')}${path}` : path, init);
  };
})();
