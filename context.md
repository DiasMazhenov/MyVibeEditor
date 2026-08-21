# MyVibeHTML plugin context

## Текущее исправление v0.76

- Добавлен Dashboard проекта на существующем shell-слое: текущий файл, счётчики файлов/папок и HTML/CSS/JS/медиа, статус черновика и быстрые действия в «Файлы», «Настройки», Page Health и preview.
- Dashboard доступен через локальную иконку `layout-dashboard.svg` из Tabler/Iconify, desktop preview controls, мобильное burger-меню и command palette; третья вкладка не добавлялась, чтобы не ломать текущие tab-селекторы.
- Реализация DOM-driven и не вводит новый серверный endpoint или внешнюю runtime-библиотеку; статистика перечитывается при каждом открытии.
- Добавлены локализация ru/en, feature contract, UI snapshot surface и browser acceptance-пункты. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Версия runtime, cache-busting и документация синхронизированы до `0.76`; v0.77–v0.79 сохранены как следующие этапы: каталог контента, массовые операции и улучшенный медиаменеджер.
- Таргетированные Node/PHP syntax/module/feature/snapshot проверки, `tests/ci-contract.sh`, security regression и полный HTTP regression проходят. Сервер `127.0.0.1:8080` отвечает, bridge открыт во встроенном браузере; программного click/screenshot API для авторизованного editor-state нет, а Raven browser audit недоступен без Chromium, поэтому ручная визуальная приёмка Dashboard остаётся отдельным pending-шагом и не объявляется выполненной.

## Текущее исправление v0.75

- Инициализация mobile menu перенесена сразу после проверки панели, до preview-controls; меню получает начальное состояние через `setMenuState(false)`, а обработчик burger подключается независимо от preview-flow.
- Добавлен feature contract на наличие `menuToggle.addEventListener('click', ...)`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Версия синхронно поднята до `0.75`; 25 Node-тестов, syntax/lint, CI contract, security smoke, HTTP regression и `git diff --check` проходят.
- Во встроенном браузере открыт `rev=0.75`: после клика по burger меню визуально открылось с шестью пунктами, повторный клик визуально закрыл его. Скриншоты: `/tmp/myvibe-browser-075-after-logical-click.png` и `/tmp/myvibe-browser-075-after-toggle-close.png`.

## Текущее исправление v0.74

- После live-проверки симптома «burger не появился» найден root cause: прежняя вставка искала `</span></a></div>`, но предыдущий `str_replace` уже добавлял между ними preview-controls. Burger перенесён в финальную замену шаблона после preview-controls.
- Панель получает явный `data-myvibehtml-mobile-shell`, синхронизируемый по `matchMedia('(max-width:900px)')`, resize и состоянию `mobile-preview`.
- CSS theme/fallback используют этот флаг для показа burger, компактной brand-группы и mobile menu; desktop controls скрываются только в мобильном состоянии.
- Подсветка HTML сохраняет исправление v0.72: видимая вкладка `visual` не используется как язык, тип файла берётся из `data-source-type`.
- Версия синхронно поднята до `0.74`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Детерминированная PHP-проверка финального шаблона подтверждает `toggle=1`, `menu=3`, `brand=1`; feature/static/HTTP проверки v0.74 проходят.
- Встроенный browser визуально проверен после открытия `rev=0.74`: справа в компактной панели одновременно видны версия `v0.74`, eye и burger. Скриншот проверки сохранён как `/tmp/myvibe-browser-074.png`.

## Текущее исправление v0.72

- Исправлен root cause подсветки исходника: первая вкладка отображается как `visual`, а фактический тип файла хранится отдельно в `data-source-type`; source editor использует этот атрибут для HTML/CSS/JS/PHP highlighting.
- Мобильный burger получил отдельный mobile-preview contract: при `#d[data-myvibehtml-preview-size="mobile"]` панель редактора также переключается на компактную оболочку, показывает burger и скрывает desktop controls.
- Добавлены feature contracts на `data-source-type`, выбор языка по атрибуту и видимость burger в mobile-preview.
- Версия синхронно поднята до `0.72`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Локальные проверки v0.72: feature contracts, JS syntax, PHP lint и `git diff --check` — PASS. Полный regression и live embedded-browser visual acceptance ещё не пройдены.
- Перед финальным сообщением требуется открыть `?q=myvibe/test-page.html&rev=0.72` во встроенном браузере и визуально проверить burger в реальном mobile viewport и после выбора mobile-preview; текущий API не предоставляет программный screenshot/click контроль.

## Текущее исправление v0.71

- Исправлен root cause режима `text`: `#j[data-encoding="base64"]` декодируется в `serializedSource`, и source editor initial render использует именно его, а не `#j.innerHTML`; HTML-код больше не показывается как Base64.
- Видимые режимы панели переименованы в `visual` и `html`; внутренние значения переключения и POST-поток не изменялись.
- Мобильное меню получило явное fallback-правило видимости кнопки-бургера до 900px; пункты меню используют те же названия `visual` и `html`.
- Добавлены feature contracts на decoded source render, запрет возврата к encoded template payload и мобильную навигацию.
- Версия синхронно поднята до `0.71`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Проверки v0.71: PHP lint для controller/runtime/router, JS syntax, source-map/security/deobfuscation/accessibility/UI/module/feature/snapshot tests, CI contract, security smoke, `git diff --check` и полный `MYVIBEHTML_BASE_URL=http://127.0.0.1:8097 sh tests/regression.sh` — PASS. Live HTTP подтвердил cache-busting v0.71 и enforcing CSP на error surface.
- Встроенный browser visual acceptance требует открыть URL `?q=myvibe/test-page.html&rev=0.71`; в текущем API нет программных click/screenshot-команд, поэтому до ручной проверки он не объявляется выполненным.

## Текущее исправление v0.70

- P4 CSP выполнен по совместимой границе: auth/source/error surfaces получают настоящий `Content-Security-Policy`; visual preview по умолчанию остаётся `Content-Security-Policy-Report-Only`, потому что его same-origin iframe может содержать пользовательские inline-скрипты и стили.
- Для явной проверки visual enforcement добавлен opt-in `MYVIBEHTML_CSP_VISUAL_ENFORCE=1`; без него visual editor не ломает существующий preview-поток.
- Добавлен локальный POST endpoint `?csp-report=1`: payload ограничен 16 KiB, в server log записываются только whitelisted CSP-поля, raw report не сохраняется.
- Обновлены `README.md`, `docs/architecture.md`, `docs/browser-acceptance.md`, `CHANGELOG.md`, CI, regression и security-smoke до v0.70; исправлен устаревший smoke-путь для runtime helper.
- Проверки v0.70: PHP lint для runtime/controller/router, JS syntax, source-map/security/deobfuscation/accessibility/UI/module/feature/snapshot tests, `security-smoke.sh`, `git diff --check` и полный `MYVIBEHTML_BASE_URL=http://127.0.0.1:8097 sh tests/regression.sh` — PASS. Live HTTP отдельно подтвердил auth `Content-Security-Policy` и report endpoint `204`.
- Визуальный интерфейс не менялся; встроенный браузерный screenshot acceptance для P4 не требуется и не заявляется. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне коммита.
- Следующий этап после P4: authenticated browser E2E и ручная проверка visual preview с обычным Report-Only режимом, затем при необходимости отдельная совместимость для `MYVIBEHTML_CSP_VISUAL_ENFORCE=1`.

## Текущее исправление v0.69

- Навигация по страницам получила отдельную локальную иконку `map-2.svg` из Tabler через Iconify; иконка больше не дублирует визуальный смысл библиотеки блоков.
- Responsive Preview Studio упрощён до одного источника управления: три кнопки `desktop/tablet/mobile`. Удалены дублирующий `<select>`, landscape-профили, связанные language keys, CSS и JS-обработчики.
- Ключ localStorage изменён на `myvibehtml:preview-size:<path>`; сохраняются только три поддерживаемых размера, а iframe продолжает менять ширину без перезагрузки.
- Версия синхронно поднята до `0.69`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Следующий шаг перед коммитом: выполнить syntax/unit/security/HTTP regression и проверить отсутствие старого dropdown-контракта и наличие локальной иконки.

## Текущее исправление v0.68

- P3 quality: Page Health теперь локализует остаточные сообщения (empty source, duplicate id, unsafe URL, image alt, plural summary), проверяет реальные `id` из каждого `aria-labelledby` и сообщает отсутствующие ссылки.
- Авторизационный error-list и cache размеров каталогов переведены на JSON encode/decode; старые значения читаются через ограниченный legacy fallback без новых `serialize()`-записей.
- Расчёт размеров каталогов получил бюджет 0.5 секунды и глубину 64 уровня с безопасным нулевым результатом на превышении бюджета; дальнейшая очередь lazy expansion оставлена как отдельная оптимизация для очень больших сайтов.
- Обновлены runtime/editor/CSS/docs/tests version markers до `0.68`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- CSS consolidation выполнен консервативно: geometry storage-error status теперь принадлежит только fallback-слою; широкое удаление дублирующих fallback-правил отложено, потому что они обеспечивают usable UI при недоступной theme.
- Следующий шаг перед коммитом: повторить полный syntax/unit/security/HTTP набор и проверить diff, не затрагивая пользовательский `test-page.html`.

## Текущее исправление v0.67

- P2 Terra: доступ к local/session storage переведён на `MyVibeHTMLUIContracts.storageGet/storageSet/storageRemove`; ошибки блокировки и quota теперь показывают видимый `role=status` live-region, вместо молчаливой потери draft, timeline, компонентов, preview-профиля или rollback id.
- Общий `focusTrap()` удерживает Tab/Shift+Tab внутри validation, components, timeline, site map и command palette; закрытие удаляет listener и возвращает фокус на инициатор.
- Authenticated E2E получил `MYVIBEHTML_E2E_REQUIRE=1` и необязательный save/reload сценарий с `MYVIBEHTML_E2E_SAVE_CONTENT_B64` + `MYVIBEHTML_E2E_SAVE_EXPECT`; без секретов он по-прежнему явно SKIP.
- Обновлены README, architecture, browser acceptance, CHANGELOG, UI contracts, shell/editor runtime, CSS, E2E и version markers до `0.67`.
- Проверки P2: JS syntax, targeted UI/feature tests (7 PASS), shell E2E `sh -n` и smoke без секретов (`SKIP`) — PASS. Полный набор и HTTP regression нужно повторить перед коммитом.
- Встроенный браузер всё ещё открыт на старом `rev=0.65`; после коммита открыть `?q=myvibe/test-page.html&rev=0.67` и вручную проверить storage-error banner и Tab/Shift+Tab в каждом окне.
- Следующий этап: P3 — убрать дубли геометрии theme/fallback, довести Page Health/ARIA, ограничить расчёт размеров каталогов и убрать оставшийся `serialize()`.

## Текущее исправление v0.66

- По аудиту Terra усилен source-map: `openingRangeFor()` отвечает только за opening-tag, `elementRangeFor()` возвращает полный диапазон узла, парные диапазоны строятся стеком; при неоднозначности структурная операция завершается безопасно и не переписывает HTML.
- Save отклоняет повреждённый Base64 до backup и записи с HTTP 422; успешная авторизация больше не использует `$authenticate9`, сессии получают серверный `session_expires_at` и очищаются после TTL.
- Пустой `allowed_ext` теперь означает безопасный allowlist HTML/CSS/JS и смежных текстовых форматов; PHP разрешается только при явном `allow_php=1`.
- Cookie `Secure` и HSTS вычисляются единым transport-флагом; production вне localhost требует HTTPS, а reverse proxy учитывается только при `MYVIBEHTML_TRUST_PROXY=1`.
- Добавлен `tests/security-regression.test.js`, обновлены `security-smoke.sh`, CI и HTTP regression. Проверки v0.66: PHP/JS syntax, 19 Node tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Версия runtime, cache-busting и документация подняты до `0.66`. Встроенный браузер пока открыт на `rev=0.65`; live visual acceptance v0.66 нужно выполнить после перезагрузки URL. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Следующий этап: P2 — видимые ошибки localStorage/quota, общий focus-trap для модальных окон и усиление authenticated E2E.

## Текущее исправление v0.65

- Добавлен `tests/ui-snapshot.test.js` и эталон `tests/snapshots/ui-surface.snapshot.json`: dependency-free контракт проверяет auth/editor/source/visual surfaces, Page Health, CSS-инспектор, dialogs, mobile rules, focus/contrast и keyboard/storage seams.
- Snapshot подключён в CI и документацию; это структурная регрессия UI, не pixel screenshot и не замена ручному прокликиванию во встроенном браузере.
- Обновлены README, accessibility/browser acceptance, CHANGELOG, CI, E2E и regression version markers до `0.65`.
- Пройдены PHP/JS syntax, 15 targeted node tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8080` — PASS. `?q=myvibe/test-page.html&rev=0.65` нужно открыть во встроенном браузере; API не даёт программных click/screenshot-команд, поэтому визуальный manual acceptance не объявляется выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. Следующий этап — после ручного браузерного приёма выбрать следующий функциональный приоритет.

## Текущее исправление v0.64

- Page Health дополнен локальными accessibility-проверками: доступное имя для `button/a/input/select/textarea`, подпись для полей форм через `label`/ARIA и пропуски уровней заголовков.
- Новые сообщения добавлены в `lang.ini`, проброшены через PHP-шаблон и покрыты `tests/accessibility.test.js` и `tests/feature-contracts.test.js`.
- Обновлены README, architecture, accessibility, browser acceptance, CHANGELOG, CI, E2E и regression version markers до `0.64`.
- Пройдены PHP/JS syntax, targeted node tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8080` — PASS. `?q=myvibe/test-page.html&rev=0.63` открыт во встроенном браузере; программных click/screenshot-команд API нет, поэтому ручное прокликивание v0.63 не объявляется визуально принятым.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. Следующий шаг — v0.65 dependency-free visual surface snapshots.

## Текущее исправление v0.63

- Существующая локальная библиотека компонентов получила кнопку `Связать`: вставка остаётся отдельной копией по умолчанию, а связанная копия получает безопасный `data-myvibe-component-id`.
- `syncLinkedComponentInstances()` обновляет связанные экземпляры через source-map и перезагружает только содержимое editor iframe; `storage` event синхронизирует изменения между открытыми страницами одного origin.
- Синхронизация записывает локальный draft и включает явное сохранение, но не выполняет скрытый серверный save. При удалении записи orphan-маркер снимается и экземпляр становится обычным HTML.
- Обновлены README, architecture, accessibility, browser acceptance, CHANGELOG, CI и regression version markers до `0.63`; добавлены contract assertions для marker, linked insertion, storage event и dirty state.
- Пройдены node/PHP syntax, 15 unit/module/feature/accessibility/source-map/UI contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8080` — PASS. `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.63` открыт во встроенном браузере; программных click/screenshot-команд API нет, поэтому ручной сценарий двух вкладок ещё не объявляется визуально принятым.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.62

- Responsive Preview Studio сохраняет выбранный профиль (`desktop`, `tablet`, `tablet-landscape`, `mobile`, `mobile-landscape`) в localStorage по нормализованному пути текущего файла; параметр `rev` исключён из ключа.
- При смене профиля ширина/геометрия iframe обновляется без перезагрузки, а desktop очищает inline override и возвращает базовую ширину.
- Обновлены version markers, README, architecture, function catalog, CHANGELOG, CI и regression до `0.62`; добавлен contract assertion для preview storage.
- Пройдены node/PHP syntax, feature/module contracts, CI contract, `git diff --check` и полный HTTP regression против `127.0.0.1:8080`. `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.62` открыт во встроенном браузере; API открытия вкладки не предоставляет программных click/screenshot-команд, поэтому сохранение профиля после ручного переключения ещё не объявляется визуально принятым.

## Текущее исправление v0.61

- Page Health получил итоговую локальную оценку `0–100`: ошибки уменьшают score на 25, предупреждения на 5; существующий diff и явное подтверждение сохранения не изменены.
- Оценка выводится через безопасный `textContent` в том же диалоге проверки; внешние сервисы, сетевые проверки ссылок и отправка исходника не добавлялись.
- Обновлены version markers, `lang.ini`, README, function catalog, CHANGELOG, CI и regression до `0.61`.
- Перед коммитом v0.61 пройдены node/PHP syntax, feature/module contracts, CI contract, `git diff --check` и полный HTTP regression против `127.0.0.1:8080`; после фиксации нужно открыть `?rev=0.61` во встроенном браузере.

## Текущее исправление v0.60

- Зафиксирован новый рабочий состав killer-фич 4–6: навигация по страницам, Page Health и Responsive Preview Studio.
- В shell-модуль добавлен `data-site-map`: он сканирует same-origin `a[href]` текущего iframe, удаляет дубли/внешние URL, показывает доступный диалог и открывает ссылки в новой вкладке без серверного API.
- Существующий `validationDialogOpen()` расширен локальными проверками `lang`, `title`, `meta description`, `meta viewport`, количества `h1`, ссылок без `href` и лимита ресурсов/строк; сохранение и исходник не меняются автоматически.
- Существующие preview-кнопки дополнены профилями `desktop`, `tablet`, `tablet-landscape`, `mobile`, `mobile-landscape`; ширина iframe меняется без перезагрузки, desktop сбрасывает inline-геометрию.
- Обновлены `lang.ini`, PHP-шаблоны, theme/fallback CSS, README, architecture, function catalog, CHANGELOG, CI и regression version markers до `0.60`.
- Пройдены `node --check`, PHP lint, feature/module contracts, `tests/ci-contract.sh`, `git diff --check` и полный `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS. Live URL `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.60` открыт во встроенном браузере; API открытия вкладки не предоставляет программных click/screenshot-команд, поэтому ручное прокликивание навигации, Page Health и всех viewport-профилей ещё не объявляется выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. После этой записи нужно закоммитить и отправить v0.60, затем продолжить v0.61/v0.62.

