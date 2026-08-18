# MyVibeHTML plugin context

## Состояние ревью

- Дата: 2026-08-18, Asia/Almaty.
- Версия из исходников: MyVibeHTML `2.12e`.
- Статус: локальный аудит исходников завершён; PHP и критические JS-потоки прошли первый этап деобфускации без изменения логики. Каноническое имя продукта и файлов переведено на `myvibehtml`; path guard, точечное HTML-экранирование, runtime-изоляция конфигурации/лога, security headers и безопасный вывод внешнего update-текста добавлены и проверены. Остались CSP/браузерная acceptance-проверка, общий аудит innerHTML и замена внешнего update/install/activate flow.
- Git: локальный репозиторий и ветка `main` инициализированы, `origin` настроен на `https://github.com/DiasMazhenov/MyVibeEditor.git`; baseline commit — `1e4ec5049ec3951a2b7b99d7be4db28904c07a35` от 2026-08-18 16:15:09 +0500, контекст GitHub — `f1763f1`, текущий security commit — `92383241b9183a2a322e98b9494abbe238730e1c` от 2026-08-18 16:22:50 +0500. Секретный `conf.ini` исключён через `.gitignore`.
- Проверки: `php -l myvibehtml.php` и `php -l textolite.php` — OK на PHP 8.5.8; `node --check myvibehtml.js` — OK на Node.js v24.15.0; временные path/XSS и runtime-config harness — PASS; Graphify `diagnose multigraph` — 90 узлов/283 связей без dangling/self-loop/duplicate endpoint edges.
- Оригиналы PHP/JS до переименования сохранены вне поставки: `/private/tmp/myvibe-originals-20260818/`; SHA-256 исходных файлов: PHP `e5df2da2b45fdc1e674cc9c8add728d970afb8fc3e9df20274307175fe8c4e9e`, JS `40b5d19941e7cb2c1bbe1fb7988dce45e8fdb85f500a4c7c2bbbfc74467444c3`.
- PHP-классы переименованы в `MyVibeHTMLRequest`, `MyVibeHTMLResponse`, `MyVibeHTMLConfig`, `MyVibeHTMLController`; методы получили смысловые имена. В JS переименован верхнеуровневый helper-слой cookie/animation/crypto/AJAX. PHP-параметры, alias-константы и локальные JS-функции ещё требуют отдельных проходов.
- Текущие SHA-256: `myvibehtml.php` `451077e1f4a3cd629e2452c84bee47c8430ef722960290500f6623659f4dfbcc`, `myvibehtml.js` `88f42258702dd53f27d7679959871717638a65829d9c46482d220541bd9d0516`, `myvibehtml.css` `9e69cbd2a16c4eed93a506ae03deec1f4a9fa5bee3dcbc2652ba0362b0394667`, `.htaccess` `e7da7dc6c32fe0c37d76328f51425e7e982a797f845595542dcd2025cbb85351`.
- Изменения безопасности этого этапа: единый path guard, symlink rejection, upload filename normalization, `escapeHtml()` для динамических filename/URL/metadata/default-file/language values, runtime `conf.ini`/`error.log` вне document root по умолчанию с миграцией старого файла, запрет backup/ini/log в `.htaccess`, базовые security headers, `Secure`/`HttpOnly`/`SameSite=Lax` на PHP 7.3+ и `textContent` для длинного внешнего update-ответа. CSP и полный отказ от context-blind `innerHTML` отложены до браузерной проверки и замены внешнего update flow.
- Обратная проверка JS подтвердила: после восстановления старых идентификаторов код совпадает с сохранённым оригиналом; отличаются только разрешённые имена и CRLF/LF.
- Постоянного test framework, `package.json`, `composer.json` и `vendor/` нет; для path guard выполнен временный PHP harness вне поставки.

## Переименование Textolite → MyVibeHTML

- Канонические файлы поставки: `myvibehtml.php`, `myvibehtml.js`, `myvibehtml.css`.
- `.htaccess` использует `myvibehtml.php` как `DirectoryIndex` и rewrite target.
- `textolite.php`, `textolite.js`, `textolite.css` оставлены минимальными compatibility aliases для старых прямых URL и asset-ссылок; это единственные оставшиеся локальные имена со старым префиксом.
- Внутренние PHP-классы, runtime prefix, DOM data-атрибуты, CSS selectors/font name и JS product marker переведены на `MyVibeHTML`/`myvibehtml`.
- При переезде исправлена связанная длина prefix-check: `textolite` имел 9 символов, `myvibehtml` — 10; проверка теперь использует `strlen('myvibehtml')`.
- Внешний домен `textolite.ru` пока не удалён: это действующий endpoint update/install/activate. Его удаление запланировано после отключения или замены update/install/activate flow, чтобы не оставить сломанную кнопку обновления.

