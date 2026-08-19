# Каталог функций MyVibeHTML

Это каталог runtime-функций после деобфускации v0.22. Имена `callbackValue...` в JavaScript — технические локальные ссылки старого IIFE; ниже они описаны по назначению, чтобы документация не зависела от номеров локальных переменных.

## PHP: вход, ответ и конфигурация

### Глобальные функции

| Функция | Назначение |
|---|---|
| `myvibehtml_runtime_directory()` | Выбирает и создаёт изолированный runtime-каталог рядом с document root. |
| `myvibehtml_atomic_write()` | Записывает служебный файл через lock, временный файл и атомарный `rename`. |
| `myvibehtml_unserialize_array()` | Читает legacy-массивы с запретом пользовательских классов. |

### `MyVibeHTMLRequest`

`__construct()` снимает копии `GET`, `POST`, `SERVER`, `COOKIE`, `FILES`. `getQuery()`, `getPost()`, `getServer()`, `getCookie()` и `getFile()` возвращают нормализованные значения из соответствующего источника. `filter()` выбирает обработчик по явной карте ключей, поэтому после деобфускации сохраняется обработка `DOCUMENT_ROOT`, `SCRIPT_FILENAME`, `PHP_SELF`, `SCRIPT_NAME` и IP.

Фильтры `filterServerProtocol()`, `filterServerName()`, `filterScriptFilename()`, `filterDocumentRoot()`, `filterPhpSelf()`, `filterScriptName()`, `filterQueryString()`, `filterRemoteAddress()`, `filterServerAddress()`, `filterIpAddress()` и `filterSha1()` ограничивают формат соответствующих значений.

### `MyVibeHTMLResponse`

`addHeader()`, `setStatus()`, `redirect()`, `setCookie()`, `clearCookie()` и `setBody()` накапливают ответ. `send()` отправляет статус, заголовки, cookies и тело в правильном порядке.

### `MyVibeHTMLConfig`

`getConfigPath()`, `getLanguage()`, `getEditorDirectory()`, `getSiteRoot()`, `getSiteUrlBase()`, `getSiteUrl()`, `getBackupRoot()`, `getBackupUrl()`, `getParentDirectory()` вычисляют расположение и URL. `getSetting()`/`setSetting()` читают и меняют параметры. `getTemplate()`, `replacePlaceholders()`, `localizeTemplate()` и `translate()` формируют локализованный HTML. `save()`, `writeFileAtomically()` и `isWritable()` отвечают за безопасное сохранение состояния.

## PHP: контроллер

`authenticate()` проверяет пароль, сессию, лимит попыток и блокировку. `dispatch()` выбирает маршрут `open`, `save`, `upload`, `replace`, `remove`, `settings`, `recovery`, `scripts`, `reload` или `logout`. `renderVisualEditor()`, `renderSourceEditor()`, `renderErrorPage()`, `renderPanel()` и `handleException()` формируют страницы и ошибки.

`normalizeRelativePath()`, `getPublicFileUrl()`, `getSiteRelativePath()`, `getSafeSitePath()`, `isSafeSitePath()`, `normalizeUploadFilename()`, `escapeHtml()` и `isAllowedExtension()` образуют path/HTML trust boundary. `readHtmlFile()` читает разрешённый HTML.

`detectRewriteMode()`, `getQueryPrefix()`, `findDefaultFile()`, `ensureRewriteBase()`, `writeHtaccess()` поддерживают маршрутизацию. `createSession()`, `destroySession()` и `switchMode()` управляют сессией и режимом редактора. `copyFileAtomically()`, `createBackup()`, `pruneBackups()` обеспечивают backup/recovery.

`renderFileList()`, `renderFileType()`, `renderLanguageList()`, `parseSize()`, `renderSiteStatus()`, `sortEntries()`, `getDirectorySize()`, `calculateDirectorySizes()` отвечают за файловый менеджер. `normalizeImageFilename()` нормализует имена изображений.

## JavaScript: UI и авторизация

`readCookie()`, `writeCookie()`, `removeCookie()`, `generateToken()`, `sha1()` и `base64Encode()` обслуживают cookie-сессию и локальную проверку пароля. `fadeIn()` и `fadeOut()` управляют состоянием сообщений и панелей.

Обработчики вкладок переключают `html`/`text`, `saveEditorContent()` сохраняет изменения, `switchEditorMode()` выбирает режим, а `toggleSettingsSection()`, `submitSettings()`, `applySavedSettings()` и `restoreSettingsDefaults()` обслуживают настройки.

## JavaScript: визуальный редактор