## Текущее исправление v0.59

- В CSS-инспектор добавлен блок `Дизайн-токены`: `getDesignTokenNames()` находит custom properties в source, `renderDesignTokens()` показывает актуальные значения, `syncDesignTokenSource()` обновляет существующий `:root` или добавляет style перед `</head>`.
- `Применить` меняет live `documentElement`, `serializedSource`, source map и общий draft; `Новый токен` создаёт валидное имя `--...`. Значения ограничены по длине и блокируют `{}`, HTML, `url()`, `javascript`, `expression` и `;`.
- Добавлены token contract assertions, CSS fallback-правила, README, architecture, function catalog, CHANGELOG и version markers до `0.59`.
- Пройдены `node --check`, PHP lint, feature/module contracts, `git diff --check` и полный HTTP regression против `127.0.0.1:8080`. `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.59` открыт во встроенном браузере; API окна не предоставляет программных click/screenshot-команд, поэтому ручные клики по CSS-инспектору ещё должны быть выполнены пользователем/вручную.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. После v0.59 останется обновить финальную документацию/roadmap и отдельно проверить клики в интерфейсе вручную во встроенном браузере.

## Текущее исправление v0.58

- Существующая библиотека `myvibehtml:blocks` расширена до Reusable Components без второго механизма хранения: записи получают `id`, `type=component`, `created` и `updated`.
- Контекстное меню теперь предлагает `Сохранить компонент`; панель компонентов поддерживает `Вставить`, `Обновить` текущим выделением и удаление. Вставка остаётся независимой копией, поэтому компонент не создаёт скрытых связанных изменений между страницами.
- Старые записи без метаданных совместимо нормализуются в `readBlockLibrary()` в памяти; `sanitizeBlockMarkup()` продолжает удалять script/style/iframe, служебные атрибуты, inline-события и опасные URL.
- Добавлены компонентные contract assertions, README, architecture, function catalog, CHANGELOG и version markers до `0.58`.
- `node --check`, PHP lint, `git diff --check`, `tests/ci-contract.sh` и полный HTTP regression против `127.0.0.1:8080` прошли. Live URL `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.58` открыт во встроенном браузере; API окна не предоставляет программных click/screenshot-команд, поэтому автоматический visual click-through не объявляется выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. Следующий этап — v0.59 Design Tokens.

## Текущее исправление v0.57

- Добавлена локальная Time Machine поверх существующего draft-потока: `writeSourceDraft()` теперь записывает снимки в `myvibehtml:timeline:<file>` и сохраняет максимум 40 последних состояний.
- Снимки создаются и после visual-операций, и после изменений source editor, поэтому обе вкладки используют одну историю без нового серверного API. Ключ нормализует `rev`, чтобы cache-busting не создавал отдельную историю.
- В text-режиме кнопка `История изменений` открывает доступный диалог; восстановление подтверждается и передаётся в существующий `sourceHistoryRender()`, текущие изменения остаются в Undo.
- Добавлены стили fallback для desktop/mobile, `tests/feature-contracts.test.js`, обновлены README, architecture, function catalog, CHANGELOG и version markers до `0.57`.
- `node --check`, `php -l`, `git diff --check`, `tests/ci-contract.sh` и полный `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` прошли. Для HTTP regression доступ к localhost потребовал разрешённого локального запуска; сервер уже был поднят на 127.0.0.1:8080.
- Открыта live-страница `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.57` во встроенном браузере. API окна позволяет открыть вкладку, но не предоставляет программных click/screenshot-команд, поэтому автоматический визуальный click-through не объявляется выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit. Следующий этап — v0.58 Reusable Components.

## Текущее исправление v0.56

- Граница модулей зафиксирована контрактными тестами: auth загружает только `ui-contracts → transport → auth`, editor — `source-map → ui-contracts → transport → editor → shell`; auth-flow не возвращается в `myvibehtml.js`.
- `tests/e2e-authenticated.sh` теперь проверяет актуальную версию asset-цепочки, editor-маркеры, mobile menu и отсутствие auth-only/unsafe markers; пароль и cookie по-прежнему берутся только из CI secrets.
- Добавлен ручной сценарий [`docs/browser-acceptance.md`](docs/browser-acceptance.md) для встроенного браузера: auth, html/text, Files/Settings, context menu, CSS inspector, eye, mobile burger и отсутствие overflow.
- Версия синхронно поднята до `0.56` в PHP, JS-модулях, CSS, README, CHANGELOG, документации, CI и regression.
- Playwright/AWT не запускались по требованию проекта; встроенный браузер можно открыть, но API не предоставляет программных click/screenshot-команд.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.55

- На мобильных ширинах до 900px `data-preview-controls` скрыты: переключатели desktop/tablet/mobile не занимают место и не перекрывают шапку.
- Бургер `#myvibehtml-mobile-menu-toggle` принудительно видим в мобильной шапке; существующее меню сохраняет `aria-expanded`/`aria-hidden` и DOM-обработчики `myvibehtml-shell-controls.js`.
- Auth-flow вынесен в `myvibehtml-auth.js`; auth-шаблон загружает `ui-contracts → transport → auth`, а editor-шаблон продолжает загружать `source-map → ui-contracts → transport → editor → shell`.
- Версия синхронно поднята до `0.55` в PHP, JS-модулях, CSS, README, CHANGELOG, документации и regression-контрактах.
- Перед коммитом открыть `?q=myvibe/test-page.html&rev=0.55` во встроенном браузере и проверить мобильную шапку; API окна не предоставляет программных click/screenshot-команд, поэтому ручной click-through не объявляется автоматически выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.54

- Версия отображается рядом с названием MyVibeHTML на странице авторизации и не скрывается в мобильной шапке редактора.
- Версия синхронно поднята до `0.54` в PHP, JS-модулях, CSS, README, CHANGELOG, документации и HTTP regression.
- Перед коммитом нужно открыть `?q=myvibe/test-page.html&rev=0.54` во встроенном браузере и проверить auth/mobile визуально; API окна не предоставляет программных click/screenshot-команд.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.53

- Исправлен блокер авторизации: при v0.52 extraction transport-модуля случайно удалились `animateValue`, `fadeIn`, `fadeOut`, `slideDown`, `slideUp`, `showPanel`, `hidePanel`; из-за отсутствующего `fadeIn()` flow останавливался на «Создание хеша» до AJAX.
- Animation primitives восстановлены в editor runtime; transport-примитивы остаются в `myvibehtml-transport.js`.
- Исправлено наложение индикатора загрузки на текст авторизации: статус и spinner теперь раскладываются через flex с отдельной ячейкой для иконки в theme/fallback.
- Версия поднята до `0.53`; страница открыта во встроенном браузере через `?q=myvibe/test-page.html&rev=0.53`. Программных click/screenshot-команд у API окна нет, поэтому автоматический ручной ввод пароля во встроенном окне не объявляется выполненным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.52

- Transport-примитивы `writeCookie`, `removeCookie`, `readCookie`, SHA-1/Base64, `base64UrlEncode`, AJAX и `generateToken` вынесены в `myvibehtml-transport.js`; `myvibehtml.js` получает их через явный `MyVibeHTMLTransport`-контракт.
- Авторизационный DOM-flow и существующий AJAX-протокол не переписывались: это намеренная граница безопасного физического разбиения перед отдельным extraction auth-модуля.
- В PHP-шаблоны добавлена загрузка transport-модуля до `myvibehtml.js` для auth и editor режимов; внешних библиотек и доменных запросов не добавлено.
- Версия синхронно поднята до `0.52` в PHP, JS-модулях, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Повторные проверки v0.52: PHP/JS lint, unit/source-map/deobfuscation/accessibility/UI-contract tests, transport contract, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и HTTP regression — PASS.
- Страница v0.52 открыта во встроенном браузере на `?rev=0.52`; live click-through остаётся ручным, потому что API окна не предоставляет программных click/screenshot-команд, поэтому этот пункт не объявляется автоматически пройденным.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.51

- Следующий shell extraction seam завершён: preview-переключатели и mobile menu удалены из `myvibehtml.js` и перенесены в `myvibehtml-shell-controls.js`.
- Сохранён существующий DOM-контракт: preview обновляет `data-myvibehtml-preview-size`/`aria-pressed`, mobile menu управляет `aria-expanded`/`aria-hidden`, Escape возвращает фокус на кнопку бургера.
- Внешних библиотек и доменных запросов не добавлено; `myvibehtml.js` уменьшен ещё на 57 строк.
- Версия синхронно поднята до `0.51` в PHP, JS-модулях, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Обновлённая страница открыта во встроенном браузере на `?rev=0.51`; текущий API сессии не предоставляет программных click/screenshot-команд для этого окна, поэтому live click-through не объявляется выполненным. Статические и HTTP regression — PASS.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.50

- Следующий этап физического разбиения начат с безопасного extraction seam: command palette удалена из `myvibehtml.js` и вынесена в `myvibehtml-shell-controls.js`.
- Новый shell-модуль не обращается к приватному editor closure: он ищет существующие DOM-контролы, вызывает их нативные действия и собирает собственную разметку через DOM API/`textContent`.
- PHP-шаблон загружает `source-map → ui-contracts → myvibehtml.js → shell-controls`; внешних библиотек и доменных запросов нет.
- Проверки v0.50: PHP/JS lint, unit/source-map/deobfuscation/accessibility/UI-contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и HTTP regression — PASS; реальный browser acceptance подтвердил command palette (`Ctrl+K` → поиск `save` → Escape), context menu, CSS-инспектор, desktop/mobile geometry и axe `0` serious/critical нарушений, screenshots просмотрены.
- Известное ограничение тестовой страницы сохраняется: её широкая таблица/блоки дают 5px mobile overflow внутри iframe; пользовательский `test-page.html` не изменялся.
- Версия синхронно поднята до `0.50` в PHP, JS-модулях, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.49

- Реальный browser acceptance v0.48 выявил регресс: desktop resize оставлял inline `width`, и при переходе на mobile bottom-sheet выходил за safe inset.
- Mobile override теперь принудительно сбрасывает inline-ширину через `width:auto!important`, использует `env(safe-area-inset-left/right/bottom)` и скрывает desktop resize handle.
- Реальная browser-проверка покрыла авторизацию, context menu, CSS-инспектор, desktop full-height/right geometry, keyboard resize и mobile bottom-sheet: панель не выходит за viewport, все 20 полей доступны, axe дал 0 serious/critical нарушений, desktop/mobile screenshots просмотрены.
- В iframe пользовательского `test-page.html` отдельно зафиксирован 5px horizontal overflow из-за широких тестовых блоков/таблицы; это не оболочка инспектора и файл пользователя намеренно не изменялся.
- Версия синхронно поднята до `0.49` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохраняются вне commit.

## Текущее исправление v0.48

- CSS-инспектор на desktop перенесён в правую боковую панель на всю высоту окна; ширина ограничена безопасным диапазоном `320px`–`min(720px, 80vw)`.
- На левой границе панели добавлена resize-зона: мышь расширяет панель при движении влево, а клавиши `ArrowLeft`/`ArrowRight`, `Home`/`End` управляют шириной с клавиатуры.
- На мобильных до `700px` сохранён нижний адаптивный sheet, resize-зона скрыта; единый вертикальный scrollbar и нормальный поток fieldset из v0.47 сохранены.
- Версия синхронно поднята до `0.48` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Проверки v0.48: PHP/JS lint, unit/accessibility/UI-contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS. Browser runner в текущем окружении отсутствует, поэтому визуальный screenshot acceptance не заявляется.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне commit.

## Текущее исправление v0.47

- Устранено наложение HTML/ARIA на «Разметку»: причиной было flex-сжатие прямого `fieldset` после переноса scrollbar на весь инспектор. `#myvibehtml-style-inspector` теперь обычный потоковый scroll-контейнер, поэтому все fieldset сохраняют естественную высоту.
- Единый scrollbar окна и блокировка горизонтального overflow сохранены; вложенной прокрутки формы и flex-сжатия больше нет.
- Версия синхронно поднята до `0.47` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Проверки: PHP/JS lint, `node --test tests/source-map.test.js tests/deobfuscation.test.js tests/accessibility.test.js tests/ui-contracts.test.js`, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Headless/browser runner в текущем окружении отсутствует; live-визуальная проверка исправленного наложения и финальный screenshot acceptance не выдаются за выполненные. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне commit.

## Текущее исправление v0.46

- Исправлена геометрия scroll: scrollbar перенесён с `form` CSS-групп на весь `#myvibehtml-style-inspector`. HTML/ARIA, CSS-группы, сообщение об ошибке и footer теперь находятся в одном потоке прокрутки; вложенного scrollbar больше нет.
- Панель сохраняет ограничение `max-height:min(60vh,560px)`, блокирует горизонтальный overflow и на мобильных использует тот же единый вертикальный scroll.
- Версия синхронно поднята до `0.46` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Проверки: PHP/JS lint, `node --test tests/source-map.test.js tests/deobfuscation.test.js tests/accessibility.test.js tests/ui-contracts.test.js`, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Headless/browser runner в текущем окружении отсутствует; live-визуальная проверка единого scrollbar и финальный screenshot acceptance не выдаются за выполненные. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне commit.

## Текущее исправление v0.45

- Нижний CSS-инспектор теперь является flex-панелью с `max-height:min(60vh,560px)`: заголовок, выбранный узел и footer остаются закреплёнными, а область CSS-групп получает внутренний вертикальный scroll. На ширинах до 700px прокручивается вся панель, чтобы HTML/ARIA и CSS-поля не терялись.
- Горизонтальный overflow сохранён закрытым: адаптивная grid-сетка из v0.44 использует `minmax(0,1fr)`, а form — `overflow-x:hidden`, `overflow-y:auto` и `scrollbar-gutter:stable`.
- Версия синхронно поднята до `0.45` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Проверки: PHP/JS lint, `node --test tests/source-map.test.js tests/deobfuscation.test.js tests/accessibility.test.js tests/ui-contracts.test.js`, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Headless/browser runner в текущем окружении отсутствует; live-визуальная проверка скролла и финальный screenshot acceptance не выдаются за выполненные. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне commit.

## Текущее исправление v0.44

- CSS/HTML/ARIA-инспектор больше не строит горизонтальную строку с `min-width:max-content`: нижняя fixed-панель использует адаптивную CSS Grid-сетку, `minmax(0,1fr)` и внутреннюю прокрутку без выезда полей за viewport; mobile-режим сохраняет вертикальную раскладку с 1–2 колонками.
- При выборе нового DOM-элемента обычным кликом visual editor теперь перечитывает CSS/HTML/ARIA-поля, если инспектор уже открыт. Переходы по breadcrumb также обновляют инспектор через тот же `renderStyleInspector`, а контекстное меню продолжает использовать существующий общий путь.
- Корень дефекта: `form` и группы полей имели `min-width:max-content`/flex-геометрию, а `runtimeValue106()` менял только editor focus и не синхронизировал `styleInspectorTarget`.
- Версия синхронно поднята до `0.44` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG, архитектурной/доступностной документации и HTTP regression.
- Проверки: PHP/JS lint, `node --test tests/source-map.test.js tests/deobfuscation.test.js tests/accessibility.test.js tests/ui-contracts.test.js`, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Headless/browser runner в текущем окружении отсутствует; поэтому live-клик и финальный screenshot acceptance не выдаются за выполненные. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне commit.

## Текущее исправление v0.43

- Preview-переключатели теперь инициализируются независимо от наличия mobile menu; visual editor использует `#d iframe`, а `aria-pressed` синхронизируется с `data-myvibehtml-preview-size`.
- Режимы `Десктоп`, `Планшет`, `Телефон` и `Блоки` получили локальные SVG Tabler через Iconify API: `device-desktop`, `device-tablet`, `device-mobile`, `layout-grid`.
- Текстовые подписи заменены на иконки; названия сохранены в `title`, `aria-label`, `data-preview-label`/`data-block-label`, а кнопки получили единую геометрию 34×28 px.
- Проверки: PHP/JS lint, source-map/deobfuscation/accessibility/UI-contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, HTTP regression на `127.0.0.1:8080`, авторизованный HTML/asset smoke на `127.0.0.1:8080` — PASS. Headless/browser runner в окружении отсутствует, поэтому визуальный screenshot acceptance не заявляется.
- Версия синхронно поднята до `0.43`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в commit. Следующий этап — реальный browser/axe acceptance.

## Текущее исправление v0.42

- Контекстное меню стало keyboard-accessible: `ArrowUp`/`ArrowDown` перемещают фокус только по видимым действиям, `Home`/`End` переходят к началу/концу, `Enter`/`Space` активируют пункт, `Escape` закрывает меню.
- При закрытии меню фокус возвращается на элемент, с которого меню было открыто; это исправляет потерю фокуса после действия и сохраняет клавиатурный workflow.
- CSS consolidation завершён для design tokens: palette variables объявлены один раз в fallback-слое, theme их переиспользует. Fallback остаётся самодостаточным критическим слоем.
- Performance baseline сохранён: файловая сортировка остаётся `usort()` из v0.30, а keyboard handler перебирает только ограниченный список кнопок текущего context menu; новых глобальных observers или polling не добавлено.
- Accessibility documentation и tests обновлены; regression теперь загружает оба CSS-слоя и все три локальных JS-модуля с cache-busting `0.42`.
- Версия синхронно поднята до `0.42` в PHP, JS, runtime/source-map/UI-contract, CSS, README, CHANGELOG и HTTP regression.
- Проверки v0.42: PHP lint, JS syntax, source-map/deobfuscation/accessibility/UI-contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении недоступен, поэтому визуальный screenshot acceptance не заявляется.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в commit. План v0.23–v0.42 закрыт; отдельный следующий этап — полноценный browser/axe acceptance и дальнейшее физическое разбиение `myvibehtml.js` после стабилизации DOM contract.

