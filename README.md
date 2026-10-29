# WG Multimarcas — Loja

GitHub Pages hospeda apenas arquivos estáticos. Login, painel, pedidos e estoque exigem a publicação deste servidor Node.js em um serviço compatível e um banco PostgreSQL. Depois de publicar o backend, informe a URL HTTPS dele em `docs/config.js` para que o painel e a loja estática usem a mesma base de dados.

1. Copie `.env.example` para `.env` e preencha todas as variáveis.
2. Execute `npm install` e `npm start`.
3. Depois de configurar o banco, confira `GET /health`.

Obrigatórias: `DATABASE_URL`, `JWT_SECRET` e `ADMIN_PASSWORD`. Nunca envie o `.env` ao Git.

Loja: `/loja.html` · Painel: `/admin.html`
