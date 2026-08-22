/* MyVibeHTML v0.91 admin page interactions. */
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
                    for (key in values) payload.append(key, values[key])
                } else {
                    payload = new URLSearchParams();
                    payload.append('admin_action', action);
                    payload.append('token', token);
                    for (key in values) payload.append(key, values[key])
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
            renderListing = function(listing) {
                var index, entry, row, nameCell, nameWrap, nameButton, meta, actions, actionButton, sizeCell;
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
                if (browser) browser.setAttribute('data-admin-browser-path', browserPath);
                var breadcrumb = document.querySelector('[data-admin-browser-breadcrumb]');
                if (breadcrumb) breadcrumb.textContent = '/' + (browserPath ? browserPath + '/' : '');
                var up = document.querySelector('[data-admin-browser-up]');
                if (up) up.disabled = !listing.parent && listing.parent !== '';
                browserList.textContent = '';
                for (index = 0; index < listing.entries.length; index++) {
                    entry = listing.entries[index];
                    (function(entryPath, entryName, entryType, entryUrl, entryEditable, entrySize) {
                        row = document.createElement('tr');
                        row.setAttribute('data-admin-browser-row', '');
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
                        if (entryType != 'directory') {
                            meta = document.createElement('small');
                            meta.textContent = (entryName.split('.').pop() || 'File').toUpperCase();
                            nameCell.appendChild(meta)
                        }
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
                values.path = path;
                request(action, values, file).then(function() {
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
                if (targetName == 'pages') loadListing(pageState.path, 'pages')
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
        decoratePageToolbar();
        updatePageActions()
    })
}());