## Текущее исправление v0.41

- Вынесен общий генератор CSRF-токенов из основного IIFE в локальный `myvibehtml-ui-contracts.js`; модуль загружается между source-map и `myvibehtml.js`, не использует внешние библиотеки или домены.
- Существующие PHP runtime и JS source-map границы сохранены. Полный физический распил `myvibehtml.js` не имитировался: основной closure пока остаётся extraction seam, потому что его части используют общий DOM/editor state и требуют отдельного DOM contract.
- CI расширен матрицей PHP `7.4`, `8.1`, `8.3` и Node `20`; добавлены `tests/ci-contract.sh` и `tests/ui-contracts.test.js`. Optional authenticated HTTP E2E теперь проверяет UI-contract и текущие panel markers через GitHub Actions secrets, без секретов делает явный SKIP.
- Версия синхронно поднята до `0.41` в PHP, JS, runtime/source-map, UI-contract, fallback, README, CHANGELOG и HTTP regression.
- Проверки v0.41: PHP lint для runtime/controller/router, `node --check` для трёх JS-модулей, source-map/deobfuscation/accessibility/UI-contract tests, `tests/ci-contract.sh`, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8096` — PASS. GitHub Actions matrix в текущем окружении не запускалась; browser runner также недоступен, поэтому визуальный screenshot acceptance не заявляется.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в commit. Следующий номер — `0.42`: keyboard/focus accessibility, CSS consolidation и performance/documentation cleanup.

## Текущее исправление v0.30

- CSS consolidation: удалён дублирующий mobile panel cascade `max-width:700px` из theme-слоя; fallback сохраняет только критические правила. Добавлены единые focus-visible, `prefers-contrast: more` и `prefers-reduced-motion` правила в theme/fallback.
- Accessibility skill применён к auth/panel journeys: icon/file/settings/toolbar controls получили ARIA role/label и tabindex, tabs активируются Enter/Space, password toggle доступен с клавиатуры, file-list sanitizer сохраняет accessibility attributes.
- Performance: `sortEntries()` переведён с O(n²) ручного сопоставления на `usort()` с natural case-insensitive comparison. Минимальная поддерживаемая PHP-версия закреплена как 7.4; устаревшие PHP 5.2/7.0/7.3 compatibility branches удалены.
- Добавлены [`docs/accessibility.md`](docs/accessibility.md), [`SECURITY.md`](SECURITY.md), [`CHANGELOG.md`](CHANGELOG.md) и `tests/accessibility.test.js`; README дополнен ссылками на актуальную архитектуру, безопасность и доступность.
- Версия runtime/cache-busting поднята до `0.30`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне коммита.
- Проверки v0.30: PHP lint для `myvibehtml-runtime.php`/`myvibehtml.php`/`dev-router.php`, JS syntax, source-map/deobfuscation/accessibility tests, `sh security-smoke.sh`, `git diff --check`, `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS. По accessibility skill: static/manual checklist подготовлен; axe, screen-reader и визуальный screenshot acceptance в текущем окружении не выполнялись.
- Roadmap v0.23–v0.30 реализован; следующий шаг — отдельный реальный browser/axe acceptance, когда в окружении будет доступен headless/browser-инструмент.

## Текущее исправление v0.29

- PHP runtime разделён без изменения публичного входа: `myvibehtml-runtime.php` содержит runtime-directory, atomic-write, legacy unserialize и Base64 decode helpers; `myvibehtml.php` подключает его через `require_once` и оставляет request/response/config/controller.
- Добавлены [`docs/architecture.md`](docs/architecture.md), GitHub Actions workflow `.github/workflows/ci.yml` и `tests/e2e-authenticated.sh`. CI запускает PHP/JS syntax, unit, security и HTTP regression; authenticated E2E запускается только при наличии секретов `MYVIBEHTML_E2E_URL` и `MYVIBEHTML_E2E_COOKIE`, иначе явно пропускается.
- Версия runtime/cache-busting поднята до `0.29`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне коммита.
- Проверки v0.29: `php -l myvibehtml-runtime.php`, `php -l myvibehtml.php`, `node --check myvibehtml.js`, `node --check myvibehtml-source-map.js`, source-map/deobfuscation tests, `sh security-smoke.sh`, `sh tests/e2e-authenticated.sh` (SKIP без секретов), `git diff --check`, `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS.
- Следующий functional номер — `0.30`: CSS consolidation, accessibility, performance и актуальная документация.

## Текущее исправление v0.28

- Завершена механическая часть семантической деобфускации: PHP generated-переменные `...ValueN` переименованы по области действия, JavaScript `callbackValueN`/`callbackArgumentN` — в `runtimeValueN`/`runtimeInputN`, а локальные группы редактора — в `visualEditorValueN`, `settingsValueN` и `submitValueN`. Числовой суффикс сохранён только для различения однотипных локальных значений.
- Удалены мёртвые update/install/activate-заглушки, вызов `checkForUpdates`, настройки `update_final`/`update_beta` и их переводы. Внешний update flow не возвращён.
- Удалены устаревшие локальные compatibility aliases `textolite.php`, `textolite.js`, `textolite.css`; канонические runtime-файлы — `myvibehtml.php`, `myvibehtml.js`, CSS и source-map assets.
- Добавлены `docs/deobfuscation.md` и `tests/deobfuscation.test.js`; regression/security checks синхронизированы с новыми именами и версией `0.28`.
- Версия runtime/cache-busting поднята до `0.28`. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` сохранены вне коммита.
- Проверки v0.28: `php -l myvibehtml.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `node --test tests/source-map.test.js`, `node --test tests/deobfuscation.test.js`, `sh security-smoke.sh`, `git diff --check`, `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh` — PASS. HTTP подтверждён; отдельная визуальная screenshot-проверка в текущем окружении недоступна.
- Следующий functional номер — `0.29`: модульные границы, CI и authenticated E2E.

## Состояние ревью

- Дата: 2026-08-19, Asia/Almaty.
- Версия из исходников: MyVibeHTML `0.22`.
- Статус: локальный аудит исходников завершён; PHP и критические JS-потоки прошли первый этап деобфускации без изменения логики. Каноническое имя продукта и файлов переведено на `myvibehtml`; path guard, точечное HTML-экранирование, runtime-изоляция конфигурации/лога, security headers и безопасный вывод внешнего update-текста добавлены и проверены. Добавлены `test-page.html` и `dev-router.php` для воспроизводимого локального теста через PHP built-in server. Исправлен redirect loop для корневого `siteUrlBase = "/"` в `MyVibeHTMLController::dispatch()`: пустой префикс больше не совпадает с каждым `q`. Добавлена компактная графитово-бирюзовая UI-тема с янтарным акцентом для auth/panel, локальная кнопка просмотра сайта, context menu visual editor и выделение element/section/block. Исправлено перекрытие редактора: панель занимает фиксированные 68px, а iframe — оставшуюся область без лишнего зазора. Сырой HTML-ответ внешней проверки обновлений больше не показывается на панели; вместо него выводится локализованная ошибка обновления. Панель адаптирована сеткой, затем для ширин до 900px переведена на бургер-меню с keyboard/Escape/ARIA-поведением; действия меню вызывают существующие обработчики, без дублирования бизнес-логики. Последняя мобильная правка выровняла глаз и бургер в единую правую action-группу: на мобильном заголовке контейнер растягивается по ширине, а обе кнопки закреплены абсолютным позиционированием от правого края. Внешний update/install/activate flow отключён: `ajaxRequest()` отвергает external URL, мёртвые legacy-ветки удалены, локальная логика сохранения сохранена, бренд ведёт на локальный сайт, а настройки внешних обновлений скрыты. CSP добавлен в режиме `Report-Only`, чтобы собрать реальные нарушения без блокировки пользовательского HTML; добавлен постоянный `security-smoke.sh`. Версия runtime последовательно повышается на `0.01` после каждого функционального набора, включая текущий v0.22; context-only коммиты номер не меняют. Следующий функциональный номер — `0.23`. Пользовательские изменения `test-page.html` оставлены вне этого этапа. Контекстно полный отказ от `innerHTML` для редакторского HTML не внедрён, поскольку это штатный пользовательский HTML-поток; server-response file list уже разбирается через DOMParser и allowlist, а status sinks v0.22 используют textContent.
- Реализовано локально v0.21: CSS-инспектор для выбранного элемента/секции/блока. Действие `Изменить CSS` добавлено в существующее context menu; allowlist содержит 13 свойств, показывает computed/inline значения, применяет их live в iframe, валидирует значения через `CSS.supports()` и синхронизирует только `style` выбранного реального HTML-узла с `serializedSource`. Служебная `<edit>`-обёртка нормализуется к родительскому элементу, а диапазон и вставка атрибута исправлены так, чтобы HTML не повреждался. На desktop панель fixed справа, на mobile — bottom sheet; есть Escape, reset, focus/invalid states и защита от горизонтального overflow. Внешние библиотеки не добавлялись; пользовательский `test-page.html` не изменялся и в коммит не войдёт.
- Git: локальный репозиторий и ветка `main` инициализированы, `origin` настроен на `https://github.com/DiasMazhenov/MyVibeEditor.git`; baseline commit — `1e4ec5049ec3951a2b7b99d7be4db28904c07a35` от 2026-08-18 16:15:09 +0500, контекст GitHub — `f1763f1`, предыдущий security commit — `92383241b9183a2a322e98b9494abbe238730e1c` от 2026-08-18 16:22:50 +0500, текущий runtime/security commit — `4a46ab72377828f9cba06caeed59063f15b8f242` от 2026-08-18 16:38:46 +0500, исправление redirect loop — `1d11c0c` от 2026-08-18 17:09:03 +0500, redesign auth/editor UI + context menu — `b43a58f` от 2026-08-18 17:28:12 +0500, исправление перекрытия iframe — `c1f55b1` от 2026-08-18 17:33:56 +0500, компактная graphite/teal/amber-панель и скрытие сырого update-response — `507219e` от 2026-08-18 17:49:14 +0500, responsive action alignment + version `0.02` — `4946379` от 2026-08-18 18:18:33 +0500, отключение внешнего update flow + version `0.03` — `89b93ad` от 2026-08-18 18:33:12 +0500, CSP Report-Only + security smoke-check + version `0.04` — `3f65ee9` от 2026-08-18 18:36:56 +0500, CSS property inspector + version `0.21` — `b4074ea62650729461ff9b7fc19d357e100a8dba` от 2026-08-19 20:58:18 +0500. Секретный `conf.ini` исключён через `.gitignore`.
- Проверки: `security-smoke.sh` — PASS; `php -l myvibehtml.php`, `php -l textolite.php` и `php -l dev-router.php` — OK на PHP 8.5.8; `node --check myvibehtml.js` — OK на Node.js v24.15.0; `git diff --check` — OK; временные path/XSS и runtime-config harness — PASS; статическая проверка external flow — PASS: в runtime PHP/JS нет `textolite.ru`, `withCredentials`, внешнего `POST`, `buildServiceUrl`, update/install payload или мёртвых update-веток; `test-page.html` разобран стандартным Python `HTMLParser`, внешних URL нет; dev-router HTTP smoke — login route `200`, static page `200`, `conf.ini` `403`; локальный HTTP smoke подтвердил `Content-Security-Policy-Report-Only` и прежние security headers; авторизованный `/?q=myvibe/test-page.html` — `200` без redirect, iframe и theme marker присутствуют; headless browser screenshot подтвердил компактную панель, отсутствие сырого update-текста, отсутствие лишнего зазора, бургер и открытое меню, а также правое выравнивание action-группы в статическом UI-fixture на 375/640 CSS px; theme asset — `200`; Graphify `diagnose multigraph` — 91 узел/284 связи без dangling/self-loop/duplicate endpoint edges.
- Проверка v0.21: headless Chromium в статическом UI-fixture прошёл `46/46` сценариев на 1392×900 и 375×812: context menu, CSS action, 13 полей, desktop/mobile geometry, live apply, корректный `<tag style="...">`, Save, Reset, закрытие панели и отсутствие page errors/overflow. Визуально просмотрены desktop/mobile inspector screenshots. Дополнительно `security-smoke.sh`, PHP/JS syntax checks, `git diff --check` и HTTP regression — PASS.
- Test-only follow-up после push: в `tests/regression.sh` исправлено экранирование круглых скобок в `rg`-assertion; runtime и версия не меняются. Перед фиксацией повторяется HTTP regression.
- Оригиналы PHP/JS до переименования сохранены вне поставки: `/private/tmp/myvibe-originals-20260818/`; SHA-256 исходных файлов: PHP `e5df2da2b45fdc1e674cc9c8add728d970afb8fc3e9df20274307175fe8c4e9e`, JS `40b5d19941e7cb2c1bbe1fb7988dce45e8fdb85f500a4c7c2bbbfc74467444c3`.
- PHP-классы переименованы в `MyVibeHTMLRequest`, `MyVibeHTMLResponse`, `MyVibeHTMLConfig`, `MyVibeHTMLController`; методы получили смысловые имена. В JS переименован верхнеуровневый helper-слой cookie/animation/crypto/AJAX. Полный проход PHP-параметров, alias-констант, вложенных JS-функций и локальных переменных завершён в v0.18.
- SHA-256 baseline UI surfaces before v0.17: `myvibehtml.php` `c4d0627064f85d4018e7462fb9539405a65ca8d7f1cdf12c9bdd8ca51201638b`, `myvibehtml.js` `fe31d8d8c5d073fdca360a815b4dc16c33a9aed0f0e01c2f74814ba7e71154e9`, `myvibehtml.css` `72e942702965c1357068ca10267678441818d55e167a9cfbbf448343cefc530e`, `myvibehtml-theme.css` `12f4ca25d83f03cde6d73819cf3786ccb18d4418763f8fc0083f1d33a19cee67`, `myvibehtml-fallback.css` `2f47f9b628ea07216013750a95d6cfaa74021a531fff238685759a6dc60a2762`, `PRODUCT.md` `b4ef5e5bd3a15252c9170a7fd039875dbf170f2ad8c1b3bd24c29b9c194cd40c`, `myvibehtml-icons/README.md` `b9f0edf40307bf73a4d9d44d0022d99761d6a0b548982d181f1944e721c4ed4b`. Icon hashes are recorded by filename in the release commit.
- Изменения безопасности этого этапа: единый path guard, symlink rejection, upload filename normalization, `escapeHtml()` для динамических filename/URL/metadata/default-file/language values, runtime `conf.ini`/`error.log` вне document root по умолчанию с миграцией старого файла, запрет backup/ini/log в `.htaccess`, базовые security headers, `Secure`/`HttpOnly`/`SameSite=Lax` на PHP 7.3+, CSP в режиме `Report-Only`, постоянный smoke-check и подавление небезопасного длинного внешнего update-ответа вместо вывода его как markup/text. Полный отказ от context-blind `innerHTML` не внедрён, поскольку визуальный редактор использует его для штатного HTML-потока; server-response paths ограничены escaped templates и требуют отдельной DOM-конструкции при дальнейшей модернизации.
- Обратная проверка JS подтвердила: после восстановления старых идентификаторов код совпадает с сохранённым оригиналом; отличаются только разрешённые имена и CRLF/LF.
- Постоянного test framework, `package.json`, `composer.json` и `vendor/` нет; для path guard выполнен временный PHP harness вне поставки. Добавлены русскоязычный `README.md`, production-шаблон `nginx.conf.example` и versioned screenshots в `docs/screenshots/`.

## Текущее исправление v0.05