## Graphify

- Создан локальный AST-граф: `graphify-out/graph.json`.
- Команда: `graphify extract . --code-only --no-cluster --force --out .` после безопасного полного пересканирования.
- Результат после текущего security-этапа: 90 узлов, 283 связи; `diagnose multigraph` не нашёл dangling/self-loop/duplicate endpoint edges. Инкрементальный прогон Graphify однажды потерял PHP-узлы, поэтому после структурных рефакторингов использовать `--force`.
- Индексированы 4 code-файла: `myvibehtml.php`, `myvibehtml.js` и два PHP/JS compatibility aliases; `.htaccess`, INI и CSS классификатор пропустил.
- PHP разобран до классов и методов. JS-файл представлен в графе как file node без разложенных символов: обфусцированный IIFE не был распознан AST-экстрактором. Поэтому JS-каталог ниже подтверждён чтением исходника, а не только Graphify.
- `graphify-out/` — локальный аналитический артефакт; в поставку/релиз его включать не следует.

## Состав поставки

| Файл | Назначение |
|---|---|
| `myvibehtml.php` | Единственная серверная точка входа: конфигурация, авторизация, роутинг AJAX, чтение/запись файлов, backup/recovery, HTML-шаблоны. |
| `myvibehtml.js` | Клиентский UI, SHA-1, AJAX, файловый менеджер, визуальный/source-редакторы, upload/replace/remove/settings/update flows. |
| `myvibehtml.css` | Весь UI/CSS в одной минифицированной строке; содержит встроенный WOFF через `data:` URI. |
| `conf.ini` | Состояние и настройки; содержит хеш пароля и session secret, значения в этом документе не раскрываются. |
| `lang.ini` | Локализации `ru`/`en` и текст интерфейса. Есть дублирующийся ключ `restore_settings` в обеих локализациях; значения совпадают. |
| `.htaccess` | `DirectoryIndex`, rewrite на `myvibehtml.php`, запрет `backup`/`ini`/`log`, отключение directory listing и Apache 2.4/2.2 deny-правила. Runtime `conf.ini`/`error.log` по умолчанию находятся вне document root; `.htaccess` остаётся fallback-защитой. |
| `textolite.php`, `textolite.js`, `textolite.css` | Совместимые aliases старых имён; канонические runtime-файлы — `myvibehtml.php`, `myvibehtml.js`, `myvibehtml.css`. |
| `.gitignore` | Не допускает публикацию `conf.ini`, `error.log`, `backup/`, `.DS_Store` и локального `graphify-out/`. |

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
| `ajaxRequest(body, ok, notFound, timeout, progress, externalUrl)` | Общий XMLHttpRequest POST. Поддерживает string/FormData, upload progress, 20-секундный client timeout и ветки status 200/404. При `externalUrl` включает `withCredentials` и может заменить `system=` на HTTP для local IP режима. |
| `generateToken()` | Генерирует client token из timestamp + random и прогоняет через SHA-1. |
| `formatBytes(bytes)` | Форматирует размер в KB/MB/GB/TB. |
| `buildServiceUrl(mode)` | Декодирует obfuscated `textolite.ru/update|install|activate` URL. Это transport helper, не библиотека. |

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
| `checkForUpdates()` | Проверяет локальные cookies и отправляет `system/version/final/beta` на внешний service endpoint. |
| `handleUpdateResult(value)` | Разбирает номер/статус версии и выбирает уведомление, rollback или установку. |
| `installUpdate()` | По подтверждению получает install payload, отправляет его с token и переводит страницу на результат. |
| `checkInstallation()` | Проверяет служебные лимиты и запускает дополнительную установку, если условия выполнены. |

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

Это не библиотеки, а удалённый update/activation flow, который вызывается из `myvibehtml.js` через helper `buildServiceUrl()`:

- https://textolite.ru/
- https://textolite.ru/update/
- https://textolite.ru/install/
- https://textolite.ru/activate/

На текущем этапе доверять содержимому ответов этих endpoints нельзя: локальная реализация обновления зависит от них, а подпись/проверка целостности ответа в поставленном коде не обнаружена. Нужны фактические ответы/файлы для отдельного supply-chain-аудита.

## Findings

### Исправлено — canonical path guard для файловых операций

