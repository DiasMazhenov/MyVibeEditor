# Архитектура v0.50

v0.50 сохраняет безопасные модульные границы без bundler/dependency, размещает CSS-инспектор справа на desktop и выносит независимую command palette в shell-модуль:

- `myvibehtml-runtime.php` — PHP filesystem/runtime helpers;
- `myvibehtml.php` — HTTP controller, config и server templates;
- `myvibehtml-source-map.js` — DOM ↔ HTML source-map;
- `myvibehtml-ui-contracts.js` — независимые browser transport/UI contracts, сейчас генератор CSRF-токенов;
- `myvibehtml-shell-controls.js` — изолированная command palette, работающая только через публичные DOM-контролы панели;
- `myvibehtml.js` — оркестрация auth/transport/visual-source editor/files/settings; крупный closure остаётся следующим extraction seam, потому что его части используют общий editor state;
- `myvibehtml-theme.css`/`myvibehtml-fallback.css` — theme и critical fallback; design tokens объявлены только в fallback и используются theme-слоем;
- `tests/` — unit, security, regression, CI contract и optional authenticated E2E.

Shell-модуль загружается после основного editor runtime и не имеет внешних запросов. Он не импортирует приватные переменные closure: команды вызываются через DOM, поэтому физическое извлечение не меняет публичный editor contract. CI отдельно проверяет его наличие, синтаксис, порядок загрузки и version markers.

v0.29 фиксирует границы runtime без добавления библиотек:

- `myvibehtml-runtime.php` — независимые filesystem/runtime helpers: выбор закрытого runtime-каталога, atomic write, legacy unserialize и Base64 transport decode;
- `myvibehtml.php` — HTTP request/response/config/controller и HTML-шаблоны;
- `myvibehtml-source-map.js` — отдельный DOM ↔ HTML source-map модуль без зависимостей;
- `myvibehtml.js` — UI, авторизация, transport, visual/source editor и файловые операции;
- `myvibehtml-theme.css` и `myvibehtml-fallback.css` — theme и минимальный fallback;
- `tests/` — source-map, deobfuscation, security smoke, HTTP regression и optional authenticated E2E.

Граница между PHP runtime helpers и controller проверяется отдельным `php -l`, а CI запускает полный static/unit/security/HTTP набор. Authenticated E2E не хранит пароль или cookie в репозитории: он запускается только при наличии секретов `MYVIBEHTML_E2E_URL` и `MYVIBEHTML_E2E_COOKIE`.