- Исправлен корень последнего UI-дефекта: visual-editor toolbar (`#e>div>ul+div`) показывался поверх iframe без резервирования высоты. JS теперь синхронизирует состояние toolbar с оболочкой `#d` через `data-myvibehtml-toolbar` и CSS custom property; iframe занимает оставшуюся область и больше не перекрывается breadcrumb/action-row.
- Dropdown файлов/настроек ограничен шириной и высотой viewport, получил внутренний scroll без горизонтального выезда. Подписи в html/text, files/settings, mobile-menu и visual toolbar переведены на единое flex-центрирование.
- Responsive breakpoint панели унифицирован на `900px`: планшетные ширины используют бургер, eye и burger остаются в правой action-группе. Внешние библиотеки не добавлялись.
- Проблема, которую больше не повторяем: при изменении фиксированного header/toolbar нельзя менять только `iframe`-offset — нужно синхронно учитывать все фиксированные ряды и сбрасывать у toolbar старые `bottom`-правила из базовой минифицированной темы.
- Проверено: `php -l` для PHP-файлов, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh`; локально через HTTP: тестовая страница `200`, theme asset `200`, JS asset `200`, оба с версией `0.05`. Полноценный screenshot/browser click-through в этой среде не автоматизирован: headless browser отсутствует.
- Кодовый коммит: `2ce127a` (`2026-08-18 19:35:52 +0500`, `Fix responsive editor toolbar layout`). На момент записи следующий functional version — `0.06`.

## Текущее исправление v0.06

- Устранён остаточный responsive-cascade defect: при ширине до `700px` старый grid-блок мог возвращать шапке `150px`, потому что новый breakpoint сбрасывал только padding/height. Правило `max-width:900px` теперь явно восстанавливает flex-геометрию, абсолютную правую action-группу и высоту шапки `68px`.
- Проверки после этой корректировки: PHP lint для `myvibehtml.php`, `textolite.php`, `dev-router.php` — OK; `node --check myvibehtml.js` — OK; `git diff --check` — OK; `security-smoke.sh` — PASS. Следующий functional version — `0.07`.
- Кодовый коммит: `74ca1bb` (`2026-08-18 19:38:32 +0500`, `Complete mobile panel responsive reset`).

## Текущее исправление v0.07

- Исправлен реальный root cause исчезновения редактируемой страницы на малых разрешениях: `#d` резервировал место под фиксированную шапку, а iframe дополнительно получал тот же вертикальный offset через `body`. Убран двойной offset: оболочка больше не добавляет верхний padding, iframe занимает область от шапки/toolbar до нижнего края.
- Удалены два responsive override (`max-width:900px` и `max-width:700px`), которые возвращали старый `padding-top:68px` и повторно ломали layout именно на планшетах и мобильных ширинах.
- Версия runtime/cache-busting поднята до `0.07` во всех канонических PHP/JS/CSS поверхностях. Внешние библиотеки не добавлялись.
- Реальная headless Chromium-проверка авторизованного интерфейса: 55/55 PASS на 1440x900, 1024x768, 768x1024, 375x812 и 812x375; проверены iframe/content, toolbar без overlap, dropdown files/settings, eye/burger, burger menu, центрирование labels, context menu и отсутствие horizontal overflow. Контрольный screenshot 816x324 после открытия toolbar показывает рабочую страницу сразу под toolbar.
- Проверки: `php -l myvibehtml.php`, `php -l textolite.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh` — PASS/OK. Следующий functional version — `0.08`.
- Кодовый коммит: `c8732a9` (`2026-08-18 19:55:40 +0500`, `Fix responsive iframe offset and release v0.07`), отправлен в `origin/main`. После этого изменения `context.md` обновляется отдельным context-only коммитом.

## Текущее исправление v0.12

- Заменены все новые самодельные inline/CSS иконки панели на локальные SVG из Tabler через Iconify API: `copy.svg`, `arrow-up.svg`, `arrow-down.svg`, `x.svg`, `chevron-right.svg`, `eye.svg`, `menu-2.svg`, `code.svg`. Runtime не обращается к Iconify/Flaticon: CSS использует локальные mask-файлы из `myvibehtml-icons/`; источники и MIT-лицензия записаны в `myvibehtml-icons/README.md`.
- Chevron-разделители между `main`, `section`, `div`, `h1` получили единый 14x18 viewBox, стоят между кнопками с ровными 3px зазорами слева и справа. Четыре action-кнопки имеют одинаковые 34x34 hit-area, SVG-mask 18x18 и gap 6px.
- Верхние группы `html/text` и `Файлы/Настройки` переведены на одинаковую flex-геометрию: все сегменты имеют 34px высоты, активная область занимает всю кнопку, группы фиксированы на 144px/216px на desktop и 132px/196px до 1040px. Horizontal overflow не возникает.
- Для сверки применены `design-taste-frontend` и `impeccable`: сохранена graphite/teal-палитра, убраны ручные glyph/clip-path-иконки, проверены единый stroke/viewBox, keyboard-safe hit-area и responsive overflow. Создан минимальный `PRODUCT.md` как обязательный контекст impeccable; `DESIGN.md` пока не генерировался.
- Реальная headless Chromium-проверка с русской локализацией: верхние кнопки — 1440x240 и 1024x240 без overflow; toolbar/action/icon assets — 816x240 и 463x240, по 14/14 PASS; fallback при заблокированном `myvibehtml-theme.css` — 14/14 PASS. Проверены локальные mask URL, равные размеры, 3px/6px интервалы и mobile eye/menu.
- Проверки исходников: `php -l myvibehtml.php`, `php -l textolite.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh` — PASS/OK. Следующий functional version — `0.13`.
- Кодовый коммит: `8af5b68e5297ea570cb2fedfe4b7a2e3371753f7` (`2026-08-18 20:55:40 +0500`, `Use local Iconify icons and align panel controls`).

## Текущее исправление v0.13

- Исправлен реальный root cause перекрытия в файловом менеджере: старая float/padding-сетка `#f` заменена на общий CSS Grid для заголовка и всех вложенных `ul ol`-строк. Колонки `Имя / Размер / Изменён / Меню` имеют одну геометрию, длинные имена обрезаются ellipsis, action-клетка не налезает на дату; desktop получает 640px, mobile — ширину viewport с внутренним scroll.
- В группе `Файлы / Настройки` добавлен измеряемый gap 6px; верхние Save-кнопки получили единый 34px line-height и центрирование. Старые фоновые цвета в настройках заменены на graphite/teal surface для `dd`, input, radio и disabled Save.
- Исправлен mobile root cause: burger раньше вызывал `click()` у скрытого anchor, а панель не открывалась. Для anchor используется существующий `mousedown`-обработчик редактора, а hidden nav-shell сохраняет нулевую геометрию и позволяет раскрытому fixed-панелю быть видимым; устаревшее mobile `height:93%` переопределено на `height:auto`.
- Live-проверка через headless Chromium выполнена после правок, с `Accept-Language: ru-RU`: files на 1440/1024 и 463px; все вложенные строки измерены, overlap не найден. Все 5 секций settings кликнуты на desktop 1392px и mobile 463px: старый фон `rgb(79,79,81)` не используется, horizontal overflow `0`. Toolbar/icon smoke: 14/14 PASS на 816px и 463px, fallback без theme — 14/14 PASS. Визуально просмотрены desktop/mobile screenshots раскрытых files/settings.
- Статические проверки: `php -l myvibehtml.php`, `php -l textolite.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh` — PASS/OK. Пользовательский `test-page.html` не индексируется в коммит.
- Регрессионное правило для следующих UI-правок: открывать каждое доступное меню и секцию, проверять внутренние строки/поля/кнопки и делать live-замеры минимум на desktop и mobile; одной проверки верхней панели недостаточно.
- Кодовый коммит: `8af6033899d2970e4ff613577b52f8889ac72884` (`2026-08-18T21:19:35+05:00`, `Fix live panel dropdown layouts`); следующий functional version — `0.14`.

## Текущее исправление v0.14

- Исправлен root cause жалобы на кривые отступы у верхней кнопки `Сохранить`: action-группа `Сохранить / Выход` наследовала `gap: 8px`, тогда как внутренний контейнер давал 4px визуального поля. Поэтому между кнопками был двойной шаг относительно краёв группы. В `myvibehtml-theme.css` и fallback-слое задан единый `gap: 4px`, `padding: 3px`, `min-width: max-content`; кнопки не сжимаются и не обрезаются.
- После исправления live-геометрия на 1392px: группа `x=1178..1360`, `Сохранить x=1182..1267`, `Выход x=1271..1356`; промежутки слева/между/справа равны 4px, горизонтальный overflow равен 0. На 1024px action-группа также заканчивается на `x=992` при viewport `1024px`.
- Версия runtime поднята с `0.13` до `0.14` во всех version-bearing файлах: `myvibehtml.php`, `myvibehtml.js`, `myvibehtml.css`, `myvibehtml-fallback.css`. Пользовательский `test-page.html` оставлен вне коммита.
- Live-проверка с русской локализацией: action-группа на 1392/1024px; mobile burger Files/Settings на 463px; все 5 секций Settings на desktop 1392px и mobile 463px. Везде `overflow=0`, строки и вложенные поля доступны, старый фон не возвращается. Статические проверки `php -l` для PHP-файлов, `node --check`, `git diff --check`, `security-smoke.sh` — PASS.
- SHA-256 перед кодовым коммитом: `myvibehtml.php` `681d6fc2ceb90f928d20d1ab790fcb9b33bce43885a846e7e4d7c23ff0920328`, `myvibehtml.js` `b8642a6ad1d2bf1931733465d9b08b3605b8686bd5bcd2943ce620ee7bffb4ea`, `myvibehtml.css` `881602d31b403a1e21e98527cecd640f7b662a4e847625ee21e42d6f155ed430`, `myvibehtml-theme.css` `c939763fa5ed2611302d537049424e2e5d5f8aae9eb7cd87fd4ec1579224c347`, `myvibehtml-fallback.css` `37fb7a821ee24f0f1ba675f40203d908fe774d48f409afe086b219e42ad48b08`.
- Кодовый коммит: `0a2d9aa882426e6eb0b9e1d6d6b659f65fe1b923` (`2026-08-18T21:37:40+05:00`, `Align save action spacing`); отправка в `origin/main` выполняется после context-only коммита.
- Следующий functional version после этого исправления — `0.15`.

## Текущее исправление v0.15

- Убрана фиксированная ширина верхних action-кнопок `Сохранить` и `Выход`. Её задавали старые правила `input[type="button"]{width:94px}`, media override `85px/78px/45px` и fallback-наследование. Для action-группы теперь используется `width: max-content!important`: ширина каждой кнопки определяется собственным текстом и единым горизонтальным padding; общий gap остаётся 4px.
- Live-геометрия после правки: на 1392px `Сохранить=96.78px`, `Выход=71.20px`; на 1440px те же content-sized размеры; action-группа не выходит за правый край и document overflow равен 0. Runtime отображает `v0.15`.
- Выполнена обязательная визуальная проверка: финальный desktop screenshot `save-1392x933.png` просмотрен; mobile screenshot `mobile-files.png` просмотрен после открытия burger и файлового меню. Визуально подтверждены различная ширина по тексту, ровные 4px промежутки, отсутствие clipping и сохранение mobile layout.
- Процессное правило: перед сообщением «готово» для любого UI/design изменения обязательны live browser, клики по затронутым меню/секциям и визуальный просмотр финальных desktop/mobile screenshots. Headless geometry без просмотра изображения не считается достаточным.
- Версия runtime поднята с `0.14` до `0.15`. Пользовательский `test-page.html` остаётся вне коммита.
- SHA-256 перед кодовым коммитом: `myvibehtml.php` `3b463b20bd27239153058f6caf085a27e3771d3181f4e7481034419691ff5e31`, `myvibehtml.js` `ace8dee0ec660af5fca3ab03b7dd1fff980d51305974895cd6de6196a1181827`, `myvibehtml.css` `3bd1781771223cea12027f5513496d05d12d0ee41d101a007ef412e126d0f681`, `myvibehtml-theme.css` `c39ceb3f95779f2b865939eeb05edd45324f23b494ae4641055353c02eb0f4af`, `myvibehtml-fallback.css` `b1171f94ce876b2c6cba771c5ac9becc663898fdeffeb887d50ea969301ddf91`.
- Кодовый коммит: `096aea445c077da8967231978c1eff5947a2d9f2` (`2026-08-18T21:56:18+05:00`, `Use content sized action buttons`); отправлен в `origin/main` вместе с context-only `564915e854f4cd06fde5e7fe10de96e4c6fb006e` (`2026-08-18T22:28:43+05:00`).
- Следующий functional version после этого исправления — `0.16`.

## Текущее исправление v0.16

- Исправлен root cause вкладок: обработчик переключения был навешан на активную вкладку. В visual editor обработчик теперь находится на `text`, а в source editor — на `html`; переходы `html → text → html` сохраняют текущий source и авторизованную сессию, без возврата на auth.
- Вкладка `text` получила полноценный graphite/teal visual layer: старый серый фон заменён на локальные surface/border tokens, header `#c` получил ту же 68px responsive-геометрию, а source-код переведён на grid `gutter + code`, чтобы переносы строк не заходили на номера.
- Исправлен прямой preview: `renderPanel()` строит URL текущего физического файла относительно фактического `DOCUMENT_ROOT` и кодирует сегменты пути. `dev-router.php` теперь также ищет статические файлы относительно `DOCUMENT_ROOT`; в локальном сервере глаз открывает `/test-page.html`, а не `/?q=myvibe/test-page.html`.
- Live Chromium-проверка после правок: desktop 1392x933 — `html → text → html`, обе вкладки с правильным active-class, `auth=false`, POST `switch=1/0`; глаз фактически открыл `http://127.0.0.1:8080/test-page.html`, `#d` отсутствует. Визуально просмотрены `v016-source-desktop.png` и `v016-public-preview.png`.
- Live mobile-проверка 390x844 через реальный burger: `text` открывается через меню, source root `#c`, `auth=false`, horizontal overflow отсутствует, header и source card укладываются в viewport. Визуально просмотрен `v016-source-mobile.png`.
- Статические проверки после правок: `php -l myvibehtml.php` — OK, `node --check myvibehtml.js` — OK; `git diff --check` и `security-smoke.sh` выполняются перед кодовым коммитом. Внешние библиотеки не добавлялись; пользовательский `test-page.html` остаётся вне коммита.
- SHA-256 перед кодовым коммитом: `myvibehtml.php` `16f0572051f9e276acd6d1d4ba08ab4f06ab6d921f97ec271569fa540f985a78`, `myvibehtml.js` `bb8ca5a7194f08dfaad66a5103a302125388eba4a70c3e3288a7349f21b5022e`, `myvibehtml.css` `512fd8b6d51255cc1bd574eefcc64c523e2ffaa12a0d9c5b023d49f0bd5081ec`, `myvibehtml-theme.css` `6d5821075b9cd31c2af812e361b5cfda39be061120d8b3fa6af8578974ac4d1f`, `myvibehtml-fallback.css` `d55d1177e254e2e4d5967a04111d990dff1a73d2636539f0d8afbe5922456239`, `dev-router.php` `97993fd26733d22d1099b3a2f37704297c99180d2775a899d1aae66a140b6bd2`.
- Кодовый коммит: `2d298cad8b3da7a84467d6f79fac5c49f84d4465` (`2026-08-18T22:29:34+05:00`, `Fix source mode and direct site preview`); отправлен в `origin/main` вместе с context-only `12852ee28a86db3b314177a31cb2dcc114b0ce3c` (`2026-08-18T22:30:05+05:00`).
- Следующий functional version после этого исправления — `0.17`.

## Текущее исправление v0.17

- Закрыт security/reliability этап: добавлены `X-Permitted-Cross-Domain-Policies`, `Cache-Control: no-store`, безопасная legacy-deserialization с `allowed_classes=false`, запрет symlink для runtime-конфигурации и backup-источников.
- Конфигурация, HTML, `.htaccess` и backup теперь пишутся через общий lock + временный файл + атомарный `rename`; backup-копирование выполняется потоково и проверяет writable destination. Это устраняет truncate-before-lock и снижает риск частичного файла при параллельной записи.
- Server-response file list в JS больше не вставляется через `innerHTML`: `replaceFileListFragment()` использует `DOMParser`, allowlist тегов/атрибутов и `DocumentFragment`. Штатный пользовательский HTML редактора не переписывался.
- Усилены Apache/dev-router/Nginx-защиты: dotfiles в любых сегментах пути, `backup/`, `*.ini`/`*.log` с суффиксами. Добавлен [`nginx.conf.example`](nginx.conf.example) с `try_files`, PHP-FPM, `DOCUMENT_ROOT`, upload limit и deny rules.
- Добавлен русский [`README.md`](README.md): установка Apache/Nginx/local PHP, авторизация и `DOCUMENT_ROOT`, функции PHP/JS, security notes, troubleshooting, внешние источники и гайд настройки. В `docs/screenshots/` сохранены скриншоты v0.17.
- Версия синхронно поднята до `0.17` в PHP/JS/CSS. Пользовательский `test-page.html` оставлен вне коммита.
- SHA-256 v0.17 перед коммитом: `myvibehtml.php` `5ccef2c7af84d817b45e490975ff448590604874ca816b1d1eccff3dea062d72`, `myvibehtml.js` `79f9caa0c44c581163e3035034e7fb50cb55269b2e2ca7ef1ece6d2e3c8dcc3b`, `myvibehtml.css` `73a93a0d04f45b0af7a04ba9265c6180c462d2233eab16a0216946afa997b8a9`, `myvibehtml-theme.css` `6d5821075b9cd31c2af812e361b5cfda39be061120d8b3fa6af8578974ac4d1f`, `myvibehtml-fallback.css` `8cadca3b03638cacc1cc88f13ce423bc8c8f8450177c19c35e9d354ba1e451c8`, `dev-router.php` `33c34e8590a873b561e44c11ae7c1edf722d8b2404e96e75dcf53d235a84258b`.
- Static checks: `php -l myvibehtml.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh` — PASS. `apachectl -t`/`httpd -t` — `Syntax OK` с обычным локальным warning FQDN; Nginx бинарник на macOS не установлен, поэтому `nginx.conf.example` проверен статическими invariants.
- Изолированный PHP 8.5 server/browser acceptance на `127.0.0.1:8094`: `html → text → html`, auth=false, eye открывает `/test-page.html` без `#d`, desktop/mobile burger flow — PASS; click-through files/settings geometry — `34/34 PASS`; визуально просмотрены desktop/mobile editor, source, files, settings и direct preview screenshots.
- Кодовый коммит: `52c99bae81dd996f35b8b8f31988e3aa4c9dbcb4` (`2026-08-18 23:20:31 +0500`, `Complete v0.17 security reliability and docs`), отправлен в `origin/main`. После него этот context-only update фиксирует точное состояние; следующий functional version — `0.18`.

## Текущее исправление v0.18

