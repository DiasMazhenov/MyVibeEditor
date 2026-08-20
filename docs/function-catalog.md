# Каталог функций MyVibeHTML

Это каталог runtime-функций после семантической чистки v0.28. Внешние и security-критичные роли имеют предметные имена; удалённые update/install/activate-заглушки и compatibility aliases больше не входят в runtime.

## PHP: вход, ответ и конфигурация

### Глобальные функции

| Функция | Назначение |
|---|---|
| `myvibehtml_runtime_directory()` | Выбирает и создаёт изолированный runtime-каталог рядом с document root. |
| `myvibehtml_atomic_write()` | Записывает служебный файл через lock, временный файл и атомарный `rename`. |
| `myvibehtml_unserialize_array()` | Читает legacy-массивы с запретом пользовательских классов. |

### `MyVibeHTMLRequest`

`__construct()` снимает копии `GET`, `POST`, `SERVER`, `COOKIE`, `FILES`. `getQuery()`, `getPost()`, `getServer()`, `getCookie()` и `getFile()` возвращают нормализованные значения из соответствующего источника. `filter()` выбирает обработчик по явной карте ключей, поэтому после деобфускации сохраняется обработка `DOCUMENT_ROOT`, `SCRIPT_FILENAME`, `PHP_SELF`, `SCRIPT_NAME` и IP.

Фильтры `filterServerProtocol()`, `filterServerName()`, `filterScriptFilename()`, `filterDocumentRoot()`, `filterPhpSelf()`, `filterScriptName()`, `filterQueryString()`, `filterRemoteAddress()`, `filterServerAddress()` и `filterIpAddress()` ограничивают формат соответствующих значений.

### `MyVibeHTMLResponse`

`addHeader()`, `setStatus()`, `redirect()`, `setCookie()`, `clearCookie()` и `setBody()` накапливают ответ. `send()` отправляет статус, заголовки, cookies и тело в правильном порядке.

### `MyVibeHTMLConfig`

`getConfigPath()`, `getLanguage()`, `getEditorDirectory()`, `getSiteRoot()`, `getSiteUrlBase()`, `getSiteUrl()`, `getBackupRoot()`, `getBackupUrl()`, `getParentDirectory()` вычисляют расположение и URL. `getSetting()`/`setSetting()` читают и меняют параметры. `getTemplate()`, `replacePlaceholders()`, `localizeTemplate()` и `translate()` формируют локализованный HTML. `commit()`, `save()`, `encodeIniValue()`, `writeFileAtomically()` и `isWritable()` отвечают за синхронное и безопасное сохранение состояния.

## PHP: контроллер

`authenticate()` проверяет пароль, сессию, лимит попыток и блокировку. `dispatch()` выбирает маршрут `open`, `save`, `upload`, `replace`, `remove`, `settings`, `recovery`, `scripts`, `reload` или `logout`. `renderVisualEditor()`, `renderSourceEditor()`, `renderErrorPage()`, `renderPanel()` и `handleException()` формируют страницы и ошибки.

`normalizeRelativePath()`, `getPublicFileUrl()`, `getSiteRelativePath()`, `getSafeSitePath()`, `isSafeSitePath()`, `normalizeUploadFilename()`, `escapeHtml()` и `isAllowedExtension()` образуют path/HTML trust boundary. `readHtmlFile()` читает разрешённый HTML.

`detectRewriteMode()`, `getQueryPrefix()`, `findDefaultFile()`, `ensureRewriteBase()`, `writeHtaccess()` поддерживают маршрутизацию. `createSession()`, `destroySession()` и `switchMode()` управляют сессией и режимом редактора. `copyFileAtomically()`, `createBackup()`, `restoreBackupDirectory()` и `pruneBackups()` обеспечивают staged backup/recovery с rollback.

`renderFileList()`, `renderFileType()`, `renderLanguageList()`, `parseSize()`, `renderSiteStatus()`, `sortEntries()`, `getDirectorySize()`, `calculateDirectorySizes()` отвечают за файловый менеджер. `normalizeImageFilename()` нормализует имена изображений.

`collectContentSearch()` и `renderContentSearchResults()` выполняют ограниченный read-only поиск по разрешённым текстовым файлам. `isValidContentReplacementInput()`, `collectContentReplacementFiles()`, `contentReplacementSnapshot()` и `renderContentReplacementPreview()` собирают изменения, считают совпадения и формируют diff без записи. `createContentReplacementTransaction()`, `applyContentReplacement()` и `rollbackContentReplacement()` сохраняют последнюю точку отката в runtime-каталоге вне web-root, проверяют snapshot на устаревание и используют существующие атомарные операции записи/восстановления.

`replaceStructuralTag()` переименовывает только разрешённые структурные теги, сохраняя исходные атрибуты/форматирование и не сериализуя служебные `<edit>`-обёртки. `insertStructuralNode()` добавляет текстовый узел внутрь или рядом с выбранным элементом; пользовательский ввод проходит через `textContent`, а результат обновляет source map и draft.

