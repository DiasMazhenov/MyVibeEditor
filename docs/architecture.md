# Архитектура v0.57

v0.57 сохраняет безопасные модульные границы без bundler/dependency, размещает CSS-инспектор справа на desktop, выносит auth-flow, shell-контролы и transport-примитивы в отдельные модули:

- `myvibehtml-runtime.php` — PHP filesystem/runtime helpers;
- `myvibehtml.php` — HTTP controller, config и server templates;
- `myvibehtml-source-map.js` — DOM ↔ HTML source-map;
- `myvibehtml-ui-contracts.js` — независимые browser transport/UI contracts, сейчас генератор CSRF-токенов;
- `myvibehtml-transport.js` — cookies, совместимый SHA-1/Base64 слой и AJAX-транспорт; модуль сохраняет существующий протокол без доступа к editor closure;
- `myvibehtml-auth.js` — отдельный DOM/AJAX-flow авторизации, загружается только на auth-странице после transport;
- `myvibehtml-shell-controls.js` — изолированные command palette, preview-кнопки и mobile menu, работающие только через публичные DOM-контролы панели;
- `myvibehtml.js` — оркестрация visual/source editor, files, settings и общей локальной timeline-истории без auth-flow;
- `myvibehtml-theme.css`/`myvibehtml-fallback.css` — theme и critical fallback; design tokens объявлены только в fallback и используются theme-слоем;
- `tests/` — unit, module-boundary, security, regression, CI contract и optional authenticated E2E.

## История изменений

`writeSourceDraft()` — единая точка фиксации draft после visual/source-операций. Она сохраняет текущий draft и добавляет снимок в `myvibehtml:timeline:<file>` в localStorage. В текстовом редакторе `sourceHistoryOpenTimeline()` показывает последние 40 снимков и восстанавливает выбранный source через существующий renderer, поэтому новая модель не дублирует Undo/Redo и не меняет серверный протокол.

Shell-модуль загружается после основного editor runtime и не имеет внешних запросов. Он не импортирует приватные переменные closure: действия вызываются через DOM, поэтому физическое извлечение не меняет публичный editor contract. CI отдельно проверяет его наличие, синтаксис, порядок загрузки и version markers.

v0.29 фиксирует границы runtime без добавления библиотек:

- `myvibehtml-runtime.php` — независимые filesystem/runtime helpers: выбор закрытого runtime-каталога, atomic write, legacy unserialize и Base64 transport decode;
- `myvibehtml.php` — HTTP request/response/config/controller и HTML-шаблоны;
- `myvibehtml-source-map.js` — отдельный DOM ↔ HTML source-map модуль без зависимостей;
- `myvibehtml.js` — UI, авторизация, transport, visual/source editor и файловые операции;
- `myvibehtml-theme.css` и `myvibehtml-fallback.css` — theme и минимальный fallback;
- `tests/` — source-map, deobfuscation, security smoke, HTTP regression и optional authenticated E2E.

Граница между PHP runtime helpers и controller проверяется отдельным `php -l`, а CI запускает полный static/unit/security/HTTP набор. Authenticated E2E не хранит пароль или cookie в репозитории: он запускается только при наличии секретов `MYVIBEHTML_E2E_URL` и `MYVIBEHTML_E2E_COOKIE`.