- Выполнена полная деобфускация PHP-переменных и параметров: короткие локальные имена получили имена с префиксом метода, alias-константы заменены на смысловые `REQUEST_*`, `SETTING_*`, `PLACEHOLDER_*`, `FILE_*` и `TEMPLATE_*`; фильтры запроса `_server_*`/`_document_root` переименованы в `filter*`. Мёртвый закомментированный install/update-блок удалён. После отдельной runtime-проверки `MyVibeHTMLRequest::filter()` переведён на явную карту ключа запроса к переименованному `filter*`-методу, поэтому deobfuscation не ломает `DOCUMENT_ROOT` и серверные пути.
- Выполнена полная деобфускация JS IIFE: DOM/API алиасы получили имена `*Method`, `*Property`, `*Event`, локальные параметры — имена с префиксом функции, а имена во вложенных функциях сделаны глобально уникальными, чтобы не затенять внешние переменные. Это исправило регрессию, при которой секции настроек переставали открываться.
- Версия синхронно поднята до `0.18` в PHP/JS/CSS/README. Пользовательский `test-page.html` не входит в изменения.
- Проверки: `php -l myvibehtml.php`, `php -l textolite.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `git diff --check`, `sh security-smoke.sh` — PASS. AST-аудит Babel: 0 коротких JS binding/reference; PHP regex-аудит: 0 коротких переменных/alias-объявлений. HTTP smoke локального процесса: JS/CSS/test-page — `200`; защищённые маршруты без cookie — ожидаемый `403`.
- Реальный live-прогон до исправления обнаружил 24 PASS/10 FAIL именно на секциях настроек; после устранения конфликта имён сохранённый UI-fixture проверен в Chromium без авторизации: все 5 секций открываются, JS errors — 0. Визуально просмотрены desktop 1392px и mobile 463px screenshots: панель, dropdown settings, burger, eye, html/text и action-кнопки не имеют нового overflow/смещения. Live URL `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.18` открыт через встроенный браузерный tab.
- Graphify пересобран после структурного изменения: `graphify-out/graph.json` — 99 узлов/303 связи; `diagnose multigraph` — 0 dangling/self-loop/duplicate endpoint edges. `graphify-out/` остаётся локальным артефактом.
- SHA-256 v0.18: `myvibehtml.php` `f9ab02df62e65f3f17a3517cd448f786ec8b0d1ed761d276ade55bd4dd2b44f5`, `myvibehtml.js` `f5a5586ba915d28e947dd47d9dd6cf1b626fd8cb42d671155fed29a797a11542`, `myvibehtml.css` `f7257ce249876359276c56c845100bf6a274dd1b5ee891c3409f6359ad087f5e`, `myvibehtml-theme.css` `6d5821075b9cd31c2af812e361b5cfda39be061120d8b3fa6af8578974ac4d1f`, `myvibehtml-fallback.css` `1e095fc7df4367e7be849ad0d2ad685d8cf7a0f20fed296625dcc3bdc3b7676f`, `security-smoke.sh` `c91f212252f785dbfcb940cb0ed473e562061c5bd777d6a776cdaf7c05d9a738`, `README.md` `d522bcbc227f347caf242995c51b89af40581ed295a9e79ddc1293692d63bfda`.
- Перед кодовым коммитом создан резервный слепок исходных PHP/JS вне репозитория: `/private/tmp/myvibe-pre-deobfuscation-v017/`. Следующий функциональный номер — `0.19`.
- Кодовый коммит: `2daef08ea42afbd65d729c5c477700d9b02dd398` (`2026-08-19 19:37:44 +0500`, `Complete PHP and JavaScript deobfuscation`), отправлен в `origin/main`.

## Текущее исправление v0.19

- Исправлена найденная после v0.18 runtime-несовместимость: переименованные PHP-фильтры больше не ищутся по удалённым именам `_server_*`; `MyVibeHTMLRequest::filter()` использует явную карту `request key → filter method`. Это устраняет ложную проблему `DOCUMENT_ROOT` и сохраняет нормализацию `SCRIPT_FILENAME`, `PHP_SELF`, `SCRIPT_NAME`, `DOCUMENT_ROOT` и IP-полей.
- Версия `0.19` синхронизирована в PHP/JS/CSS/fallback/README; `test-page.html` остаётся пользовательским и не входит в коммит. UI-геометрия не менялась: исправление только runtime-диспетчеризации и cache-busting.
- Повторные проверки: PHP lint для `myvibehtml.php`, `textolite.php`, `dev-router.php` — PASS; `node --check myvibehtml.js`, `git diff --check`, `security-smoke.sh` — PASS; ранее выполненный AST-аудит JS — 0 коротких binding/reference, PHP-аудит — 0 коротких переменных/alias-объявлений. HTTP: JS/CSS/test-page — `200`; auth и `?q=` без cookie — штатный `403 Forbidden`, без ошибки `DOCUMENT_ROOT`.
- Chromium click-through UI-fixture без авторизации: desktop/mobile — `HTTP 200`, `overflow=0`, 5/5 секций Settings открываются, mobile burger открывается и показывает 6 пунктов, JS errors — `0`. Финальные desktop/mobile screenshots просмотрены. Встроенный browser tab открыт на `http://127.0.0.1:8080/?q=myvibe/test-page.html&rev=0.19`.
- SHA-256 v0.19: `myvibehtml.php` `3399207a32515d9f5e06b2aa01764d4ba839454450eb0d5118502af52f375818`, `myvibehtml.js` `b5650e58edab971935c215c03906512e5efc0dc507b924a7a8639886572ce775`, `myvibehtml.css` `ca4284c34c3859ad366bca181e82cc3d1c5b82604a983545621587954bfc6014`, `myvibehtml-theme.css` `6d5821075b9cd31c2af812e361b5cfda39be061120d8b3fa6af8578974ac4d1f`, `myvibehtml-fallback.css` `8fd03008e74a9a13b2a0df42efc7205ff6fd925fdfd3c5a9003e4e831cb240a9`, `README.md` `a4435c47b454824222d6b243844b65241df2707990ee7f60ed7fa4b1909bb98e`.
- Graphify после v0.18 остаётся валидным для текущей структуры: `99` узлов / `303` связи, диагностика без dangling/self-loop/duplicate endpoint edges; v0.19 изменяет только тело существующего метода.
- Кодовый коммит: `29a8dcc86b18f62c5f711c2d740a03005d03aec9` (`2026-08-19T19:49:50+05:00`, `Fix deobfuscated request filter dispatch`) и context-only коммит отправлены в `origin/main`.
- Следующий функциональный номер — `0.20`.

## Переименование Textolite → MyVibeHTML

- Канонические файлы поставки: `myvibehtml.php`, `myvibehtml.js`, `myvibehtml.css`.
- `.htaccess` использует `myvibehtml.php` как `DirectoryIndex` и rewrite target.
- `textolite.php`, `textolite.js`, `textolite.css` оставлены минимальными compatibility aliases для старых прямых URL и asset-ссылок; это единственные оставшиеся локальные имена со старым префиксом.
- Внутренние PHP-классы, runtime prefix, DOM data-атрибуты, CSS selectors/font name и JS product marker переведены на `MyVibeHTML`/`myvibehtml`.
- При переезде исправлена связанная длина prefix-check: `textolite` имел 9 символов, `myvibehtml` — 10; проверка теперь использует `strlen('myvibehtml')`.
- Исторические ссылки на `textolite.ru` сохраняются только в документации/аннотациях ревью; рабочий runtime больше не формирует и не вызывает эти endpoints.

## Graphify

- Создан локальный AST-граф: `graphify-out/graph.json`.
- Команда: `graphify extract . --code-only --no-cluster --force --out .` после безопасного полного пересканирования.
- Результат после текущего security-этапа и исправления router-flow: 91 узел, 283 связи; `diagnose multigraph` не нашёл dangling/self-loop/duplicate endpoint edges. Инкрементальный прогон Graphify однажды потерял PHP-узлы, поэтому после структурных рефакторингов использовать `--force`.
- Индексированы 5 code-файлов: `myvibehtml.php`, `dev-router.php`, `myvibehtml.js` и два PHP/JS compatibility aliases; `.htaccess`, INI и CSS классификатор пропустил.
- PHP разобран до классов и методов. JS-файл представлен в графе как file node без разложенных символов: обфусцированный IIFE не был распознан AST-экстрактором. Поэтому JS-каталог ниже подтверждён чтением исходника, а не только Graphify.
- `graphify-out/` — локальный аналитический артефакт; в поставку/релиз его включать не следует.

## Состав поставки

| Файл | Назначение |
|---|---|
| `myvibehtml.php` | Единственная серверная точка входа: конфигурация, авторизация, роутинг AJAX, чтение/запись файлов, backup/recovery, HTML-шаблоны. |
| `myvibehtml.js` | Клиентский UI, SHA-1, AJAX, файловый менеджер, визуальный/source-редакторы, upload/replace/remove/settings и локальное сохранение состояния редактора. |
| `myvibehtml.css` | Весь UI/CSS в одной минифицированной строке; содержит встроенный WOFF через `data:` URI. |
| `myvibehtml-theme.css` | Локальный читаемый слой компактной graphite/teal/amber UI-темы для auth/panel и context menu; внешних библиотек/шрифтов нет. |
| `myvibehtml-fallback.css` | Последний локальный слой геометрии панели: responsive header, toolbar, dropdowns, menu и единые размеры кнопок. |
| `myvibehtml-icons/` | Локальные MIT SVG-иконки Tabler, скачанные через Iconify API; `README.md` содержит источники и лицензию. |
| `PRODUCT.md` | Стратегический product-контекст для UX/UI ревью. |
| `security-smoke.sh` | Минимальная постоянная проверка синтаксиса и отсутствия внешнего update/install/activate flow/CSP-regression. |
| `test-page.html` | Локальная страница для ручной проверки visual/source editor, responsive layout, inline CSS/JS, SVG, формы, таблицы и файловых операций. Внешних библиотек и URL нет. |
| `dev-router.php` | Router для PHP built-in server: передаёт существующие статические/PHP-файлы напрямую, остальные запросы направляет в `myvibehtml.php`, а `backup`/`ini`/`log` блокирует. |
| `conf.ini` | Состояние и настройки; содержит хеш пароля и session secret, значения в этом документе не раскрываются. |
| `lang.ini` | Локализации `ru`/`en` и текст интерфейса. Есть дублирующийся ключ `restore_settings` в обеих локализациях; значения совпадают. |
| `.htaccess` | `DirectoryIndex`, rewrite на `myvibehtml.php`, запрет `backup`/`ini`/`log`, отключение directory listing и Apache 2.4/2.2 deny-правила. Runtime `conf.ini`/`error.log` по умолчанию находятся вне document root; `.htaccess` остаётся fallback-защитой. |
| `textolite.php`, `textolite.js`, `textolite.css` | Совместимые aliases старых имён; канонические runtime-файлы — `myvibehtml.php`, `myvibehtml.js`, `myvibehtml.css`. |
| `.gitignore` | Не допускает публикацию `conf.ini`, `error.log`, `backup/`, `.DS_Store` и локального `graphify-out/`. |

## Локальный запуск

Для корректной обработки редиректов вида `/?q=index.html` встроенный PHP-сервер нужно запускать с router-файлом:

```sh
php -S 127.0.0.1:8080 -t /Users/diasmazhenov/vibecode/myvibe /Users/diasmazhenov/vibecode/myvibe/dev-router.php
```

После запуска редактор доступен по `http://127.0.0.1:8080/myvibehtml.php`, тестовая страница — по `http://127.0.0.1:8080/test-page.html`. Без router `.htaccess` не выполняется и редирект после авторизации заканчивается `Not Found`.

## Архитектура и поток данных

1. `myvibehtml.php` принимает `GET`, `POST`, `SERVER`, `COOKIE`, `FILES` через `MyVibeHTMLRequest` и применяет только точечные фильтры для части полей.
2. `MyVibeHTMLController` определяет корень/URL, проверяет session cookie или показывает auth flow, затем обслуживает обычную загрузку страницы либо AJAX-команды.
3. Авторизованный клиент вызывает `open`, `save`, `upload`, `replace`, `remove`, `settings`, `recovery`, `scripts`, `logout`, `reload`.
4. Состояние хранится в runtime `conf.ini` вне document root по умолчанию; первый запуск мигрирует legacy-файл и ограничивает права до `0600`. Запись делается в деструкторе `MyVibeHTMLConfig` через `flock`, но чтение-модификация-запись не является атомарной транзакцией.
5. Backup-файлы хранятся в каталоге `backup/`; retention ограничен `recovery_points`.
6. Клиент вставляет серверные HTML-ответы через `innerHTML` и работает с iframe через `document.write`.

## Каталог функций

PHP-классы и публичные/внутренние методы уже получили смысловые имена на первом проходе. В JavaScript функции живут в нескольких `DOMContentLoaded`-замыканиях и повторно используют имена (`dj`, `dk`, `dn`, `ZZ`), поэтому JS-каталог ниже по-прежнему привязан к области видимости и строкам.

### PHP: `MyVibeHTMLRequest` — входные данные и фильтры (`myvibehtml.php:97-221`)

Класс один раз снимает копии `GET/POST/SERVER/COOKIE/FILES`, затем лениво фильтрует значения и кеширует результат.

| Функция | Что делает |
|---|---|
| `__construct()` | Сохраняет суперглобальные массивы во внутреннем состоянии. Не выполняет авторизацию и не меняет входные данные. |
| `getQuery($key)` | Читает параметр `GET`; при наличии одноимённого метода `_key()` пропускает значение через фильтр и кеширует его. |
| `getPost($key = false)` | При ключе читает `POST` и фильтрует его; без ключа возвращает, есть ли вообще POST-данные. |
| `getServer($key)` | Читает `SERVER`, приводит имя ключа к верхнему регистру и применяет специализированный фильтр. |
| `getCookie($key)` | Читает cookie через тот же lazy-cache/filter механизм. |
| `getFile($key)` | Возвращает элемент `FILES`; для upload-данных дополнительной нормализации нет. |
| `filter($value, $key)` | Динамически ищет метод `_{$key}`. Если метода нет, возвращает значение как есть. Это центральная точка trust-boundary для request inputs. |
| `_server_protocol()` | Разрешает только строку вида `HTTP/1.1`. |
| `_server_name()` | Разрешает hostname из латиницы, цифр, `-`, `_`, `.` длиной до 300 символов. |
| `_script_filename()` | Сверяет server path с фактическим `__FILE__`; при несовпадении выбирает безопасный fallback из окружения. |
| `_document_root()` | Вычисляет физический document root из `SCRIPT_FILENAME`, `PHP_SELF`, `SCRIPT_NAME` и `DOCUMENT_ROOT`. Логика основана на строковых заменах, не на `realpath()`. |
| `_php_self()` / `_script_name()` / `_query_string()` | Нормализуют обратные слеши в путях/URL. Полной canonical path-проверки не выполняют. |
| `_remote_addr()` / `_server_addr()` | Передают IP в общий `_ip()`. |
| `_ip()` | Разрешает ограниченный набор символов IP/host-подобного значения. |
| `_sha1()` | Принимает только 40-символьный hex SHA-1. |

### PHP: `MyVibeHTMLResponse` — HTTP-ответ (`myvibehtml.php:224-280`)

Класс накапливает headers, cookies, status и body, а затем отправляет их в `send()`.

| Функция | Что делает |
|---|---|
| `__construct($protocol)` | Сохраняет protocol string и добавляет `Content-type: text/html; charset=utf-8`. |
| `addHeader($header)` | Добавляет произвольный header в очередь. |
| `setStatus($code, $text)` | Добавляет status line: protocol + code + reason phrase. |
| `redirect($url)` | Добавляет `Location` header для redirects/errors. |
| `setCookie($name, $value, $expires, $path, $domain, $secure, $httponly)` | Кеширует параметры cookie для последующей отправки; `send()` добавляет HTTPS-dependent `Secure`, `HttpOnly` и `SameSite=Lax` на PHP 7.3+. |
| `clearCookie($name, $path = false, $domain = false)` | Создаёт просроченный cookie через `setCookie()`. |
| `setBody($body)` | Устанавливает response body. |
| `send()` | Отправляет накопленные headers/cookies, базовые security headers и body. Вызывается в конце request. |

### PHP: `MyVibeHTMLConfig` — конфигурация, шаблоны и сохранение `conf.ini` (`myvibehtml.php:283-438`)

| Функция | Что делает |
|---|---|
| `__construct($scriptDir, $documentRoot)` | Читает `lang.ini` и runtime `conf.ini`, при первом запуске мигрирует legacy-файл из script directory, создаёт HTML-шаблоны и вычисляет физические/URL-базы. |
| `__destruct()` | Если состояние помечено dirty, вызывает `save()` и сохраняет `conf.ini`. Ошибка записи в destructor отдельно не сигнализируется. |
| `getLanguage()` | Возвращает выбранный язык/locale. |
| `getEditorDirectory()` | Возвращает физический каталог, где лежит `myvibehtml.php`. |
| `getSiteUrlBase()` | Возвращает URL-prefix редактора относительно document root. |
| `getSiteRoot()` | Возвращает физический родительский каталог для работы с сайтом. |
| `getSiteUrl()` | Возвращает URL-base сайта, обычно `/` или его подкаталог. |
| `getBackupRoot()` | Возвращает физический каталог `backup/`. |
| `getBackupUrl()` | Возвращает URL каталога `backup/`. |
| `getParentDirectory($path)` | Для пути глубже двух слешей возвращает его parent directory, иначе `/`. Используется для получения base path. |
| `getSetting($key, $section = false)` | Читает настройку из основного INI-сегмента или указанной секции. |
| `setSetting($key, $value, $section = false)` | Меняет настройку и выставляет dirty flag. Значение не экранируется в этом месте. |
| `save()` | Пересобирает текст runtime `conf.ini`, берёт exclusive file lock, переписывает файл и восстанавливает режим `0600`. Это read-modify-write без межпроцессной блокировки чтения. |
| `isWritable()` | Проверяет, доступен ли выбранный runtime `conf.ini` для записи. |
| `getTemplate($template)` | Возвращает HTML-фрагмент из набора шаблонов. |
| `replacePlaceholders($html, $values)` | Прямой `str_ireplace` всех `{placeholder}` на значения. HTML/attribute escaping отсутствует. |
| `localizeTemplate($html, $language)` | Находит оставшиеся `{key}` и подставляет соответствующие строки выбранного языкового сегмента. |
| `translate($key, $language)` | Возвращает одну локализованную строку. |

