# indahouse

React + Vite, хоститься на Cloudflare Workers (static assets).

## Вимоги

- Node.js 22+ (`nvm use` — версія в `.nvmrc`)
- Акаунт Cloudflare

## Старт

```sh
nvm use
npm install
npm run cf:login   # один раз: авторизація в Cloudflare
npm run dev
```

## Команди

| Команда | Що робить |
| --- | --- |
| `npm run dev` / `npm start` | Dev-сервер з HMR (http://localhost:5173) |
| `npm run build` | Перевірка типів + продакшн-збірка в `dist/` |
| `npm run preview` | Збірка + локальний запуск у рантаймі Cloudflare (`wrangler dev`, http://localhost:8787) |
| `npm run preview:vite` | Перегляд `dist/` через `vite preview` (без Cloudflare) |
| `npm run deploy` | Збірка + деплой у продакшн |
| `npm run deploy:preview` | Збірка + завантаження нової версії **без** перемикання продакшну; Cloudflare дає preview-URL |
| `npm run lint` | Лінтер (oxlint) |
| `npm run typecheck` | Тільки перевірка типів |
| `npm run cf:login` | Логін у Cloudflare |
| `npm run cf:whoami` | Під яким акаунтом залогінено |
| `npm run cf:logs` | Живі логи задеплоєного воркера |

Після першого `npm run deploy` сайт буде доступний на `https://indahouse.<твій-субдомен>.workers.dev`.
Свій домен можна підключити в дашборді Cloudflare: Workers & Pages → indahouse → Settings → Domains & Routes.

## Конфіг

`wrangler.jsonc` — ім'я воркера і налаштування статики. `not_found_handling: single-page-application` віддає `index.html` на будь-який невідомий шлях, тож клієнтський роутинг (React Router тощо) працюватиме.
