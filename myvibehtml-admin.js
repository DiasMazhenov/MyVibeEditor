/* MyVibeHTML v0.78 admin page interactions. */
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
            token = body.getAttribute('data-admin-token') || '',
            setStatus = function(message, state) {
                var status = document.querySelector('[data-admin-browser-status]');
                if (status) {
                    status.textContent = message || '';
                    status.className = state ? 'is-' + state : ''
                }
            },
            endpoint = window.location.pathname + window.location.search,
            request = function(action, values, file) {
                var payload, key;
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
            renderListing = function(listing) {
                var index, entry, row, nameCell, nameButton, meta, actions, actionButton;
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
                    const entryPath = entry.path;
                    const entryName = entry.name;
                    row = document.createElement('tr');
                    row.setAttribute('data-admin-browser-row', '');
                    nameCell = document.createElement('td');
                    nameButton = document.createElement(entry.type == 'directory' ? 'button' : 'a');
                    nameButton.className = 'myvibehtml-admin-file-link';
                    nameButton.textContent = entryName;
                    if (entry.type == 'directory') {
                        nameButton.type = 'button';
                        nameButton.addEventListener('click', function() { loadListing(entryPath) })
                    } else {
                        nameButton.href = entry.url || '#';
                        if (!entry.editable) { nameButton.target = '_blank'; nameButton.rel = 'noopener' }
                    }
                    nameCell.appendChild(nameButton);
                    meta = document.createElement('small');
                    meta.textContent = entry.type == 'directory' ? 'Folder' : (entryName.split('.').pop() || 'File').toUpperCase();
                    nameCell.appendChild(meta);
                    row.appendChild(nameCell);
                    var sizeCell = document.createElement('td');
                    sizeCell.textContent = entry.type == 'directory' ? '—' : formatSize(entry.size || 0);
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
                }
            },
            loadListing = function(path) {
                request('list', {path: path || ''}).then(function(result) { renderListing(result.listing); setStatus('', '') }).catch(function(error) { setStatus(error.message, 'warning') })
            },
            operate = function(action, values, file) {
                values.path = browserPath;
                request(action, values, file).then(function() { loadListing(browserPath); setStatus('Saved', 'ok') }).catch(function(error) { setStatus(error.message, 'warning') })
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
                if (targetName == 'browser') loadListing(browserPath)
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
        if (up) up.addEventListener('click', function() { var parts = browserPath.split('/'); parts.pop(); loadListing(parts.join('/')) });
    })
}());