### PHP: `MyVibeHTMLController` — application controller (`myvibehtml.php:440-1208`)

Это главный серверный объект. Он соединяет `MyVibeHTMLRequest`, `MyVibeHTMLResponse` и `MyVibeHTMLConfig`.

#### Публичные функции

| Функция | Что делает |
|---|---|
| `__construct($input, $response, $config)` | Сохраняет зависимости, выбирает язык через `selectLanguage()` и определяет режим URL-rewrite через `detectRewriteMode()`. |
| `authenticate()` | Главный auth gate. Проверяет session cookie; без валидной сессии обрабатывает login POST, повторяет SHA-1 до заданной сложности, ведёт счёт ошибок по IP и выводит auth page/403. При успешном входе вызывает `dispatch()`. |
| `dispatch()` | Основной router. Разбирает `q`, выбирает файл/директорию и обрабатывает AJAX-команды `save`, `open`, `upload`, `remove`, `replace`, `settings`, `recovery`, `scripts`, `logout`, `reload`. Для обычного открытия выбирает visual/source editor. |
| `renderVisualEditor($file)` | Формирует visual editor page: шаблон iframe, panel, исходный HTML и флаги редактирования. Перед вставкой временно защищает фигурные скобки. |
| `renderSourceEditor($file)` | Формирует source editor page с `contenteditable pre`, режимом подсветки, undo limit и исходным кодом. |
| `renderErrorPage($code)` | Формирует error page с numeric code и локализованным сообщением. |
| `handleException(Exception $error)` | Exception adapter: ставит HTTP status, при наличии message добавляет redirect Location и возвращает локализованный error page. |

#### Внутренние функции контроллера

| Функция | Что делает |
|---|---|
| `selectLanguage()` | Выбирает язык: cookie/config, затем первые две буквы `Accept-Language`, затем fallback. |
| `detectRewriteMode()` | Определяет, включён ли rewrite: настройка `url_rewrite` или эвристика по query/path. |
| `getQueryPrefix()` | Возвращает `?q=` prefix для не-rewrite режима либо пустую строку. |
| `findDefaultFile()` | Ищет стартовый файл: сначала `index.<visual-ext>`, затем первый visual/editable файл. |
| `ensureRewriteBase()` | Читает `.htaccess`, проверяет/исправляет `RewriteBase` и вызывает `writeHtaccess()`. |
| `writeHtaccess($contents)` | Переписывает `.htaccess` с exclusive lock. |
| `createSession()` | Генерирует новый session token, сохраняет его в `conf.ini` и ставит server cookie. |
| `destroySession()` | Очищает session state и удаляет session cookie. |
| `switchMode()` | Проверяет `switch` и token, декодирует base64 source из POST и возвращает его для переключения editor mode. |
| `readHtmlFile($file)` | Читает файл, при marker Windows-1251 конвертирует в UTF-8 и временно заменяет `<script>` markers, чтобы source не исполнился при рендере. |
| `isAllowedExtension($extension)` | Проверяет extension по `allowed_ext`; пустой список трактуется как разрешить всё. |
| `renderPanel($file)` | Собирает данные верхней панели: file list, upload limits, settings, locale, backup state и system metadata. |
| `renderFileType($fileOrType)` | Выбирает compact template для visual editor или source editor по extension. |
| `renderLanguageList()` | Строит HTML radio list доступных языков и отмечает текущий язык. |
| `parseSize($iniSize)` | Переводит `K/M/G`-строку из `php.ini` в байты. |
| `renderSiteStatus()` | Сканирует служебные `myvibehtml*`/`index*` файлы, вычисляет metadata и определяет, показывать ли расширенные настройки/состояние установки. |
| `renderFileList($urlPath)` | Читает каталог, разделяет dirs/files, рассчитывает размеры, сортирует записи, создаёт HTML file-manager fragments и отмечает текущий каталог. Путь формируется конкатенацией без canonical root guard. |
| `sortEntries($entries)` | Сортирует список записей по имени, сохраняя исходные metadata. Реализован как простой O(n²)-подобный двойной проход. |
| `getDirectorySize($urlPath)` | Возвращает cached folder size из config; при отсутствии вызывает `calculateDirectorySizes()` и сериализует результат в cache. |
| `calculateDirectorySizes($urlPath)` | Рекурсивно считает размеры файлов/каталогов, пропуская symlink directories. Pagination/depth/time limit нет. |
| `createBackup($relativePath)` | Создаёт recovery point перед изменением: создаёт date directory, проверяет дубликат backup, копирует старый файл или создаёт deletion marker. |
| `pruneBackups($backupRoot, $limit)` | Удаляет самые старые backup directories, если их больше `recovery_points`. |
| `normalizeImageFilename($dir, $filename)` | При включённом `name_correction` заменяет небезопасные символы в имени, удаляет `%/#` и подбирает суффикс при конфликте файла. Не является полноценной path boundary-проверкой. |

#### Команды внутри `MyVibeHTMLController::dispatch()`

- `save`: проверяет token, декодирует source, восстанавливает `<script>` markers, вызывает `createBackup()` и перезаписывает файл через `flock`.
- `open`: декодирует путь и вызывает `renderFileList()` для directory listing.
- `upload`: проверяет token, перебирает `FILES`, проверяет extension и перемещает каждый файл в выбранный каталог.
- `remove`: проверяет token, вызывает `createBackup()` и удаляет файл.
- `replace`: проверяет token, проверяет связь host/path, вызывает `normalizeImageFilename()` и заменяет image file.
- `settings`: меняет password hash, language cookie, `default_file` и numeric settings.
- `recovery`: восстанавливает backup-каталог, копируя/удаляя marker-файлы.
- `scripts`: отключает site scripts через config flag.
- обычный режим: открывает существующий visual/source file или направляет на default/start file.

### JavaScript: общие функции IIFE (`myvibehtml.js:144-516`)

| Функция | Что делает |
|---|---|
| `writeCookie(name, value, minutes, path)` | Записывает JS cookie через `document.cookie`; при наличии minutes задаёт expiry, при наличии path задаёт URL path. |
| `removeCookie(name, path)` | Удаляет cookie через `writeCookie(..., -1, ...)`. |
| `readCookie(name)` | Читает cookie регулярным выражением. Значение не декодируется отдельно. |
| `animateValue(node, from, to, duration, easing, step, done)` | Общий animation loop на `setInterval(10ms)`; хранит timer ids на node и вызывает step/done. |
| `fadeIn(node, done)` / `fadeOut(node, done)` | Fade-in и fade-out через `animateValue()`, меняют opacity/display. |
| `slideDown(node, done)` / `slideUp(node, done)` | Анимации раскрытия/сворачивания элемента по высоте/ширине/отступу. |
| `showPanel(node, done)` / `hidePanel(node, done)` | Более простые slide-down/slide-up transitions для панелей. |
| `utf8Encode(text)` | Вручную кодирует Unicode text в UTF-8 bytes для собственного SHA-1. |
| `sha1(text)` | Полностью встроенная реализация SHA-1; используется для password proof и token generation. |
| `base64Encode(text)` | Кодирует URL-encoded UTF-8 строку в base64-представление для POST source. |
| `ajaxRequest(body, ok, notFound, timeout, progress, externalUrl)` | Общий XMLHttpRequest POST только на текущий редактор. Если передан `externalUrl`, запрос отклоняется через timeout/error callback и не создаёт внешний network request. |
| `generateToken()` | Генерирует client token из timestamp + random и прогоняет через SHA-1. |
| `formatBytes(bytes)` | Форматирует размер в KB/MB/GB/TB. |

### JavaScript: auth page `#a` (`myvibehtml.js:517-630`)

| Функция | Что делает |
|---|---|
| `togglePasswordVisibility()` | Переключает password input между `password` и `text`, меняет icon/title. |
| `handleLoginKeydown(event)` | По Enter снимает key listener и запускает login. |
| `updateLoginButton()` | Включает/выключает Login button в зависимости от непустого password. |
| `startLogin()` | Начинает login UI state: блокирует input/button, показывает hashing progress и запускает `hashPassword()`. |
| `hashPassword(value, rounds, interval, done)` | Выполняет client-side SHA-1 stretching пакетами через `setInterval`, чтобы не блокировать UI полностью. |
| `submitLogin(hash)` | Отправляет `password=<hash>` через `ajaxRequest()`, при успехе ставит auth cookie и reload/redirect, при ошибке обновляет счётчик попыток. |

### JavaScript: visual editor и iframe (`myvibehtml.js:631-2287`)

Главная функция этого замыкания — `initializeVisualEditor()`: она поднимает iframe editor, связывает toolbar с выбранным DOM-узлом, навешивает keyboard/mouse/drag handlers и использует `serializedSource` как snapshot исходника.

#### Управление DOM/выделением

| Функция | Что делает |
|---|---|
| `go(root)` | Рекурсивно собирает непустые text nodes, пропуская `script` и `style`. |
| `gp(node)` | Нормализует caret/text nodes, особенно для Opera; объединяет соседние фрагменты и восстанавливает selection. |
| `gq(root)` | Склеивает соседние `[data-myvibehtml-string]` блоки и переносит сохранённый caret marker. |
| `gr()` | Сравнивает текущий iframe DOM и attributes с исходным snapshot; включает/отключает Save. |
| `gs(node, class)` / `gt(node, class)` / `gu(node, class)` | Добавляет, удаляет и проверяет CSS class без classList. |
| `gv()` | Сериализует текущее visual DOM в `serializedSource`, синхронизирует текст/attributes/image links и возвращает HTML через `hp()`. |
| `gw(text)` | Преобразует HTML для безопасного показа в source/editor text area: защищает entities, `<`, `>`, `&`, `&nbsp;` и placeholder markers. |
| `gx(node)` | Перестраивает breadcrumb/tree toolbar, выбирает node и обновляет attribute panel. |
| `gy(node)` | Включает/выключает кнопки перехода к parent/previous/next child и показывает ошибки для недоступного элемента. |
| `gz()` | Сбрасывает текущий focus marker, attribute controls и editor selection. |
| `gA()` | Закрывает/прячет attribute editor и снимает его event listener. |
| `gB(node)` | Поднимается по ancestor chain, строит редактируемый список attributes и отслеживает изменения. |
| `gC(event)` | Закрывает attribute editor после нужного mouse event. |
| `gD(node)` | Находит видимые структурные блоки вокруг выбранного node для breadcrumb navigation. |
| `getContextNode(target)` / `getSectionNode(node)` / `getBlockNode(node)` | Определяют объект под правой кнопкой и ближайшие структурные section/block узлы. |
| `createContextMenu()` / `showContextMenu(event)` / `hideContextMenu()` | Создают доступное DOM-меню действий, позиционируют его относительно iframe и закрывают по выбору/Escape/клику снаружи. |
| `clearContextSelection()` / `selectContextNode(node, kind)` | Снимают предыдущую метку и подсвечивают выбранный element/section/block в iframe. |
| `gE()` | Обрабатывает клик по breadcrumb: меняет выбранный элемент и перестраивает controls. |
| `gF()` | Переводит выбранный element в editable copy, навешивает drag/drop и создаёт визуальный focus wrapper. |
| `gG()` / `gH()` | Перемещают выбранный блок к предыдущему/следующему sibling, обновляя source offsets и DOM. |
| `gI()` | Удаляет выбранный блок и синхронизирует serialized source. |

#### Поиск позиций в serialized HTML

| Функция | Что делает |
|---|---|
| `gJ(node)` / `gK(node)` | Вычисляют начало/конец выбранного элемента в исходной строке с учётом повторяющихся text markers. |
| `gL(node)` | Находит offset для предыдущего элемента/границы при вычислении диапазона. |
| `gM(node)` / `gN(node)` | Вычисляют позиции повторяющихся text blocks до и после выбранного элемента. |
| `gO(node)` / `gP(node)` | Вычисляют диапазон конкретного `img[src]` среди одинаковых изображений. |
| `gQ(node)` / `gR(node)` | Вычисляют диапазон generic `iframe/object/video/audio` или другого tag с attributes. |
| `gS(node)` | Возвращает сохранённое исходное значение `B` либо текущее `innerHTML`. |
| `gT(marker)` | Делит source по marker; при расхождении с HTML после sanitization один раз пересчитывает `di`. |
| `gU(node)` | Получает `outerHTML`, удаляет head/comments/protected scripts/styles и оставляет editable body fragment. |

#### Events, drag/drop и сохранение visual editor

| Функция | Что делает |
|---|---|
| `gV()` | Подключает key/mouse/blur listeners к editable text node, сохраняет исходное значение и передаёт control в `gW()`. |
| `gW()` | Очищает старое выделение и открывает toolbar для текущего node через `gx()`. |
| `gX(event)` | Делегирует click/mousedown в iframe и решает, нужно ли отменить browser default либо открыть выбранный node. |
| `gY(event)` | Убирает caret placeholder после выхода из edit/focus области. |
| `gZ(event)` | Обрабатывает Enter и Ctrl+S; при Ctrl+S вызывает `gv()` и `saveEditorContent()` для сохранения. |
| `hb(event)` | Сбрасывает внутренний Ctrl-state. |
| `hc(event)` | Глушит mouse event, чтобы iframe selection не конфликтовал с editor controls. |
| `hd()` / `he()` | Выставляют и снимают `data-myvibehtml-dragover`. |
| `hf(event)` | Обрабатывает drop image/file. Валидирует размер, отправляет `replace`, обновляет `src/srcset`, при необходимости заменяет href ближайшей ссылки и перерисовывает iframe. Внутри `ja()` ищет ближайший anchor, `jb()` проверяет совместимость путей. |
| `hg()` | Инициализирует iframe: оборачивает текст в `<edit>`, помечает editable nodes, создаёт proxy для media elements и подключает handlers. |
| `hh()` | Подгоняет высоту iframe/body под доступное окно. |
| `hi(html)` | Собирает iframe document, вставляет `<base>`, убирает scripts/styles/links согласно настройкам и возвращает готовый HTML. |
| `hj(tag, attr, value)` | Ищет в serialized source HTML tags с конкретным attribute value. |
| `hk(tag, attr, value)` | Ищет соответствующие реальные DOM nodes в iframe. |
| `hl(source, fragment)` | Вычисляет позицию открытия элемента в source по структуре tags. |
| `hm(source, fragment)` | Вычисляет позицию закрывающего элемента/конца диапазона. |
| `hn(text)` | Собирает все editable nodes с указанным текстом для disambiguation. |
| `ho(html)` | Убирает служебные markers и временно выносит head/comments/scripts/styles в массивы `hp.o/p/q/r`. |
| `hp(html)` | Возвращает ранее вынесенные head/comments/scripts/styles на места и восстанавливает PHP markers. |
| `hq()` | Включает/выключает site scripts в preview через AJAX `scripts=1`, cookie state и reload. |
| `saveEditorContent(source)` | Отправляет visual/source HTML через `save`, показывает progress/error, после успеха обновляет iframe и file list. |
| `switchEditorMode(source)` | Создаёт скрытую POST-form для переключения visual/source mode и передаёт source/token. |

### JavaScript: source editor (`myvibehtml.js:2289-2586`)

`initializeSourceEditor()` — самостоятельная инициализация `<pre contenteditable>` и подсветки. Имена ниже локальны этому замыканию и не совпадают с file-manager функциями.

| Функция | Что делает |
|---|---|
| `Q(text)` | Кодирует HTML/source в отображаемый editable markup, защищает script markers и переносы строк. |
| `R(html)` | Превращает строки/`<br>` в line `<div>` blocks; учитывает Opera. |
| `S(html)` | Обратно превращает line blocks в plain source: убирает caret/tags, восстанавливает `<`, `>`, `&`, scripts. |
| `T(value)` | Подсвечивает source в зависимости от file type: HTML/XML, CSS, JS или PHP. |
| `U()` | Перерисовывает номера строк в `<ol>`. |
| `V()` | Сравнивает текущий text с hash/snapshot, восстанавливает caret и запускает highlighting/save state. |
| `W()` | Перерисовывает syntax highlighting текущего source. |
| `X()` | Возвращает текущий source только когда hostname разрешён для editor logic. |
| `Y()` | Вставляет tab/selection marker в caret position. |
| `Z(event)` | Debounce для input/keydown; после паузы вызывает `V()`. |
| `hb(event)` / `hc(event)` | Обрабатывают Ctrl-state и mouse selection для source editor. |
| `hd()` / `he()` | Подключают/отключают source-editor keyboard/mouse listeners. |
| `hf()` | Пересчитывает высоту source editor/body. |
| `hg(html)` | Удаляет focus markers перед сохранением/переключением. |
| `dl(source)` | Общий save request source editor. При успехе очищает file list, обновляет iframe для PHP/HTML и меняет status. |
| `dm(source)` | Переключает между source/visual editor через form POST `switch`. |

#### Update/install flow внутри editor scope