## JavaScript: UI и авторизация

`readCookie()`, `writeCookie()`, `removeCookie()`, `generateToken()`, `sha1()`, `base64Encode()` и `base64UrlEncode()` обслуживают cookie/CSRF-транспорт. Пароль передаётся по HTTPS для серверной проверки `password_verify()`, без клиентского SHA-1. `fadeIn()` и `fadeOut()` управляют состоянием сообщений и панелей.

Auth DOM-flow (`bootAuthentication()`, `togglePasswordVisibility()`, `updateLoginButton()`, `startLogin()`, `submitLogin()` и `reloadAfterAuthentication()`) находится в отдельном `myvibehtml-auth.js` и загружается только на auth-странице. Основной `myvibehtml.js` не содержит auth-обработчиков.

Обработчики вкладок переключают `html`/`text`, `saveEditorContent()` сохраняет изменения, `switchEditorMode()` выбирает режим, а `toggleSettingsSection()`, `submitSettings()`, `applySavedSettings()` и `restoreSettingsDefaults()` обслуживают настройки.

## JavaScript: визуальный редактор

`initializeVisualEditor()` подключает события iframe. `getContextNode()`, `getSectionNode()`, `getBlockNode()` вычисляют уровни DOM. `clearContextSelection()`, `selectContextNode()`, `createContextMenu()`, `showContextMenu()` и `hideContextMenu()` реализуют выделение и контекстное меню.

CSS-инспектор используют `createStyleInspector()` и `renderStyleInspector()` для построения панели и заполнения inline/computed-значений. `applyStyleProperty()` валидирует allowlist CSS-свойств, применяет значение к live-узлу и вызывает `syncStyleSource()` для обновления исходного HTML. `getStyleSourceRange()` сначала использует `MyVibeHTMLSourceMap`, а затем fallback вычисления границ реального opening/closing tag, включая служебную текстовую обёртку `<edit>`. `resetStyleInspector()` удаляет inline-стиль с восстановлением источника. `closeStyleInspector()` закрывает панель по кнопке или Escape; `isValidStyleValue()` отклоняет опасные конструкции, внешние URL и неподдерживаемые значения.

Существующие обработчики toolbar переиспользуются контекстным меню для clone, move up, move down и delete. Это сохраняет одну бизнес-логику для нижней панели и правой кнопки мыши.

`replaceFileListFragment()` принимает server response через `DOMParser`, удаляет неразрешённые теги/атрибуты и вставляет `DocumentFragment`. `openDirectory()`, `expandDirectory()` и обработчики file entry обновляют файловый список. `uploadFile()`, `deleteFile()`, `replaceFile()`, `recoverFile()` выполняют операции над файлами. `fileManagerReplacePreview()` показывает серверный diff и передаёт snapshot в существующий диалог проверки, `fileManagerRollback()` восстанавливает последнюю подтверждённую замену через CSRF-защищённый endpoint.

Редактор исходного кода использует `innerHTML` намеренно для подсветки и восстановления пользовательского HTML. Это не server-response sink; статусные узлы редактора v0.22 используют `textContent`.

`readEditorTimeline()`, `writeEditorTimeline()` и `recordEditorTimeline()` обслуживают постоянную локальную историю снимков visual/source draft. `sourceHistoryOpenTimeline()` строит доступный диалог истории и передаёт восстановление в существующий `sourceHistoryRender()`; максимум хранится 40 снимков на файл.

`readBlockLibrary()`, `writeBlockLibrary()` и `sanitizeBlockMarkup()` обслуживают локальное безопасное хранилище компонентов. `saveBlockPreset()` создаёт компонент, `insertBlockPreset()` вставляет независимую копию, а `updateBlockPreset()` заменяет markup сохранённого компонента текущим выделением; старые записи библиотеки мигрируют в память с `id/type` без потери данных.

`getDesignTokenNames()` и `getDesignTokenValue()` читают custom properties, `renderDesignTokens()` заполняет текущие значения в инспекторе, `isValidDesignTokenName()`/`isValidDesignTokenValue()` фильтруют ввод, а `syncDesignTokenSource()` синхронно меняет `:root`, live preview и draft.

`validationDialogOpen()` дополнительно проверяет `lang`, `title`, `meta description`, `meta viewport`, количество `h1`, ссылки без `href` и ограниченный ресурсный бюджет страницы. `myvibehtml-shell-controls.js` через `data-site-map` строит навигацию по same-origin ссылкам iframe, а `data-preview-preset` управляет пятью профилями Responsive Preview Studio без отдельной библиотеки.

## Полный именной inventory PHP

Ниже перечислены все функции и методы, присутствующие в `myvibehtml.php`; одинаковые имена `__construct()` и `writeFileAtomically()` относятся к разным классам.