`initializeVisualEditor()` подключает события iframe. `getContextNode()`, `getSectionNode()`, `getBlockNode()` вычисляют уровни DOM. `clearContextSelection()`, `selectContextNode()`, `createContextMenu()`, `showContextMenu()` и `hideContextMenu()` реализуют выделение и контекстное меню.

CSS-инспектор используют `createStyleInspector()` и `renderStyleInspector()` для построения панели и заполнения inline/computed-значений. `applyStyleProperty()` валидирует allowlist CSS-свойств, применяет значение к live-узлу и вызывает `syncStyleSource()` для обновления исходного HTML. `getStyleSourceRange()` вычисляет границы реального opening/closing tag, включая служебную текстовую обёртку `<edit>`, а `resetStyleInspector()` удаляет inline-стиль с восстановлением источника. `closeStyleInspector()` закрывает панель по кнопке или Escape; `isValidStyleValue()` отклоняет опасные конструкции, внешние URL и неподдерживаемые значения.

Существующие обработчики toolbar переиспользуются контекстным меню: clone (`callbackValue89`), move up (`callbackValue90`), move down (`callbackValue91`) и delete (`callbackValue92`). Это сохраняет одну бизнес-логику для нижней панели и правой кнопки мыши.

`replaceFileListFragment()` принимает server response через `DOMParser`, удаляет неразрешённые теги/атрибуты и вставляет `DocumentFragment`. `openDirectory()`, `expandDirectory()` и обработчики file entry обновляют файловый список. `uploadFile()`, `deleteFile()`, `replaceFile()`, `recoverFile()` выполняют операции над файлами.

Редактор исходного кода использует `innerHTML` намеренно для подсветки и восстановления пользовательского HTML. Это не server-response sink; статусные узлы редактора v0.22 используют `textContent`.

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
| Controller: output/files | `renderVisualEditor()`, `renderSourceEditor()`, `renderErrorPage()`, `handleException()`, `renderPanel()`, `renderFileType()`, `renderLanguageList()`, `parseSize()`, `renderSiteStatus()`, `renderFileList()`, `sortEntries()`, `getDirectorySize()`, `calculateDirectorySizes()`, `createBackup()`, `pruneBackups()`, `normalizeImageFilename()`, `writeFileAtomically()`, `copyFileAtomically()` |

## Полный список именованных JavaScript-ролей

Внешние runtime-роли IIFE: `writeCookie`, `removeCookie`, `readCookie`, `animateValue`, `fadeIn`, `fadeOut`, `slideDown`, `slideUp`, `showPanel`, `hidePanel`, `utf8Encode`, `sha1`, `base64Encode`, `ajaxRequest`, `generateToken`, `formatBytes`.

Авторизация: `togglePasswordVisibility`, `handleLoginKeydown`, `updateLoginButton`, `startLogin`, `hashPassword`, `submitLogin`.

Редактор и выделение: `initializeVisualEditor`, `getContextNode`, `getSectionNode`, `getBlockNode`, `clearContextSelection`, `selectContextNode`, `createContextMenu`, `showContextMenu`, `hideContextMenu`, `handleEditorSelection`, `syncToolbarSpace`, `saveEditorContent`, `switchEditorMode`, `resetEditorFocus`.

CSS-инспектор: `createStyleInspector`, `closeStyleInspector`, `getStyleSourceRange`, `syncStyleSource`, `isValidStyleValue`, `applyStyleProperty`, `renderStyleInspector`, `resetStyleInspector`.

Структура/drag-and-drop: `clone`, `move up`, `move down`, `delete` реализованы существующими toolbar callbacks `callbackValue89`, `callbackValue90`, `callbackValue91`, `callbackValue92`; вспомогательные роли — `callbackValue93`–`callbackValue125` для вычисления границ, сериализации, drag/drop и script/style режима.

Файлы: `openDirectory`, `collapseDirectory`, `expandDirectory`, `revealCurrentPath`, `initializeFileEntry`, `replaceFileListFragment`, `uploadFile`, `queueUploads`, `processUploadQueue`, `deleteFile`, `recoverBackup`, `renderFileSize`, `renderFileDate`.

Настройки/система: `setMenuState`, `toggleSettingsSection`, `blurSettingsControls`, `hashSettingsPassword`, `submitSettings`, `applySavedSettings`, `restoreSettingsUi`, `restoreSettingsDefaults`, `initializeSettings`, `logout`, `checkForUpdates`, `handleUpdateResult`, `installUpdate`, `checkInstallation`. Последние четыре роли сохранены как локальные совместимые no-op/локальные проверки: удалённые update/install/activate endpoints в них не вызываются.