`open`, `save`, `upload`, `remove`, `replace`, `recovery`, `renderFileList()`, `calculateDirectorySizes()` и `createBackup()` теперь используют нормализацию относительного пути, `realpath`-проверку принадлежности document root и запрет symlink escape. Upload/replace имена проходят `basename` после URL-decoding; абсолютные URL принимаются только для текущего host. Релевантные места: `myvibehtml.php:458-526`, `myvibehtml.php:586-749`, `myvibehtml.php:1104-1199`, `myvibehtml.php:1201-1285`.

Изолированный harness подтвердил блокировку `../`, encoded traversal, foreign host, symlink escape и безопасное создание нового in-root upload path. TOCTOU-защита на уровне файловой системы и production Apache/Nginx acceptance ещё не проверены.

### P1 — XSS через серверный HTML файлового менеджера — частично исправлено

Динамические имена файлов, URL, metadata, `default_file`, language values и системные URL проходят `escapeHtml()` перед HTML-шаблонами: `myvibehtml.php:529`, `myvibehtml.php:992-1170`. Для update flow версия ограничена безопасным шаблоном, а длинный внешний ответ выводится через `textContent` (`myvibehtml.js:2665-2707`). Временный harness подтвердил, что опасное имя файла и вредный `default_file` не попадают в output как markup. Общий `replacePlaceholders()` по-прежнему context-blind, а серверные HTML-ответы файлового менеджера вставляются через `innerHTML`; нужен отдельный браузерный аудит.

### P1 — `conf.ini` содержит секреты и защищён только `.htaccess` — исправлено по умолчанию

Runtime `conf.ini` и `error.log` теперь создаются в скрытом каталоге с хешем document root за его пределами, каталог получает `0700`, конфигурация — `0600`, а legacy `conf.ini` мигрируется и удаляется после успешного копирования. Если родительский каталог document root недоступен для записи, остаётся совместимый fallback к legacy-файлу; в этом режиме защита опирается на `.htaccess`, поэтому для Nginx нужно отдельно запретить `*.ini`, `*.log` и `/backup/`.

### P1 — заявлена поддержка PHP 5.2, но код использует short array syntax

В начале `myvibehtml.php` разрешается PHP `>=5.2`, однако `[]` используется начиная с `myvibehtml.php:463` и далее. PHP 5.2/5.3 такой файл не распарсят. Нужно либо поднять минимальную версию, либо переписать синтаксис; фактическую поддерживаемую версию следует зафиксировать.

### P2 — отсутствует локальная криптографическая проверка update/install ответа

`myvibehtml.js:2635-2759` отправляет запросы на `textolite.ru/update|install|activate`; ответ преобразуется и используется в update flow. В локальном коде нет подписи, pinned key или фиксированной checksum-проверки. Протокол/ответы внешнего сервера нужно получить и проверить отдельно.

### P2 — cookie/security headers — частично исправлено

Ответы теперь добавляют `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` и `Permissions-Policy` (`myvibehtml.php:251-256`). На PHP 7.3+ серверные cookies получают `Secure` при HTTPS, `HttpOnly` и `SameSite=Lax`; на старом PHP сохраняется legacy API без SameSite. JS cookies по-прежнему создаются через `document.cookie`, а CSP отложен до проверки inline/template/iframe/update-потоков.

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

Не проверено: фактическое поведение в Apache/Nginx, HTTPS/cookie policy в браузере, реальные stored-XSS сценарии, содержимое и TLS/API-контракт `textolite.ru`, корректность обновления, TOCTOU-поведение при гонках и совместимость с заявленными старыми PHP/browser версиями.

## Приоритет следующей работы

1. Завершено частично: изолированный harness подтвердил traversal, symlink, upload-защиту, два основных stored-XSS контекста и вынос runtime config/log из document root; отдельно проверить остальные server-response/innerHTML paths.
2. Завершено по умолчанию: `conf.ini`/`error.log` вынесены из публичного дерева, добавлены Apache fallback-правила; отдельно подготовить Nginx snippet для production.
3. Завершено: добавлен единый canonical path guard для file operations, symlink escape запрещён, upload filenames нормализуются.
4. Частично завершено: экранированы file-manager/default-file contexts и внешний update text; далее закрыть остальные HTML/attribute contexts или перейти на DOM construction без `innerHTML` для серверных данных.
5. После согласования замены удалить внешние update/install/activate endpoints и соответствующий client flow.
6. Добавить постоянные regression tests для auth, XSS encoding, backup и update response validation; path/XSS сейчас подтверждены временным harness.