| Область | Полный список |
|---|---|
| Глобальные | `myvibehtml_runtime_directory()`, `myvibehtml_atomic_write()`, `myvibehtml_unserialize_array()` |
| Request | `__construct()`, `getQuery()`, `getPost()`, `getServer()`, `getCookie()`, `getFile()`, `filter()`, `filterServerProtocol()`, `filterServerName()`, `filterScriptFilename()`, `filterDocumentRoot()`, `filterPhpSelf()`, `filterScriptName()`, `filterQueryString()`, `filterRemoteAddress()`, `filterServerAddress()`, `filterIpAddress()`, `filterSha1()` |
| Response | `__construct()`, `addHeader()`, `setStatus()`, `redirect()`, `setCookie()`, `clearCookie()`, `setBody()`, `send()` |
| Config | `__construct()`, `getConfigPath()`, `__destruct()`, `getLanguage()`, `getEditorDirectory()`, `getSiteUrlBase()`, `getSiteRoot()`, `getSiteUrl()`, `getBackupRoot()`, `getBackupUrl()`, `getParentDirectory()`, `getSetting()`, `setSetting()`, `save()`, `writeFileAtomically()`, `isWritable()`, `getTemplate()`, `replacePlaceholders()`, `localizeTemplate()`, `translate()` |
| Controller: paths/security | `__construct()`, `normalizeRelativePath()`, `getPublicFileUrl()`, `getSiteRelativePath()`, `getSafeSitePath()`, `isSafeSitePath()`, `normalizeUploadFilename()`, `escapeHtml()`, `isAllowedExtension()`, `readHtmlFile()` |
| Controller: auth/routing | `authenticate()`, `dispatch()`, `selectLanguage()`, `detectRewriteMode()`, `getQueryPrefix()`, `findDefaultFile()`, `ensureRewriteBase()`, `writeHtaccess()`, `createSession()`, `destroySession()`, `switchMode()` |
| Controller: output/files | `renderVisualEditor()`, `renderSourceEditor()`, `renderErrorPage()`, `handleException()`, `renderPanel()`, `renderFileType()`, `renderLanguageList()`, `parseSize()`, `renderSiteStatus()`, `renderFileList()`, `sortEntries()`, `getDirectorySize()`, `calculateDirectorySizes()`, `collectContentSearch()`, `renderContentSearchResults()`, `isValidContentReplacementInput()`, `collectContentReplacementFiles()`, `contentReplacementSnapshot()`, `renderContentReplacementPreview()`, `createContentReplacementTransaction()`, `applyContentReplacement()`, `rollbackContentReplacement()`, `createBackup()`, `pruneBackups()`, `normalizeImageFilename()`, `writeFileAtomically()`, `copyFileAtomically()` |

## Полный список именованных JavaScript-ролей

Внешние runtime-роли IIFE: `writeCookie`, `removeCookie`, `readCookie`, `animateValue`, `fadeIn`, `fadeOut`, `slideDown`, `slideUp`, `showPanel`, `hidePanel`, `utf8Encode`, `sha1`, `base64Encode`, `ajaxRequest`, `generateToken`, `formatBytes`.

Авторизация (`myvibehtml-auth.js`): `bootAuthentication`, `togglePasswordVisibility`, `updateLoginButton`, `startLogin`, `submitLogin`, `reloadAfterAuthentication`.

Редактор и выделение: `initializeVisualEditor`, `getContextNode`, `getSectionNode`, `getBlockNode`, `clearContextSelection`, `selectContextNode`, `createContextMenu`, `showContextMenu`, `hideContextMenu`, `handleEditorSelection`, `syncToolbarSpace`, `saveEditorContent`, `switchEditorMode`, `resetEditorFocus`.

CSS-инспектор: `createStyleInspector`, `closeStyleInspector`, `getStyleSourceRange`, `syncStyleSource`, `isValidStyleValue`, `applyStyleProperty`, `renderStyleInspector`, `resetStyleInspector`, `replaceStructuralTag`, `insertStructuralNode`.

Структура/drag-and-drop: `clone`, `move up`, `move down`, `delete` реализованы существующими toolbar callbacks; вспомогательные локальные роли получили имена `runtimeValueN`/`visualEditorValueN` и отвечают за вычисление границ, сериализацию, drag/drop и script/style режим.

Файлы: `openDirectory`, `collapseDirectory`, `expandDirectory`, `revealCurrentPath`, `initializeFileEntry`, `replaceFileListFragment`, `fileManagerReplacePreview`, `fileManagerRollback`, `uploadFile`, `queueUploads`, `processUploadQueue`, `deleteFile`, `recoverBackup`, `renderFileSize`, `renderFileDate`.

Настройки/система: `setMenuState`, `toggleSettingsSection`, `blurSettingsControls`, `submitSettings`, `applySavedSettings`, `restoreSettingsUi`, `restoreSettingsDefaults`, `initializeSettings`, `logout`.