| Функция | Что делает |
|---|---|
| `checkForUpdates()` | Сохраняет локальное состояние редактора и сразу завершает работу; внешняя проверка обновлений отключена. |
| `handleUpdateResult(value)` | Legacy-compatible no-op; внешний ответ больше не разбирается и не отображается. |
| `installUpdate()` | Legacy-compatible no-op; install payload не запрашивается и не отправляется. |
| `checkInstallation()` | Legacy-compatible no-op; внешний activation/install flow не запускается. |

### JavaScript: file manager (`myvibehtml.js:2837-3230`)

| Функция | Что делает |
|---|---|
| `revealCurrentPath(node)` | Рекурсивно проходит дерево каталогов к текущему URL и раскрывает нужные ветки. |
| `revealCurrentPath` callback | После lazy-open дочернего каталога находит следующий breadcrumb/current link. |
| `openDirectory()` | Отправляет `open=<path>`, вставляет HTML directory listing через `innerHTML`, декорирует элементы и обновляет folder size. |
| `expandDirectory()` | Раскрывает выбранную директорию с анимацией `slideDown()`, затем вызывает lazy continuation. |
| `collapseDirectory()` | Сворачивает выбранную директорию с `slideUp()`. |
| `initializeFileEntry(entry)` | Инициализирует одну file/dir entry: размер, дату, upload/delete/recovery/open action, target blank для внешних links. |
| `renderFileSize(entry)` | Форматирует byte size из `data-myvibehtml-size` через `formatBytes()` и помечает крупные entries. |
| `renderFileDate(entry)` | Форматирует Unix timestamp в `DD.MM.YY HH:MM` и добавляет class для свежих файлов. |
| `padDatePart(number)` | Добавляет ведущий ноль к числам даты. |
| `queueUploads()` | Открывает hidden multi-file picker, проверяет browser/server limits и добавляет выбранные forms в upload queue. |
| `uploadFile(form)` | Отправляет одну upload form с token, вставляет ответ, обновляет directory tree/size и сообщает `X-*` статус. |
| `processUploadQueue(status)` | Состояние upload queue: последовательно вызывает `uploadFile`, агрегирует progress и выбирает final error/success status. |
| `deleteFile()` | Подтверждает удаление и отправляет `remove=<path>`; обновляет DOM, URL и cached folder size. |
| `recoverBackup()` | Подтверждает recovery и отправляет `recovery=<backup-path>`; после успеха reload текущей страницы. |

### JavaScript: settings panel (`myvibehtml.js:3251-3531`)

Эти функции работают только при наличии `#g`. Имена `dn`, `ZZ`, `dp`, `dq`, `dr`, `ds`, `dt`, `du` здесь локальны и не связаны с одноимёнными функциями file manager.

| Функция | Что делает |
|---|---|
| `togglePasswordField()` | Переключает видимость нового password input. |
| `validateSettings()` | Валидирует numeric/path settings, сравнивает текущие значения с baseline, включает Save и добавляет recovery action при изменениях. |
| `handleSettingsKeydown(event)` | По Enter запускает сохранение settings. |
| `saveSettings()` | Снимает listeners, блокирует Save, хеширует новый password через `hashSettingsPassword()` и отправляет `settings[...]` через AJAX. |
| `toggleSettingsSection(event)` | Открывает/закрывает fieldset с анимацией `showPanel/hidePanel`, сохраняет открытый section в cookie. |
| `blurSettingsControls()` | Создаёт/фокусирует скрытый input, чтобы снять focus с controls. |
| `hashSettingsPassword(password, rounds, batch, done)` | Выполняет пакетный SHA-1 stretching password, не блокируя UI одним длинным циклом. |
| `restoreSettingsDefaults()` | Подтягивает значения из `data-aa` defaults/checkboxes, снимает unsaved state и повторно запускает `validateSettings()`. |
| `submitSettings(message)` | Формирует полный `settings[...]` request: password, numeric flags, language и token; обрабатывает успех/ошибку. |
| `applySavedSettings()` | После успешного ответа обновляет baseline значений, cookie flags и state кнопки Save. |
| `restoreSettingsUi()` | После ошибки возвращает listeners и разблокирует UI без фиксации новых значений. |
| `initializeSettings()` | Однократно инициализирует settings controls, defaults, accordion handlers и запоминает активную секцию. |

#### Анонимные callback-функции

В исходнике примерно 329 вхождений `function(`, включая handlers и callbacks. Они не являются отдельными API-функциями: это локальные продолжения перечисленных выше операций. Основные группы:

- `ajaxRequest()`: `onreadystatechange`, timeout и upload-progress callbacks.
- auth `submitLogin()`: success/404/timeout callbacks.
- visual editor: handlers `click`, `keydown`, `keyup`, `mousemove`, `dragover`, `drop`, `load` для iframe/media/edit nodes.
- source editor: line redraw/highlight debounce и save success/error callbacks.
- file manager: XHR success/error/progress, picker `change`, delete/recovery confirmations.
- settings: Enter/change/click handlers и save success/error callbacks.

То есть полный исполняемый поток читается как `entry function → helper → AJAX callback`, а не как публичный набор экспортируемых функций: IIFE ничего не экспортирует в `window`. Переименование helper-слоя не меняет строковые data-ключи `data-aa`…`data-aq`, которые являются частью протокола UI.

## Внешние зависимости

### Библиотеки

Явных внешних библиотек не найдено:

- нет `package.json`/Composer-манифеста;
- нет `import`, `require`, CDN, `cdnjs`, `jsdelivr`, `unpkg`, jQuery или других vendor-файлов;
- SHA-1, UI и transport написаны внутри `myvibehtml.js`;
- шрифт встроен в `myvibehtml.css` как base64 WOFF.

### Внешние сервисы MyVibeHTML

Внешний update/install/activate flow удалён из рабочего runtime в версии `0.03`. `ajaxRequest()` отклоняет любой внешний URL, legacy-функции обновления заменены на no-op, а локальная проверка сохраняет состояние редактора. Логотип и просмотр сайта используют локальный `{site_preview_url}`.

Исторические endpoints, которые были обнаружены при ревью и больше не вызываются:

- https://textolite.ru/
- https://textolite.ru/update/
- https://textolite.ru/install/
- https://textolite.ru/activate/

## Findings

### Исправлено — canonical path guard для файловых операций

`open`, `save`, `upload`, `remove`, `replace`, `recovery`, `renderFileList()`, `calculateDirectorySizes()` и `createBackup()` теперь используют нормализацию относительного пути, `realpath`-проверку принадлежности document root и запрет symlink escape. Upload/replace имена проходят `basename` после URL-decoding; абсолютные URL принимаются только для текущего host. Релевантные места: `myvibehtml.php:458-526`, `myvibehtml.php:586-749`, `myvibehtml.php:1104-1199`, `myvibehtml.php:1201-1285`.

Изолированный harness подтвердил блокировку `../`, encoded traversal, foreign host, symlink escape и безопасное создание нового in-root upload path. TOCTOU-защита на уровне файловой системы и production Apache/Nginx acceptance ещё не проверены.

### P1 — XSS через серверный HTML файлового менеджера — частично исправлено

Динамические имена файлов, URL, metadata, `default_file`, language values и системные URL проходят `escapeHtml()` перед HTML-шаблонами: `myvibehtml.php:529`, `myvibehtml.php:992-1170`. Для update flow внешняя ветка удалена, а локальная логика сохраняет состояние редактора. Временный harness и браузерный аудит подтвердили, что опасное имя файла и вредный `default_file` не попадают в output как markup. Общий `replacePlaceholders()` по-прежнему context-blind, а серверный HTML-response файлового менеджера вставляется через `innerHTML`; его входные имя/URL/metadata экранированы, но переход на DOM construction остаётся отдельной задачей.

### P1 — `conf.ini` содержит секреты и защищён только `.htaccess` — исправлено по умолчанию

Runtime `conf.ini` и `error.log` теперь создаются в скрытом каталоге с хешем document root за его пределами, каталог получает `0700`, конфигурация — `0600`, а legacy `conf.ini` мигрируется и удаляется после успешного копирования. Если родительский каталог document root недоступен для записи, остаётся совместимый fallback к legacy-файлу; в этом режиме защита опирается на `.htaccess`, поэтому для Nginx нужно отдельно запретить `*.ini`, `*.log` и `/backup/`.

### P1 — заявлена поддержка PHP 5.2, но код использует short array syntax

В начале `myvibehtml.php` разрешается PHP `>=5.2`, однако `[]` используется начиная с `myvibehtml.php:463` и далее. PHP 5.2/5.3 такой файл не распарсят. Нужно либо поднять минимальную версию, либо переписать синтаксис; фактическую поддерживаемую версию следует зафиксировать.

### P2 — update/install supply-chain flow отключён

Внешний update/install/activate flow отключён в runtime: нет outbound URL, `withCredentials` или разбора внешнего ответа. Криптографическая проверка удалённого payload больше не требуется для локальной сборки; если обновления будут возвращены, нужен отдельный подписанный manifest/protocol до включения network flow.

### P2 — cookie/security headers — частично исправлено

Ответы теперь добавляют `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` и `Content-Security-Policy-Report-Only` (`myvibehtml.php:251-257`). На PHP 7.3+ серверные cookies получают `Secure` при HTTPS, `HttpOnly` и `SameSite=Lax`; на старом PHP сохраняется legacy API без SameSite. JS cookies по-прежнему создаются через `document.cookie`; CSP пока не блокирует контент, чтобы сначала собрать нарушения для inline/template/iframe-потоков.

### P2 — настройки и состояние пишутся в INI без полноценного escaping/валидации

`MyVibeHTMLConfig::save()` сериализует значения в `conf.ini` напрямую (`myvibehtml.php:390-405`). Часть полей валидируется, но `password` и отдельные строковые значения проходят отдельным путём; формат INI легко повреждается нестандартным вводом. Запись также выполняет полную read-modify-write операцию, поэтому параллельные login/settings/recovery-запросы могут терять изменения.

### P2 — нет ограничений на объём файлового обхода

Размеры каталогов вычисляются рекурсивно (`myvibehtml.php:1180-1199`), файловые списки формируются целиком (`myvibehtml.php:1104-1155`), без pagination/depth/time budget. На большом сайте это может блокировать PHP worker и браузер.

### P2 — качество и сопровождение

- часть локальных PHP-параметров, alias-констант и JS-функций всё ещё использует короткие имена;
- CSS — одна строка без line breaks;
- отсутствуют тесты и CI;
- нет схемы конфигурации или явной allowlist команд;
- глобальные имена классов `a`, `b`, `c`, `d` и константы могут конфликтовать при include в общем PHP-процессе.

## Что проверено и что нет

Проверено локально: структура файлов, PHP/JS/CSS/INI/Apache-конфигурация, роутинг запросов, авторизация, cookies, file operations, backup/recovery, upload/update paths, runtime migration harness, синтаксис PHP/JS, наличие внешних URL и package manifests.

Не проверено: фактическое поведение в Apache/Nginx, HTTPS/cookie policy в браузере, реальные stored-XSS сценарии, TOCTOU-поведение при гонках и совместимость с заявленными старыми PHP/browser версиями. Удалённый update/install/activate flow намеренно не проверяется: он отключён.

## Приоритет следующей работы

1. Выполнено в `0.17`: security headers, safe unserialize, symlink/path guards, atomic config/site/backup writes и DOM construction для server file-list response.
2. Выполнено в `0.17`: production Nginx example, Apache syntax check и статические deny-rule checks; реальный Nginx acceptance требует Linux/host environment с PHP-FPM.
3. Выполнено в `0.17`: auth/XSS/backup/path checks расширены в `security-smoke.sh`; CSP остаётся Report-Only до отдельного аудита пользовательских script/style requirements.
4. Выполнено в `0.17`: русский README, screenshots, function reference и setup/troubleshooting guide.
5. Следующий этап: подписанный update-протокол и enforcing CSP — только отдельными задачами с явными требованиями сайта и production acceptance.

## Текущее исправление v0.22

- CSS-инспектор теперь собирает поля после вставки формы в DOM, поэтому при открытии показывает фактические computed values выбранного узла: 13 свойств (`display`, размеры, отступы, типографика и оформление). Значения берутся из `ownerDocument.defaultView.getComputedStyle()`, а нестандартные значения select добавляются в текущий список опций.
- В context menu добавлено локализованное действие `Заменить изображение/иконку`. Для `<img>` переиспользуется существующий серверный upload/replace flow; для inline `<svg>` используется локальный file picker, SVG проходит DOMParser/XMLSerializer sanitizer, удаляются script/foreignObject/iframe/object/embed/style и опасные event/URL/style-атрибуты, затем source и Save state синхронизируются. Клик по дочернему `path`/`circle` поднимается к ближайшему SVG.
- Desktop CSS-инспектор переведён в fixed bottom bar: `left:0; right:0; bottom:0`, горизонтальная форма с внутренним overflow-x; mobile сохраняет bottom sheet с безопасными inset и вертикальными полями. Оба theme-слоя синхронизированы.
- Версия runtime/cache-busting повышена до `0.22`; обновлены README, deployment/function catalog и regression assertions. Пользовательский `test-page.html` оставлен вне коммита.
- Проверки v0.22: `node --check myvibehtml.js`, `php -l myvibehtml.php`, `git diff --check`, `security-smoke.sh`, HTTP `tests/regression.sh` против `127.0.0.1:8080` — PASS. Headless Chromium smoke в статическом fixture: CSS-поля совпали с computed style; desktop/mobile geometry, SVG sanitizer/replacement, Save enablement, IMG file picker, context menu и отсутствие page errors — PASS. Финальные desktop/mobile screenshots просмотрены визуально.
- Functional commit: `206b4ffff9c91f41b5aac31237bd1bdcade9b98d` (`2026-08-19T21:53:46+05:00`, `Add CSS values and media replacement inspector`). Graphify после стабилизации обновлён локально: `210` узлов, `412` связей; multigraph diagnostics — без missing/dangling/self-loop/duplicate edges. Следующий функциональный номер — `0.23`.

## Текущее исправление v0.23

- Backup больше не создаётся в каталоге редактора: `MyVibeHTMLConfig::getBackupRoot()` использует изолированный runtime-каталог `.myvibehtml-<hash>/backup/` рядом с document root. При невозможности создать runtime backup операция изменения завершается ошибкой, а не откатывается к публичной папке.
- Recovery принимает только внутренний `myvibehtml://backup/`-идентификатор и проверяет его containment внутри runtime-каталога; публичный URL backup не формируется.
- Nginx rule исправлена с `^/backup` на `/backup`, поэтому закрывает backup и при установке плагина во вложенный `/myvibe`. Apache и локальный router уже блокируют вложенные backup/dotfiles/INI/log paths.
- Версия runtime/cache-busting поднята до `0.23`; `test-page.html` и локальный lock-файл пользователя не изменялись.
- Проверки v0.23: `php -l myvibehtml.php`, `node --check myvibehtml.js`, `sh security-smoke.sh`, `MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh`, `git diff --check` — PASS. Regression отдельно проверяет `/myvibe/backup/...` → `403`.
- Следующий функциональный номер — `0.24`; commit создаётся после фиксации этого context-состояния.

## Текущее исправление v0.24

- Исходник HTML больше не помещается в `script-template` как обычный текст и не защищается регистрозависимой заменой `<script>`. PHP передаёт его как Base64 с маркером `data-encoding="base64"`, а JS декодирует через `textContent`; смешанный регистр и literal `</SCRIPT>` больше не создают template-breakout.
- Сохранение и переключение `html/text` используют URL-safe Base64 (`+`/`/`/`=` нормализуются без подмены букв исходника), а сервер валидирует алфавит и декодирует строгим `base64_decode(..., true)`. Старые `str_replace`-восстановления script-тегов удалены из write/switch путей.
- `site_scripts` по умолчанию получает `0` при отсутствии настройки. Существующее явное значение сохраняется для обратной совместимости; русское и английское описание предупреждают о same-origin риске включения скриптов сайта.
- Версия runtime/cache-busting поднята до `0.24`; пользовательский `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Проверки v0.24: `php -l myvibehtml.php`, `node --check myvibehtml.js`, `sh security-smoke.sh`, `git diff --check` — PASS; полный HTTP regression через локальный `127.0.0.1:8080` — `regression: PASS`.
- Следующий функциональный номер — `0.25`: password_hash/random_bytes/hash_equals и миграция старой авторизации.

## Текущее исправление v0.25

- Авторизация переведена на `password_hash()`/`password_verify()`; старый SHA-1-формат проверяется отдельной legacy-веткой только для успешной миграции в новый хеш. Клиентский SHA-1 пароля и ограничение 14 символами удалены из рабочего потока; поле допускает до 128 символов.
- Session token на сервере создаётся через `random_bytes(32)` и `bin2hex()`. CSRF-проверка централизована в `isValidPostToken()` и сравнивает cookie/request через `hash_equals()`; это покрывает save/upload/remove/replace/settings/recovery/scripts и switch mode.
- Браузер генерирует CSRF-токены через `crypto.getRandomValues()`, а пароль передаёт URL-кодированным только для серверной проверки. Production должен работать по HTTPS; README теперь явно описывает это требование.
- Версия runtime/cache-busting поднята до `0.25`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Проверки v0.25: `php -l myvibehtml.php`, `node --check myvibehtml.js`, `sh security-smoke.sh`, `git diff --check` и HTTP regression через `127.0.0.1:8080` — PASS.
- Следующий функциональный номер — `0.26`: синхронная фиксация конфигурации и атомарное восстановление.

## Текущее исправление v0.26

- `MyVibeHTMLConfig` теперь удерживает отдельный lock на всём request-cycle после выбора runtime-конфигурации: чтение, изменение и запись сериализованы. Публичный `commit()` вызывается до `Response::send()`, поэтому ошибка сохранения получает HTTP 500, а destructor остаётся только безопасным fallback.
- INI-значения сериализуются в кавычках с escaping `\\`, `"`, CR/LF; значения с `;`, `#`, кавычками и переносами не обрезаются при следующем `parse_ini_file()`. Атомарная запись сохраняется.
- Recovery заменён staged transaction: все backup-файлы и rollback-копии подготавливаются в каталогах назначения, затем применяются через rename. При сбое уже применённые файлы восстанавливаются; backup удаляется только после успешного commit.
- Версия runtime/cache-busting поднята до `0.26`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Проверки v0.26: PHP/JS lint, `security-smoke.sh`, `git diff --check`, INI-encoding self-check и HTTP regression — PASS.
- Следующий функциональный номер — `0.27`: устойчивый контракт DOM ↔ HTML source-map и тесты.

