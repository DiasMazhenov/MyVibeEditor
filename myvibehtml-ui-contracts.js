/* MyVibeHTML v0.69 UI contracts */
(function(root) {
    var storageStatus = function(action) {
            var documentObject = root.document,
                status = documentObject && documentObject.getElementById('myvibehtml-storage-status'),
                russian = documentObject && documentObject.documentElement && documentObject.documentElement.lang == 'ru';
            if (!documentObject || !documentObject.body) return;
            if (!status) {
                status = documentObject.createElement('div');
                status.id = 'myvibehtml-storage-status';
                status.setAttribute('role', 'status');
                status.setAttribute('aria-live', 'polite');
                status.hidden = true;
                documentObject.body.appendChild(status)
            }
            status.textContent = russian ? 'Локальное хранилище недоступно: изменения могут не сохраниться.' : 'Local storage is unavailable: changes may not be saved.';
            status.setAttribute('data-storage-action', action || 'write');
            status.hidden = false;
            if (status.__myvibeTimer) root.clearTimeout(status.__myvibeTimer);
            status.__myvibeTimer = root.setTimeout(function() { status.hidden = true }, 8000)
        },
        focusTrap = function(container) {
            var previousFocus = root.document.activeElement,
                focusableSelector = 'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])',
                onKeyDown = function(event) {
                    if (event.key != 'Tab') return;
                    var focusable = container.querySelectorAll(focusableSelector),
                        visible = [],
                        index;
                    for (index = 0; index < focusable.length; index++) if (!focusable[index].disabled && !focusable[index].hidden && focusable[index].getAttribute('aria-hidden') != 'true') visible.push(focusable[index]);
                    if (!visible.length) return;
                    if (visible.length == 1) {
                        event.preventDefault();
                        visible[0].focus();
                        return
                    }
                    if (event.shiftKey && root.document.activeElement == visible[0]) {
                        event.preventDefault();
                        visible[visible.length - 1].focus()
                    } else if (!event.shiftKey && root.document.activeElement == visible[visible.length - 1]) {
                        event.preventDefault();
                        visible[0].focus()
                    }
                };
            if (!container || !container.addEventListener) return function() {};
            container.addEventListener('keydown', onKeyDown);
            return function() {
                container.removeEventListener('keydown', onKeyDown);
                if (previousFocus && previousFocus.focus && previousFocus.ownerDocument == root.document) previousFocus.focus()
            }
        };
    root.MyVibeHTMLUIContracts = {
        generateToken: function() {
            var bytes = new Uint8Array(32), hex = '';
            if (root.crypto && root.crypto.getRandomValues) {
                root.crypto.getRandomValues(bytes);
                for (var index = 0; index < bytes.length; index++) hex += ('00' + bytes[index].toString(16)).slice(-2);
                return hex
            }
            return String(new Date().getTime()) + '-' + Math.floor(Math.random() * 2147483648).toString(16)
        },
        storageGet: function(owner, storageName, key) {
            try { return owner[storageName].getItem(key) } catch (error) { storageStatus('read'); return null }
        },
        storageSet: function(owner, storageName, key, value) {
            try { owner[storageName].setItem(key, value); return true } catch (error) { storageStatus('write'); return false }
        },
        storageRemove: function(owner, storageName, key) {
            try { owner[storageName].removeItem(key); return true } catch (error) { storageStatus('remove'); return false }
        },
        storageStatus: storageStatus,
        focusTrap: focusTrap
    }
}(window));
