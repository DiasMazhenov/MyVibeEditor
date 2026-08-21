# Архитектура v0.83

v0.83 сохраняет безопасные модульные границы без bundler/dependency, размещает CSS-инспектор справа на desktop, выносит auth-flow, shell-контролы и transport-примитивы в отдельные модули. Инспектор редактирует HTML-идентификаторы и CSS, но не ARIA-поля; CSS и HTML-атрибуты синхронизируются по диапазону открывающего тега, а структурные операции используют полный диапазон узла. Scrollbar использует фирменные graphite/teal-цвета. CSP enforcing включён для auth/source/error, а visual preview переключается в enforcement только явным `MYVIBEHTML_CSP_VISUAL_ENFORCE=1`:

- `myvibehtml-runtime.php` — PHP filesystem/runtime helpers и ограниченный CSP-report endpoint;
- `myvibehtml.php` — HTTP controller, config и server templates;
- `myvibehtml-source-map.js` — DOM ↔ HTML source-map;
- `myvibehtml-ui-contracts.js` — независимые browser transport/UI contracts, сейчас генератор CSRF-токенов;
- `myvibehtml-transport.js` — cookies, совместимый SHA-1/Base64 слой и AJAX-транспорт; модуль сохраняет существующий протокол без доступа к editor closure;
- `myvibehtml-auth.js` — отдельный DOM/AJAX-flow авторизации, загружается только на auth-странице после transport;
- `myvibehtml-shell-controls.js` — переход из редактора в отдельную админ-страницу, навигация по внутренним ссылкам, command palette, Responsive Preview Studio и mobile menu;
- `myvibehtml-admin.css`/`myvibehtml-admin.js` — независимая responsive-оболочка админки: разделы Overview/Pages/Media/Files/Settings/Health, текущая папка страниц, файловые операции, поиск и мобильный off-canvas menu;
- `myvibehtml.js` — оркестрация visual/source editor, files, settings и общей локальной timeline-истории без auth-flow;
- `myvibehtml-theme.css`/`myvibehtml-fallback.css` — theme и critical fallback; design tokens и geometry storage-error status объявлены только в fallback и используются theme-слоем;
- `tests/` — unit, module-boundary, security, regression, CI contract и optional authenticated E2E.

## История изменений

Админка v0.83 рендерится сервером после той же проверки сессии, что и редактор, по `?admin=1` или `/admin`. Раздел Pages стартует в папке текущего default-файла, показывает HTML-файлы и каталоги с локальными file/folder-иконками в общем слоте, а toolbar использует тот же session/CSRF-контракт для перехода вверх, copy/paste, duplicate, rename, delete, upload и mkdir. Таблица Pages принимает drag-and-drop файлов; отдельное поле выбора файла скрыто и используется только кнопкой Upload. Backend duplicate принимает целевую текущую папку, поэтому paste между каталогами не возвращается в исходный каталог. Авторизация получает симметричное центрирование карточки на оси X/Y. Popup Dashboard удалён из shell; кнопка редактора только выполняет переход на отдельную страницу.

`writeSourceDraft()` — единая точка фиксации draft после visual/source-операций. Она сохраняет текущий draft и добавляет снимок в `myvibehtml:timeline:<file>` в localStorage. В текстовом редакторе `sourceHistoryOpenTimeline()` показывает последние 40 снимков и восстанавливает выбранный source через существующий renderer, поэтому новая модель не дублирует Undo/Redo и не меняет серверный протокол.

## Reusable Components

Компоненты используют существующий `myvibehtml:blocks` localStorage и `sanitizeBlockMarkup()`. `saveBlockPreset()` сохраняет безопасный outerHTML с id/датами, `insertBlockPreset()` вставляет независимую копию или связанную копию с `data-myvibe-component-id`, а `updateBlockPreset()` обновляет запись текущим выделением. `syncLinkedComponentInstances()` обновляет связанные узлы текущей страницы, а `storage` event распространяет изменения в другие открытые редакторы того же origin. Доступ к local/session storage проходит через `MyVibeHTMLUIContracts`: ошибки чтения/квоты дают видимый status-live-region, а не молча теряются. Изменение записывается в draft и требует явного сохранения каждой страницы; серверный HTML и внешние библиотеки для синхронизации не нужны.

## Design Tokens

`getDesignTokenNames()` извлекает имена custom properties из текущего source, `renderDesignTokens()` заполняет поля CSS-инспектора, а `syncDesignTokenSource()` обновляет существующий `:root` или добавляет безопасный `<style>` перед `</head>`. Значение одновременно применяется к live `documentElement`, попадает в source/draft и сохраняется обычной кнопкой `Сохранить`.

## Killer features 4–6

- **Навигация по страницам**: shell-модуль сканирует `a[href]` в same-origin iframe, убирает дубли/внешние URL и строит доступный диалог с открытием страниц в новой вкладке.
- **Page Health**: существующий `validationDialogOpen()` дополнен локальными SEO, структурными, ссылочными и ресурсными предупреждениями; сервер и внешние сервисы не вызываются.
- **Responsive Preview Studio**: три кнопки `data-preview-size` задают desktop/tablet/mobile и точную ширину iframe через inline style; выбранный размер хранится в localStorage по нормализованному пути файла, а старые landscape-значения безопасно нормализуются до соответствующего размера.
- **Modal accessibility**: validation, components, timeline, site map и command palette используют общий focus-trap из UI contracts; закрытие снимает listener и возвращает фокус на кнопку-инициатор.

Shell-модуль загружается после основного editor runtime и не имеет внешних запросов. Он не импортирует приватные переменные closure: действия вызываются через DOM, поэтому физическое извлечение не меняет публичный editor contract. CI отдельно проверяет его наличие, синтаксис, порядок загрузки и version markers.

v0.29 фиксирует границы runtime без добавления библиотек:

- `myvibehtml-runtime.php` — независимые filesystem/runtime helpers: выбор закрытого runtime-каталога, atomic write, legacy unserialize и Base64 transport decode;
- `myvibehtml.php` — HTTP request/response/config/controller и HTML-шаблоны;
- `myvibehtml-source-map.js` — отдельный DOM ↔ HTML source-map модуль без зависимостей;
- `myvibehtml.js` — UI, авторизация, transport, visual/source editor и файловые операции;
- `myvibehtml-theme.css` и `myvibehtml-fallback.css` — theme и минимальный fallback;
- `tests/` — source-map, deobfuscation, security smoke, HTTP regression и optional authenticated E2E.

Граница между PHP runtime helpers и controller проверяется отдельным `php -l`, а CI запускает полный static/unit/security/HTTP набор. Authenticated E2E не хранит пароль или cookie в репозитории: он запускается только при наличии секретов `MYVIBEHTML_E2E_URL` и `MYVIBEHTML_E2E_COOKIE`; при передаче `MYVIBEHTML_E2E_SAVE_CONTENT_B64` и `MYVIBEHTML_E2E_SAVE_EXPECT` дополнительно выполняет save/reload.
