/* MyVibeHTML v0.95 admin page interactions. */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var body = document.body,
            buttons = document.querySelectorAll('[data-admin-nav]'),
            sections = document.querySelectorAll('[data-admin-section]'),
            menu = document.querySelector('[data-admin-menu]'),
            sidebar = document.querySelector('[data-admin-sidebar]'),
            search = document.querySelector('[data-admin-file-search]'),
            browser = document.querySelector('[data-admin-browser]'),
            browserList = document.querySelector('[data-admin-browser-list]'),
            paste = document.querySelector('[data-admin-paste]'),
            browserPath = '',
            clipboardPath = '',
            clipboardPaths = [],
            browserSelected = [],
            browserCopy = document.querySelector('[data-admin-browser-copy]'),
            browserPaste = document.querySelector('[data-admin-browser-paste]'),
            browserMove = document.querySelector('[data-admin-browser-move]'),
            browserArchive = document.querySelector('[data-admin-browser-archive]'),
            browserDownload = document.querySelector('[data-admin-browser-download]'),
            browserRollback = document.querySelector('[data-admin-browser-rollback]'),
            lastOperationId = '',
            contentList = document.querySelector('[data-admin-content-list]'),
            contentSearch = document.querySelector('[data-admin-content-search]'),
            contentFilter = 'all',
            mediaGrid = document.querySelector('[data-admin-media-grid]'),
            contentLoaded = false,
            mediaLoaded = false,
            pageBrowser = document.querySelector('[data-admin-page-browser]'),
            pageBrowserList = document.querySelector('[data-admin-pages-list]'),
            pageState = {
                path: pageBrowser ? pageBrowser.getAttribute('data-admin-page-browser-path') || '' : '',
                clipboardPath: '',
                selectedPath: ''
            },
            pageUp = document.querySelector('[data-admin-pages-up]'),
            pageCopy = document.querySelector('[data-admin-pages-copy]'),
            pagePaste = document.querySelector('[data-admin-pages-paste]'),
            pageDuplicate = document.querySelector('[data-admin-pages-duplicate]'),
            pageRename = document.querySelector('[data-admin-pages-rename]'),
            pageDelete = document.querySelector('[data-admin-pages-delete]'),
            pageUpload = document.querySelector('[data-admin-pages-upload-file]'),
            pageUploadSubmit = document.querySelector('[data-admin-pages-upload-submit]'),
            pageMkdir = document.querySelector('[data-admin-pages-mkdir]'),
            token = body.getAttribute('data-admin-token') || '',
            endpoint = window.location.pathname + window.location.search,
            setStatus = function(message, state) {
                var status = document.querySelector('[data-admin-browser-status]');
                if (status) {
                    status.textContent = message || '';
                    status.className = state ? 'is-' + state : ''
                }
            },
            setPageStatus = function(message, state) {
                var status = document.querySelector('[data-admin-pages-status]');
                if (status) {
                    status.textContent = message || '';
                    status.className = state ? 'is-' + state : ''
                }
            },
            request = function(action, values, file) {
                var payload, key;
                values = values || {};
                if (file) {
                    payload = new FormData();
                    payload.append('admin_action', action);
                    payload.append('token', token);
                    payload.append('file', file);
                    for (key in values) payload.append(key, key == 'sources' && Array.isArray(values[key]) ? JSON.stringify(values[key]) : values[key])
                } else {
                    payload = new URLSearchParams();
                    payload.append('admin_action', action);
                    payload.append('token', token);
                    for (key in values) payload.append(key, key == 'sources' && Array.isArray(values[key]) ? JSON.stringify(values[key]) : values[key])
                }
                return fetch(endpoint, {method: 'POST', headers: {'AJAX': '1'}, body: payload, credentials: 'same-origin'}).then(function(response) {
                    return response.json().catch(function() { return {ok: false, error: 'invalid_response'} }).then(function(result) {
                        if (result.token) token = result.token;
                        if (!response.ok || !result.ok) throw new Error(result.error || 'operation_failed');
                        return result
                    })
                })
            },
            formatSize = function(size) {
                if (size < 1024) return size + ' B';
                if (size < 1048576) return (size / 1024).toFixed(1) + ' KB';
                return (size / 1048576).toFixed(1) + ' MB'
            },
            parentPath = function(path) {
                var parts = (path || '').split('/');
                parts.pop();
                return parts.join('/')
            },
            addEntryIcon = function(cell, isFolder) {
                var name = document.createElement('span');
                name.className = 'myvibehtml-admin-entry-name';
                var icon = document.createElement('span');
                icon.className = isFolder ? 'myvibehtml-admin-folder-icon' : 'myvibehtml-admin-file-icon';
                icon.setAttribute('aria-hidden', 'true');
                name.appendChild(icon);
                cell.appendChild(name);
                return name
            },
            decoratePageToolbar = function() {
                var controls = [
                    ['[data-admin-pages-up]', 'arrow-up.svg'],
                    ['[data-admin-pages-copy]', 'copy.svg'],
                    ['[data-admin-pages-paste]', 'clipboard.svg'],
                    ['[data-admin-pages-duplicate]', 'copy-plus.svg'],
                    ['[data-admin-pages-rename]', 'pencil.svg'],
                    ['[data-admin-pages-delete]', 'trash.svg'],
                    ['[data-admin-pages-upload-submit]', 'upload.svg'],
                    ['[data-admin-pages-mkdir]', 'folder-plus.svg']
                ];
                for (var controlIndex = 0; controlIndex < controls.length; controlIndex++) {
                    var button = document.querySelector(controls[controlIndex][0]);
                    if (!button) continue;
                    var label = button.textContent.replace(/^\s+|\s+$/g, '');
                    button.textContent = '';
                    button.title = label;
                    button.setAttribute('aria-label', label);
                    var icon = document.createElement('span');
                    icon.className = 'myvibehtml-admin-action-icon';
                    icon.setAttribute('aria-hidden', 'true');
                    icon.style.webkitMaskImage = 'url("myvibehtml-icons/' + controls[controlIndex][1] + '")';
                    icon.style.maskImage = 'url("myvibehtml-icons/' + controls[controlIndex][1] + '")';
                    button.appendChild(icon)
                }
            },
            updatePageActions = function() {
                var hasSelection = !!pageState.selectedPath;
                if (pageCopy) pageCopy.disabled = !hasSelection;
                if (pageDuplicate) pageDuplicate.disabled = !hasSelection;
                if (pageRename) pageRename.disabled = !hasSelection;
                if (pageDelete) pageDelete.disabled = !hasSelection;
                if (pagePaste) pagePaste.disabled = !pageState.clipboardPath;
                if (pageUp) pageUp.disabled = !pageState.path;
            },
            updateBrowserActions = function() {
                var hasSelection = browserSelected.length > 0;
                if (browserCopy) browserCopy.disabled = !hasSelection;
                if (browserMove) browserMove.disabled = !hasSelection;
                if (browserArchive) browserArchive.disabled = !hasSelection;
                if (browserDownload) browserDownload.disabled = !hasSelection;
                if (browserPaste) browserPaste.disabled = !clipboardPath;
            },
            renderListing = function(listing) {
                var index, entry, row, selectCell, checkbox, nameCell, nameWrap, nameButton, meta, actions, actionButton, sizeCell;
                if (!browserList) return;
                if (!paste) {
                    paste = document.createElement('button');
                    paste.type = 'button';
                    paste.textContent = 'Paste';
                    paste.hidden = true;
                    paste.setAttribute('data-admin-paste', '');
                    paste.addEventListener('click', function() { if (clipboardPath) operate('duplicate', {source: clipboardPath}) });
                    var toolbar = document.querySelector('.myvibehtml-admin-file-toolbar');
                    if (toolbar) toolbar.appendChild(paste)
                }
                browserPath = listing.path || '';
                browserSelected = [];
                if (browser) browser.setAttribute('data-admin-browser-path', browserPath);
                var breadcrumb = document.querySelector('[data-admin-browser-breadcrumb]');
                if (breadcrumb) breadcrumb.textContent = '/' + (browserPath ? browserPath + '/' : '');
                var up = document.querySelector('[data-admin-browser-up]');
                if (up) up.disabled = !listing.parent && listing.parent !== '';
                browserList.textContent = '';
                updateBrowserActions();
                for (index = 0; index < listing.entries.length; index++) {
                    entry = listing.entries[index];
                    (function(entryPath, entryName, entryType, entryUrl, entryEditable, entrySize) {
                        row = document.createElement('tr');
                        row.setAttribute('data-admin-browser-row', '');
                        selectCell = document.createElement('td');
                        checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.setAttribute('data-admin-file-select', entryPath);
                        checkbox.setAttribute('aria-label', entryName);
                        checkbox.addEventListener('change', function() {
                            var selectedIndex = browserSelected.indexOf(entryPath);
                            if (this.checked && selectedIndex < 0) browserSelected.push(entryPath);
                            if (!this.checked && selectedIndex >= 0) browserSelected.splice(selectedIndex, 1);
                            updateBrowserActions()
                        });
                        selectCell.appendChild(checkbox);
                        row.appendChild(selectCell);
                        nameCell = document.createElement('td');
                        nameButton = document.createElement(entryType == 'directory' ? 'button' : 'a');
                        nameButton.className = 'myvibehtml-admin-file-link';
                        nameButton.textContent = entryName;
                        if (entryType == 'directory') {
                            nameButton.type = 'button';
                            nameButton.addEventListener('click', function() { loadListing(entryPath) })
                        } else {
                            nameButton.href = entryUrl || '#';
                            if (!entryEditable) { nameButton.target = '_blank'; nameButton.rel = 'noopener' }
                        }
                        nameWrap = addEntryIcon(nameCell, entryType == 'directory');
                        nameWrap.appendChild(nameButton);
                        row.appendChild(nameCell);
                        sizeCell = document.createElement('td');
                        sizeCell.textContent = entryType == 'directory' ? '—' : formatSize(entrySize || 0);
                        row.appendChild(sizeCell);
                        actions = document.createElement('td');
                        actionButton = function(label, handler) {
                            var button = document.createElement('button');
                            button.type = 'button';
                            button.textContent = label;
                            button.addEventListener('click', handler);
                            actions.appendChild(button)
                        };
                        actionButton('Copy', function() { clipboardPath = entryPath; if (paste) paste.hidden = false; setStatus('Copied: ' + entryPath, 'ok') });
                        actionButton('Duplicate', function() { operate('duplicate', {source: entryPath}) });
                        actionButton('Rename', function() { var name = window.prompt('New name', entryName); if (name && name != entryName) operate('rename', {source: entryPath, name: name}) });
                        actionButton('Delete', function() { if (window.confirm('Delete ' + entryName + '?')) operate('delete', {source: entryPath}) });
                        row.appendChild(actions);
                        browserList.appendChild(row)
                    }(entry.path, entry.name, entry.type, entry.url, entry.editable, entry.size))
                }
                updateBrowserActions()
            },
            renderPageListing = function(listing) {
                var index, entry, extension, row, selectCell, checkbox, nameCell, nameWrap, nameControl, meta, sizeCell, dateCell;
                if (!pageBrowserList) return;
                pageState.path = listing.path || '';
                pageState.selectedPath = '';
                if (pageBrowser) pageBrowser.setAttribute('data-admin-page-browser-path', pageState.path);
                var breadcrumb = document.querySelector('[data-admin-pages-breadcrumb]');
                if (breadcrumb) breadcrumb.textContent = '/' + (pageState.path ? pageState.path + '/' : '');
                pageBrowserList.textContent = '';
                for (index = 0; index < listing.entries.length; index++) {
                    entry = listing.entries[index];
                    extension = (entry.name.split('.').pop() || '').toLowerCase();
                    if (entry.type != 'directory' && !/^(html?|xhtml)$/.test(extension)) continue;
                    (function(entryPath, entryName, entryType, entryUrl, entrySize, entryDate) {
                        row = document.createElement('tr');
                        row.setAttribute('data-admin-page-row', '');
                        selectCell = document.createElement('td');
                        if (entryType != 'directory') {
                            checkbox = document.createElement('input');
                            checkbox.type = 'checkbox';
                            checkbox.setAttribute('data-admin-page-select', entryPath);
                            checkbox.setAttribute('aria-label', entryName);
                            checkbox.addEventListener('change', function() {
                                var other, selected = document.querySelectorAll('[data-admin-page-select]');
                                for (other = 0; other < selected.length; other++) if (selected[other] !== checkbox) selected[other].checked = false;
                                pageState.selectedPath = checkbox.checked ? entryPath : '';
                                updatePageActions()
                            });
                            selectCell.appendChild(checkbox)
                        }
                        row.appendChild(selectCell);
                        nameCell = document.createElement('td');
                        nameControl = document.createElement(entryType == 'directory' ? 'button' : 'a');
                        nameControl.className = 'myvibehtml-admin-file-link';
                        nameControl.textContent = entryName;
                        if (entryType == 'directory') {
                            nameControl.type = 'button';
                            nameControl.addEventListener('click', function() { loadListing(entryPath, 'pages') })
                        } else nameControl.href = entryUrl || '#';
                        nameWrap = addEntryIcon(nameCell, entryType == 'directory');
                        nameWrap.appendChild(nameControl);
                        row.appendChild(nameCell);
                        sizeCell = document.createElement('td');
                        sizeCell.textContent = entryType == 'directory' ? '—' : formatSize(entrySize || 0);
                        row.appendChild(sizeCell);
                        dateCell = document.createElement('td');
                        dateCell.textContent = entryDate ? new Date(entryDate * 1000).toLocaleString() : '—';
                        row.appendChild(dateCell);
                        pageBrowserList.appendChild(row)
                    }(entry.path, entry.name, entry.type, entry.url, entry.size, entry.date))
                }
                updatePageActions()
            },
            renderContentCatalog = function(catalog) {
                var index, item, row, cell, link, labels = {image: 'Image', text: 'Text', link: 'Link', button: 'Button'};
                if (!contentList) return;
                contentList.textContent = '';
                for (index = 0; index < catalog.items.length; index++) {
                    item = catalog.items[index];
                    row = document.createElement('tr');
                    cell = document.createElement('td'); cell.textContent = labels[item.kind] || item.kind; row.appendChild(cell);
                    cell = document.createElement('td'); link = document.createElement('a'); link.className = 'myvibehtml-admin-table-action'; link.href = item.url; link.textContent = item.file; cell.appendChild(link); row.appendChild(cell);
                    cell = document.createElement('td'); cell.textContent = item.detail || '—'; row.appendChild(cell);
                    cell = document.createElement('td'); cell.textContent = item.issue || 'OK'; cell.className = item.issue ? 'is-warning' : 'is-ok'; row.appendChild(cell);
                    contentList.appendChild(row)
                }
                if (!catalog.items.length) { row = document.createElement('tr'); cell = document.createElement('td'); cell.colSpan = 4; cell.className = 'myvibehtml-admin-empty'; cell.textContent = 'No matching content'; row.appendChild(cell); contentList.appendChild(row) }
            },
            loadContentCatalog = function() {
                request('catalog', {filter: contentFilter}).then(function(result) { renderContentCatalog(result.catalog); contentLoaded = true }).catch(function(error) { if (contentList) contentList.innerHTML = '<tr><td colspan="4" class="myvibehtml-admin-empty is-warning">' + error.message + '</td></tr>' })
            },
            renderMediaCatalog = function(media) {
                var index, item, card, preview, image, meta, strong, detail, link, replace, input, replaceButton, diff, isImage;
                if (!mediaGrid) return;
                mediaGrid.textContent = '';
                for (index = 0; index < media.items.length; index++) {
                    item = media.items[index];
                    card = document.createElement('article'); card.className = 'myvibehtml-admin-media-card'; card.setAttribute('data-media-path', item.relative);
                    preview = document.createElement('div'); preview.className = 'myvibehtml-admin-media-preview'; isImage = /^image\//.test(item.mime || '') || /^(avif|gif|jpe?g|png|svg|webp|ico)$/i.test(item.extension || ''); if (isImage) { image = document.createElement('img'); image.src = item.url; image.alt = item.name; image.loading = 'lazy'; preview.appendChild(image) } else { preview.textContent = item.mime || 'Media file'; preview.setAttribute('aria-label', item.mime || 'Media file') } card.appendChild(preview);
                    meta = document.createElement('div'); meta.className = 'myvibehtml-admin-media-meta'; strong = document.createElement('strong'); strong.textContent = item.name; meta.appendChild(strong);
                    detail = document.createElement('small'); detail.textContent = (item.mime || 'unknown') + ' · ' + (item.width && item.height ? item.width + '×' + item.height + ' · ' : '') + formatSize(item.size || 0) + ' · Alt: ' + (item.alt || 'missing'); meta.appendChild(detail);
                    replace = document.createElement('div'); replace.className = 'myvibehtml-admin-media-actions'; input = document.createElement('input'); input.type = 'file'; input.accept = '.' + item.extension; input.setAttribute('data-media-replace', ''); input.setAttribute('aria-label', 'Replace ' + item.name); replace.appendChild(input); replaceButton = document.createElement('button'); replaceButton.type = 'button'; replaceButton.textContent = 'Replace'; replaceButton.addEventListener('click', function() { if (input.files[0]) replaceMedia(item.relative, input.files[0], card, diff); }); replace.appendChild(replaceButton); meta.appendChild(replace);
                    diff = document.createElement('pre'); diff.className = 'myvibehtml-admin-media-diff'; diff.hidden = true; meta.appendChild(diff);
                    link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Open'; meta.appendChild(link); card.appendChild(meta); mediaGrid.appendChild(card)
                }
                if (!media.items.length) { var empty = document.createElement('p'); empty.className = 'myvibehtml-admin-empty'; empty.textContent = 'No media found'; mediaGrid.appendChild(empty) }
            },
            replaceMedia = function(path, file, card, diff) {
                var before = card.querySelector('img'), beforeUrl = before ? before.src : '', payload = new FormData();
                payload.append('admin_action', 'media_replace'); payload.append('token', token); payload.append('path', ''); payload.append('media_path', path); payload.append('file', file);
                if (diff) { diff.hidden = false; diff.textContent = 'Before: ' + beforeUrl + '\nAfter: ' + file.name + ' · ' + formatSize(file.size); }
                fetch(endpoint, {method: 'POST', headers: {'AJAX': '1'}, body: payload, credentials: 'same-origin'}).then(function(response) { return response.json().then(function(result) { if (result.token) token = result.token; if (!response.ok || !result.ok) throw new Error(result.error || 'replace_failed'); return result }) }).then(function(result) { renderMediaCatalog(result.media); }).catch(function(error) { if (diff) { diff.hidden = false; diff.textContent += '\nError: ' + error.message } })
            },
            loadMediaCatalog = function() {
                request('media', {}).then(function(result) { renderMediaCatalog(result.media); mediaLoaded = true }).catch(function(error) { if (mediaGrid) mediaGrid.innerHTML = '<p class="myvibehtml-admin-empty is-warning">' + error.message + '</p>' })
            },
            loadListing = function(path, mode) {
                var isPages = mode == 'pages';
                request('list', {path: path || ''}).then(function(result) {
                    if (isPages) { renderPageListing(result.listing); setPageStatus('', '') }
                    else { renderListing(result.listing); setStatus('', '') }
                }).catch(function(error) { if (isPages) setPageStatus(error.message, 'warning'); else setStatus(error.message, 'warning') })
            },
            operate = function(action, values, file, mode) {
                var isPages = mode == 'pages', path = isPages ? pageState.path : browserPath;
                values = values || {};
                if (typeof values.path == 'undefined') values.path = path;
                request(action, values, file).then(function(result) {
                    if (result.operation_id) { lastOperationId = result.operation_id; if (browserRollback) browserRollback.hidden = false }
                    if (isPages) { pageState.selectedPath = ''; loadListing(path, 'pages'); setPageStatus('Saved', 'ok') }
                    else { loadListing(path); setStatus('Saved', 'ok') }
                }).catch(function(error) { if (isPages) setPageStatus(error.message, 'warning'); else setStatus(error.message, 'warning') })
            },
            activate = function(name, updateUrl) {
                var targetName = name == 'files' ? 'browser' : name,
                    index, button, section;
                for (index = 0; index < buttons.length; index++) {
                    button = buttons[index];
                    button.setAttribute('aria-current', button.getAttribute('data-admin-nav') == name ? 'page' : 'false')
                }
                for (index = 0; index < sections.length; index++) {
                    section = sections[index];
                    section.hidden = section.getAttribute('data-admin-section') != targetName
                }
                if (updateUrl && window.history && window.history.replaceState) window.history.replaceState(null, '', '#' + name);
                body.removeAttribute('data-admin-sidebar-open');
                if (menu) menu.setAttribute('aria-expanded', 'false');
                if (targetName == 'browser') loadListing(browserPath);
                if (targetName == 'pages') loadListing(pageState.path, 'pages');
                if (targetName == 'content') loadContentCatalog();
                if (targetName == 'media') loadMediaCatalog()
            },
            initial = (window.location.hash || '#overview').slice(1);
        if (!document.querySelector('[data-admin-section="' + initial + '"]') && initial != 'files') initial = 'overview';
        for (var index = 0; index < buttons.length; index++) buttons[index].addEventListener('click', function() { activate(this.getAttribute('data-admin-nav'), true) });
        activate(initial, false);
        if (menu && sidebar) {
            menu.addEventListener('click', function() {
                var open = body.getAttribute('data-admin-sidebar-open') == 'true';
                body.setAttribute('data-admin-sidebar-open', open ? 'false' : 'true');
                menu.setAttribute('aria-expanded', open ? 'false' : 'true')
            });
            document.addEventListener('click', function(event) {
                if (body.getAttribute('data-admin-sidebar-open') == 'true' && event.target != sidebar && !sidebar.contains(event.target) && event.target != menu) {
                    body.removeAttribute('data-admin-sidebar-open');
                    menu.setAttribute('aria-expanded', 'false')
                }
            });
            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    body.removeAttribute('data-admin-sidebar-open');
                    menu.setAttribute('aria-expanded', 'false')
                }
            })
        }
        if (search) search.addEventListener('input', function() {
            var term = this.value.toLowerCase().replace(/^\s+|\s+$/g, ''), rows = document.querySelectorAll('[data-admin-file-row]');
            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) rows[rowIndex].hidden = !!term && rows[rowIndex].textContent.toLowerCase().indexOf(term) == -1
        });
        var upload = document.querySelector('[data-admin-upload]'), uploadSubmit = document.querySelector('[data-admin-upload-submit]');
        if (uploadSubmit && upload) uploadSubmit.addEventListener('click', function() { if (upload.files[0]) operate('upload', {}, upload.files[0]); else setStatus('Choose a file first', 'warning') });
        var mkdir = document.querySelector('[data-admin-mkdir]');
        if (mkdir) mkdir.addEventListener('click', function() { var name = window.prompt('Folder name'); if (name) operate('mkdir', {name: name}) });
        if (paste) paste.addEventListener('click', function() { if (clipboardPath) operate('duplicate', {source: clipboardPath}) });
        var up = document.querySelector('[data-admin-browser-up]');
        if (up) up.addEventListener('click', function() { loadListing(parentPath(browserPath)) });
        if (browserCopy) browserCopy.addEventListener('click', function() { if (browserSelected.length) { clipboardPaths = browserSelected.slice(); clipboardPath = clipboardPaths[0]; if (browserPaste) browserPaste.disabled = false; setStatus('Copied ' + clipboardPaths.length + ' item(s)', 'ok') } });
        if (browserPaste) browserPaste.addEventListener('click', function() { if (clipboardPaths.length) operate('duplicate', {sources: clipboardPaths}) });
        if (browserMove) browserMove.addEventListener('click', function() { if (browserSelected.length) { var destination = window.prompt('Destination folder relative to site root', browserPath); if (destination !== null) { destination = destination.replace(/^\/+|\/+$/g, ''); operate('move', {path: destination, sources: browserSelected.slice()}) } } });
        if (browserArchive || browserDownload) {
            var downloadSelected = function(action) { if (browserSelected.length) request(action, {path: browserPath, sources: browserSelected.slice()}).then(function(result) { if (result.download) window.location.href = result.download; if (result.operation_id) { lastOperationId = result.operation_id; if (browserRollback) browserRollback.hidden = false } }).catch(function(error) { setStatus(error.message, 'warning') }) };
            if (browserArchive) browserArchive.addEventListener('click', function() { downloadSelected('archive') });
            if (browserDownload) browserDownload.addEventListener('click', function() { downloadSelected('download') })
        }
        if (browserRollback) browserRollback.addEventListener('click', function() { if (lastOperationId) request('rollback', {operation_id: lastOperationId}).then(function() { browserRollback.hidden = true; lastOperationId = ''; loadListing(browserPath); setStatus('Rolled back', 'ok') }).catch(function(error) { setStatus(error.message, 'warning') }) });
        if (pageUp) pageUp.addEventListener('click', function() { if (pageState.path) loadListing(parentPath(pageState.path), 'pages') });
        if (pageCopy) pageCopy.addEventListener('click', function() { if (pageState.selectedPath) { pageState.clipboardPath = pageState.selectedPath; setPageStatus('Copied: ' + pageState.selectedPath, 'ok'); updatePageActions() } });
        if (pagePaste) pagePaste.addEventListener('click', function() { if (pageState.clipboardPath) operate('duplicate', {source: pageState.clipboardPath}, null, 'pages') });
        if (pageDuplicate) pageDuplicate.addEventListener('click', function() { if (pageState.selectedPath) operate('duplicate', {source: pageState.selectedPath}, null, 'pages') });
        if (pageRename) pageRename.addEventListener('click', function() { if (pageState.selectedPath) { var name = window.prompt('New name', pageState.selectedPath.split('/').pop()); if (name) operate('rename', {source: pageState.selectedPath, name: name}, null, 'pages') } });
        if (pageDelete) pageDelete.addEventListener('click', function() { if (pageState.selectedPath && window.confirm('Delete ' + pageState.selectedPath.split('/').pop() + '?')) operate('delete', {source: pageState.selectedPath}, null, 'pages') });
        if (pageUploadSubmit && pageUpload) pageUploadSubmit.addEventListener('click', function() { pageUpload.click() });
        if (pageUpload) pageUpload.addEventListener('change', function() {
            if (this.files[0]) operate('upload', {}, this.files[0], 'pages');
            this.value = ''
        });
        var pageDropzone = pageBrowser ? pageBrowser.querySelector('.myvibehtml-admin-table-wrap') : null;
        if (pageDropzone) {
            pageDropzone.addEventListener('dragover', function(event) { event.preventDefault(); pageDropzone.classList.add('is-dragover') });
            pageDropzone.addEventListener('dragleave', function(event) { if (event.target == pageDropzone) pageDropzone.classList.remove('is-dragover') });
            pageDropzone.addEventListener('drop', function(event) {
                var files = Array.prototype.slice.call(event.dataTransfer.files || []);
                event.preventDefault();
                pageDropzone.classList.remove('is-dragover');
                if (!files.length) return;
                var uploadDropped = function(index) {
                    if (index >= files.length) { loadListing(pageState.path, 'pages'); setPageStatus('Uploaded', 'ok'); return }
                    request('upload', {path: pageState.path}, files[index]).then(function() { uploadDropped(index + 1) }).catch(function(error) { setPageStatus(error.message, 'warning') })
                };
                uploadDropped(0)
            })
        }
        if (pageMkdir) pageMkdir.addEventListener('click', function() { var name = window.prompt('Folder name'); if (name) operate('mkdir', {name: name}, null, 'pages') });
        var contentFilters = document.querySelectorAll('[data-admin-content-filter]');
        for (var filterIndex = 0; filterIndex < contentFilters.length; filterIndex++) contentFilters[filterIndex].addEventListener('click', function() {
            contentFilter = this.getAttribute('data-admin-content-filter') || 'all';
            for (var buttonIndex = 0; buttonIndex < contentFilters.length; buttonIndex++) contentFilters[buttonIndex].setAttribute('aria-pressed', contentFilters[buttonIndex] === this ? 'true' : 'false');
            loadContentCatalog()
        });
        if (contentSearch) contentSearch.addEventListener('input', function() {
            var term = this.value.toLowerCase().replace(/^\s+|\s+$/g, ''), rows = contentList ? contentList.querySelectorAll('tr') : [];
            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) rows[rowIndex].hidden = !!term && rows[rowIndex].textContent.toLowerCase().indexOf(term) < 0
        });
        decoratePageToolbar();
        updatePageActions();
        updateBrowserActions()
    })
}());
