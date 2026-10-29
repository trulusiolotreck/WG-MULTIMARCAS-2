/*
 * Quando este projeto estiver hospedado no mesmo servidor Node.js, deixe vazio.
 * No GitHub Pages, informe abaixo a URL HTTPS do seu backend, sem barra final.
 * Exemplo: window.WG_API_URL = 'https://wg-multimarcas.onrender.com';
 */
window.WG_API_URL = window.WG_API_URL || '';

(() => {
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const path = typeof input === 'string' ? input : input.url;
    if (!path.startsWith('/api/')) return originalFetch(input, init);
    if (!window.WG_API_URL && location.hostname.endsWith('github.io')) {
      return Promise.reject(new Error('O painel e os pedidos precisam de um backend. Configure a URL do servidor em config.js antes de usar o GitHub Pages.'));
    }
    const endpoint = window.WG_API_URL ? `${window.WG_API_URL.replace(/\/$/, '')}${path}` : path;
    return originalFetch(endpoint, init);
  };
})();