## Текущее исправление v0.27

- Добавлен локальный `myvibehtml-source-map.js` без зависимостей: scanner учитывает кавычки в атрибутах, пропускает комментарии/declaration и raw-текст `script/style`, а `build()` связывает opening-tag с DOM-узлом через внутреннюю map-запись без служебных атрибутов в пользовательском HTML.
- CSS-инспектор и inline-SVG replacement используют source-map перед legacy range fallback; после каждой записи source карта пересобирается, поэтому изменение длины атрибута не оставляет старые диапазоны.
- Добавлены [`docs/source-map.md`](docs/source-map.md) и `tests/source-map.test.js` с проверками `>` внутри кавычек, повторяющихся тегов, raw-script и точной замены opening-tag. Source-map загружается локально перед основным JS.
- Версия runtime/cache-busting поднята до `0.27`; пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в коммит.
- Проверки v0.27: PHP/JS lint, `node --test tests/source-map.test.js`, `sh security-smoke.sh`, `git diff --check` и HTTP regression с проверкой нового asset — PASS. Встроенный браузерный tab в этой сессии не автоматизируется отдельным headless-инструментом, поэтому live HTTP подтверждён, а screenshot acceptance оставлен как следующий обязательный QA-шаг.
- Следующий функциональный номер — `0.28`: семантическая деобфускация и удаление dead code.

## Архив предыдущего исправления v0.20

- Добавлено расширенное контекстное меню visual editor: после выбора element/section/block доступны `Клонировать`, `Переместить вверх`, `Переместить вниз`, `Удалить`. Контекстное меню переиспользует callbacks нижней toolbar, поэтому бизнес-логика не дублируется.
- Статусные узлы панели, файлового менеджера и настроек переведены с `innerHTML` на `textContent`. Два старых status-format шаблона с `<a>` упрощены до безопасного plain text. Штатный `innerHTML` source/visual HTML-поток не переписывался.
- Добавлены `tests/regression.sh`, `docs/function-catalog.md` и `docs/deployment.md`; README обновлён до v0.20 и ссылается на новые документы. Тест проверяет версию, явную карту `REQUEST_DOCUMENT_ROOT`, 200/403 маршруты, статические assets и отсутствие утечки `DOCUMENT_ROOT` в unauthenticated response.
- Проверено перед коммитом: `php -l` для `myvibehtml.php`, `textolite.php`, `dev-router.php`; `node --check myvibehtml.js`; `security-smoke.sh`; `tests/regression.sh` против `http://127.0.0.1:8080` — PASS; `git diff --check` — PASS.
- Headless Chromium static fixture: 28/28 PASS на 1392x900 и 375x812. Проверены HTTP 200, overflow, все 5 секций settings, eye/burger, правое выравнивание action-группы, контекстное меню с divider и 4 действия, отсутствие JS errors. Финальные desktop/mobile screenshots просмотрены.
- Graphify пересобран после изменения JS/PHP: `102` узла, `306` связей; `diagnose multigraph` — `0` missing/dangling/self-loop/duplicate endpoint edges. `graphify-out/` остаётся локальным артефактом.
- Functional version — `0.20`; следующий функциональный номер — `0.21`. Кодовый commit: `8bd9652b7b8f4de3ddc1b0a665cef9c140d90da6` (`2026-08-19T20:14:40+05:00`). Пользовательский `test-page.html` остаётся изменённым локально и не входит в commit.
- SHA-256 v0.20: `myvibehtml.php` `1be13d42a5b3970e145560c971f58982ca3836b767d11a21ec7c54f8b0af7cbe`, `myvibehtml.js` `aad352f8231f8e34b61c7c89a74ed0a93f300f768e33c27d05e6483803f559b3`, `myvibehtml.css` `56dcb3cb5265f6c664c3bdb18051933e1386f19403599f45e7017b81b84e939d`, `myvibehtml-theme.css` `90858bfbd62fb6669e8a68db0a38c6013ac7cebc801a70bd4ebdc5697398f38b`, `myvibehtml-fallback.css` `3e736a13eebd897c98b1d97028cf84d8beca8ccf9f416af1c3a335d2d9600d76`, `README.md` `d98a7d0aa557faa2c5f2501ef8905b2b55bb5232ff8e1e994bf169f93072ade6`.

## Текущее исправление v0.31

- Добавлена история исходного редактора поверх существующего `contenteditable`: отдельные Undo/Redo стеки, ограниченные настройкой `code_undo_limit`, кнопки панели и поддержка Ctrl+Z/Ctrl+Y/Ctrl+Shift+Z. Существующий source-map и форматирование редактора не заменялись.
- Добавлен локальный черновик через `localStorage` с ключом текущего URL: запись откладывается на 350 мс после изменения, есть кнопка восстановления, dirty-индикатор и предупреждение `beforeunload`. После успешного сохранения черновик удаляется, история становится чистой.
- Визуальные изменения перед сохранением также записывают актуальный HTML в тот же черновик через существующий `runtimeValue79()`, поэтому visual/text режимы используют общий recovery-поток без второй модели состояния.
- Тема и fallback получили единый graphite/teal toolbar для истории; на мобильном source editor добавлен отдельный ряд под фиксированной панелью, без перекрытия первой строки кода.
- Версия runtime/cache-busting поднята до `0.31`. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в релиз.
- Проверки v0.31: `php -l myvibehtml.php`, `php -l dev-router.php`, `node --check myvibehtml.js`, `sh tests/regression.sh`, `git diff --check` — PASS. Встроенный/графический browser runner в текущем окружении не обнаружен, поэтому screenshot acceptance этого этапа ещё не заявляется.
- Следующий функциональный номер — `0.32`: файловый менеджер CRUD и поиск по проекту.

## Текущее исправление v0.32

- Файловый менеджер получил создание пустого файла, создание папки, переименование файла/папки и удаление через существующий backup/CSRF flow. Новые имена проходят `normalizeManagerName()`, запрещены traversal, разделители, dot-файлы и NUL; новые файлы проверяются по `allowed_ext`.
- `getSiteRelativePath()` теперь безопасно принимает собственные editor URL с единственным `q`-параметром; это исправляет CRUD для файлов, чьи `data-cy` ссылки используют query-router.
- Добавлен поиск по всему document root с рекурсивным обходом без symlink, лимитом 200 результатов и дебаунсом 250 мс. Результаты строятся сервером как экранированные `li/a/span` и вставляются через существующий DOMParser allowlist.
- В верхнюю часть файловой панели добавлены локальные graphite/teal controls поиска, `Новый файл` и `Новая папка`; для строк файлов/каталогов добавлено действие `Переименовать`. После успешного CRUD список обновляется текущим reload без дублирования file-manager бизнес-логики.
- AJAX теперь передаёт все HTTP-ошибки `>=400` в общий error callback, поэтому 422 от CRUD не зависает до timeout.
- README/CHANGELOG/function catalog map обновлены до `0.32`; runtime/cache-busting markers синхронизированы. Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в релиз.
- Проверки v0.32: PHP/JS lint, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check`, HTTP regression против изолированного `127.0.0.1:8096` — PASS. HTTP regression на стандартном `127.0.0.1:8080` не запускался из-за отсутствия слушающего сервера; графический browser runner в текущем окружении не обнаружен, поэтому screenshot acceptance не заявляется.
- Следующий функциональный номер — `0.33`: расширенный HTML/CSS/ARIA-инспектор.

## Текущее исправление v0.33

- Инспектор выделенного узла расширен HTML/ARIA-полями: `tag`, `id`, `class`, `role`, `aria-label`, `aria-hidden` и `title`. При открытии поля заполняются текущими значениями DOM, включая вычисленные CSS-значения существующего инспектора.
- Изменение HTML/ARIA-атрибута применяется live к выбранному узлу и синхронизируется в opening tag исходника через текущую source map; значения экранируются, пустое значение удаляет атрибут, а ошибка откатывает DOM-изменение.
- В контекстное меню добавлено действие `HTML / ARIA`. Новых внешних библиотек и runtime-доменов не добавлялось; graphite/teal тема и существующая геометрия нижней desktop-панели сохранены.
- Версия синхронно поднята до `0.33` в PHP, JS, runtime/source-map, fallback, README и HTTP regression.
- Проверки v0.33: `node --check`, PHP lint, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Следующий функциональный номер — `0.34`: адаптивный preview.

## Текущее исправление v0.34

- В визуальный редактор добавлен нативный responsive preview: кнопки `Десктоп`, `Планшет`, `Телефон` меняют ширину рабочего iframe соответственно на 100%, `768px` и `390px`; содержимое и CSS страницы остаются живыми.
- Переключатель доступен как группа кнопок с `aria-pressed`; на узких разрешениях вынесен в компактную полосу под верхней панелью, в исходном режиме скрыт. Реализация использует только CSS и DOM, внешние библиотеки не добавлялись.
- Версия синхронно поднята до `0.34` в PHP, JS, runtime/source-map, fallback, README и HTTP regression.
- Проверки v0.34: `node --check`, PHP lint, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Следующий функциональный номер — `0.35`: библиотека блоков и медиаменеджер.

## Текущее исправление v0.35

- Добавлена локальная библиотека блоков: выбранный узел можно сохранить через контекстное меню `Сохранить в библиотеку`, открыть через кнопку `Блоки`, вставить после текущего выделения или удалить. Данные хранятся только в localStorage текущего браузера.
- Перед сохранением/вставкой библиотека удаляет `script/style/iframe/object/embed/foreignObject`, inline-события, `javascript:`/`vbscript:`-ссылки и внутренние `data-myvibehtml-*`-атрибуты; source map и draft обновляются после вставки.
- В файловый менеджер добавлена кнопка `Медиа`: существующий project search переиспользуется, а результат фильтруется до `avif/gif/ico/jpg/jpeg/png/svg/webp` и открывается прямым URL.
- Версия синхронно поднята до `0.35` в PHP, JS, runtime/source-map, fallback, README и HTTP regression; внешние библиотеки не добавлялись.
- Проверки v0.35: `node --check`, PHP lint, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Следующий функциональный номер — `0.36`: проверка страницы и diff перед сохранением.

## Текущее исправление v0.36

- Перед сохранением добавлено локальное HTML-ревью: дублирующиеся `id`, `javascript:`/`vbscript:` URL, изображения без `alt`, отсутствие `html`/`title` отмечаются до записи. Исходник не исполняется и не вставляется через `innerHTML` в диалог: проблемы и diff выводятся через `textContent`.
- Добавлен построчный diff baseline → candidate с ограничением отображения до 120 строк. Кнопка `Проверить` только показывает отчёт, а `Сохранить` и Ctrl/Cmd+S требуют явного подтверждения `Сохранить всё равно`; подключены оба режима — визуальный и текстовый.
- Версия синхронно поднята до `0.36` в PHP, JS, runtime/source-map, fallback, README и HTTP regression; внешние библиотеки не добавлялись. Остаточные v0.35 version markers в runtime/source-map/theme из предыдущего незакоммиченного состояния включены в этот release commit.
- Проверки v0.36: `node --check myvibehtml.js`, PHP lint для `myvibehtml.php`/runtime/router, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS. HTTP regression сначала поймал 500 из-за потерянного третьего аргумента `str_replace` в шаблоне; исправление повторно прошло полный прогон. Browser runner в текущем окружении не обнаружен, поэтому screenshot acceptance отдельно не заявляется.
- Следующий функциональный номер — `0.37`: горячие клавиши и command palette.

## Текущее исправление v0.37

- Добавлена нативная command palette по Ctrl/Cmd+K: поиск команд, Escape, ArrowUp/ArrowDown, Enter, click-outside и focus management. Команды HTML/Text/Files/Settings, Validate/Save, Undo/Redo, preview и Blocks вызывают уже существующие DOM-действия.
- Палитра строится только после открытия, использует `textContent` для данных команд, не добавляет runtime-библиотек и адаптируется до ширины мобильного экрана. Горячие клавиши Save/Undo/Redo предыдущих редакторов сохранены и не дублируются глобальным обработчиком.
- Версия синхронно поднята до `0.37` в PHP, JS, runtime/source-map, fallback, README и HTTP regression; внешние библиотеки не добавлялись.
- Проверки v0.37: `node --check myvibehtml.js`, PHP lint для `myvibehtml.php`/runtime/router, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS; HTTP regression повторен после локализации служебных строк command palette. Browser runner в текущем окружении не обнаружен, поэтому screenshot acceptance отдельно не заявляется.
- Функциональный roadmap v0.31–v0.37 реализован; дальнейшие изменения — отдельный backlog.

## Текущее исправление v0.38

- В файловом менеджере добавлен отдельный режим `В содержимом`: запрос отправляется на `content_search`, а существующий поиск имён файлов не изменён.
- Серверный `collectContentSearch()` обходит только корень сайта без symlink и скрытых файлов, ограничивает глубину 32, размер файла 2 MiB и количество совпадений 100, отдельно отклоняет ошибку `filesize()`, пропускает бинарное содержимое и разрешает только настроенные расширения.
- `renderContentSearchResults()` возвращает экранированные ссылки, номер строки и обрезаемый текстовый контекст. Результаты открываются штатным read-only переходом к файлу; операция поиска ничего не изменяет.
- Клиентский DOM allowlist расширен только тегом `CODE`; режимы поиска/медиа имеют `aria-pressed`, а инструменты файловой панели переносятся на узких разрешениях.
- Версия синхронно поднята до `0.38` в PHP, JS, runtime/source-map, fallback, README и HTTP regression; внешние библиотеки и доменные запросы не добавлялись.
- Проверки v0.38: `node --check myvibehtml.js`, PHP lint для `myvibehtml.php`/runtime/router, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Следующий функциональный номер — `0.39`: безопасная замена с diff и rollback.

## Текущее исправление v0.39

- В файловый менеджер добавлена безопасная массовая замена текста: режим `В содержимом` показывает поле нового текста, кнопку предпросмотра и откат последней применённой операции. Пустая замена разрешена как удаление совпадений.
- `collectContentReplacementFiles()` работает только с разрешёнными расширениями, без скрытых файлов и symlink, ограничивает глубину 32, размер файла 2 MiB, максимум 100 файлов и 100 совпадений, пропускает бинарное содержимое и NUL-ввод.
- `renderContentReplacementPreview()` возвращает snapshot SHA-256, число файлов/совпадений и экранируемый plain-text diff. Перед применением `applyContentReplacement()` заново собирает состояние и отклоняет устаревший snapshot при конкурентном изменении.
- Применение сохраняет транзакционный backup в runtime-каталоге вне web-root, использует существующую атомарную запись каждого файла и восстанавливает backup при сообщённой ошибке. `rollbackContentReplacement()` доступен только для последнего CSRF-защищённого transaction id и удаляет точку отката после успешного восстановления.
- Добавлены русские/английские строки, описания в README и `docs/function-catalog.md`; версия синхронно поднята до `0.39` в PHP, JS, runtime/source-map, fallback и HTTP regression.
- HTTP regression дополнен проверкой протокола: preview/apply обязаны возвращать настоящие разделители строк для разбора snapshot и transaction id в JavaScript; пользовательские NUL-байты также отклоняются.
- Проверки v0.39: PHP lint для `myvibehtml.php`/runtime/router, `node --check myvibehtml.js`, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в commit. Следующий функциональный номер — `0.40`: расширенный инспектор и структурное редактирование.

## Текущее исправление v0.40

- HTML/ARIA-инспектор получил редактируемое поле `Тег` с allowlist безопасных структурных тегов. Переименование сохраняет атрибуты и исходное форматирование, меняя только opening/closing tag в исходнике; служебные `<edit>`-обёртки не попадают в source.
- Контекстное меню получило `Добавить внутрь` и `Добавить рядом`. Пользователь выбирает разрешённый тег и обычный текст; HTML/скрипты из prompt не интерпретируются, потому что новый текст задаётся через `textContent`.
- Новые узлы получают существующие обработчики выделения/перетаскивания, source map перестраивается, dirty-state и локальный draft обновляются через общий поток редактора.
- Версия синхронно поднята до `0.40` в PHP, JS, runtime/source-map, fallback, README, function catalog, CHANGELOG и HTTP regression.
- Проверки v0.40: PHP lint для `myvibehtml.php`/runtime/router, `node --check myvibehtml.js`, source-map/deobfuscation/accessibility tests, `security-smoke.sh`, `git diff --check` и полный HTTP regression против `127.0.0.1:8096` — PASS. Browser runner в текущем окружении не обнаружен, поэтому визуальный screenshot acceptance не заявляется.
- Пользовательские `test-page.html` и `.test-page.html.myvibehtml.lock` не входят в commit. Следующий номер — `0.41`: модульное разделение и CI/authenticated E2E.
