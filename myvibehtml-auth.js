/* MyVibeHTML v0.64 auth flow */
(function(root) {
    var documentObject = root.document,
        locationObject = root.location,
        transport = root.MyVibeHTMLTransport || {},
        ajaxRequest = transport.ajaxRequest,
        writeCookie = transport.writeCookie,
        productPrefix = 'myvibehtml',
        checkCookie = productPrefix + '_check';

    function data(node, name) {
        return node.getAttribute('data-' + name) || ''
    }

    function revealStatus(status) {
        status.style.display = 'block';
        status.style.opacity = ''
    }

    function bootAuthentication() {
        var authPage = documentObject.querySelector('#a');
        if (!authPage || !ajaxRequest || !writeCookie) return;

        var loginButton = authPage.querySelector('input[type="button"]'),
            passwordInput = authPage.querySelector('input[type="password"]'),
            passwordToggle = passwordInput.nextElementSibling,
            authStatus = authPage.querySelector('p samp'),
            attemptList = authPage.querySelector('ol'),
            attemptTemplate = attemptList.removeChild(attemptList.firstElementChild),
            maxAttempts = parseInt(data(attemptList, 'cp'), 10) || 0,
            failedAttempts = parseInt(data(attemptList, 'cq'), 10) || 0;

        function setStatus(message, state) {
            authStatus.textContent = message;
            authStatus.className = state || '';
            revealStatus(authStatus)
        }

        function updateLoginButton() {
            loginButton.disabled = passwordInput.value.length === 0
        }

        function togglePasswordVisibility() {
            var visible = passwordInput.type === 'text';
            passwordInput.type = visible ? 'password' : 'text';
            this.className = visible ? '' : 'e';
            this.title = data(this, visible ? 'bx' : 'by');
            this.setAttribute('aria-label', this.title)
        }

        function restoreLoginControls() {
            passwordInput.disabled = false;
            passwordInput.focus();
            passwordInput.addEventListener('input', updateLoginButton)
        }

        function reloadAfterAuthentication(systemUrl) {
            var encodedSystemUrl = root.encodeURIComponent(systemUrl).split('%2F').join('/');
            if (locationObject.href.indexOf(encodedSystemUrl) !== -1) {
                locationObject.reload(true);
                return
            }
            var systemPath = systemUrl.split('/'),
                hostname = locationObject.hostname.replace('www.', '');
            if (systemPath.length > 3 && hostname.indexOf(systemPath[1]) === 0 && hostname.split('.').length > 2) locationObject.href = locationObject.protocol + '//' + hostname.slice(systemPath[1].length + 1) + systemUrl;
            else locationObject.reload(true)
        }

        function submitLogin(password) {
            setStatus(data(authStatus, 'cr'), 'b');
            ajaxRequest('password=' + root.encodeURIComponent(password), function() {
                var systemUrl = data(authStatus, 'cl');
                writeCookie(checkCookie, 1, false, systemUrl);
                setStatus(data(authStatus, 'cs'), 'c');
                reloadAfterAuthentication(systemUrl)
            }, function() {
                restoreLoginControls();
                authStatus.className = 'd';
                if (!this.getResponseHeader('X-a')) {
                    setStatus(data(authStatus, 'ct'), 'd');
                    failedAttempts += 1;
                    attemptList.setAttribute('data-cq', failedAttempts);
                    if (failedAttempts >= maxAttempts) locationObject.reload(true);
                    else attemptList.appendChild(attemptList.firstElementChild).className = 'a'
                } else {
                    updateLoginButton();
                    setStatus(data(authStatus, 'am'), 'd')
                }
            }, function() {
                restoreLoginControls();
                setStatus(data(authStatus, 'al'), 'd')
            })
        }

        function startLogin() {
            if (loginButton.disabled) return;
            passwordInput.focus();
            passwordInput.disabled = true;
            loginButton.disabled = true;
            setStatus(data(authStatus, 'az'), 'b');
            submitLogin(passwordInput.value)
        }

        for (var attemptIndex = 0; attemptIndex < maxAttempts; attemptIndex++) {
            var attemptRow = attemptTemplate.cloneNode(true);
            if (attemptIndex >= maxAttempts - failedAttempts) attemptRow.className = 'a';
            attemptList.appendChild(attemptRow)
        }

        var systemUrl = data(authStatus, 'cl'),
            encodedSystemUrl = root.encodeURIComponent(systemUrl).split('%2F').join('/');
        if (locationObject.href.indexOf(encodedSystemUrl) === -1) {
            authStatus.className = 'd';
            revealStatus(authStatus)
        } else if (loginButton.value.indexOf('{') !== -1) {
            setStatus('Problem with parse_ini_file', 'd')
        }
        attemptList.style.display = 'block';
        passwordInput.focus();
        passwordToggle.title = data(passwordToggle, 'bx');
        passwordToggle.setAttribute('aria-label', passwordToggle.title);
        passwordToggle.addEventListener('mousedown', togglePasswordVisibility);
        passwordToggle.addEventListener('keydown', function(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                togglePasswordVisibility.call(this)
            }
        });
        loginButton.addEventListener('click', startLogin);
        passwordInput.addEventListener('input', updateLoginButton);
        passwordInput.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) {
                passwordInput.removeEventListener('input', updateLoginButton);
                startLogin()
            }
        })
    }

    documentObject.addEventListener('DOMContentLoaded', bootAuthentication)
}(window));
