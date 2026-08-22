/* MyVibeHTML v0.95 transport primitives */
(function(root) {
    var documentObject = root.document;

    function writeCookie(name, value, lifetimeMinutes, path) {
        var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (lifetimeMinutes) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (1000 * 60 * lifetimeMinutes));
            cookie += ';expires=' + expires.toUTCString()
        }
        if (path) cookie += ';path=' + encodeURIComponent(path).split('%2F').join('/');
        documentObject.cookie = cookie
    }

    function removeCookie(name, path) {
        writeCookie(name, 1, -1, path)
    }

    function readCookie(name) {
        var match = documentObject.cookie.match('(^|;) ?' + name + ' ?= ?([^;]*)(;|$)');
        if (match) return match[2]
    }

    function utf8Encode(value) {
        var encoded = '', characterCode;
        value = value.replace(/\r\n/g, '\n');
        for (var index = 0; index < value.length; index++) {
            characterCode = value.charCodeAt(index);
            if (characterCode < 128) encoded += String.fromCharCode(characterCode);
            else if (characterCode < 2048) {
                encoded += String.fromCharCode((characterCode >> 6) | 192);
                encoded += String.fromCharCode((characterCode & 63) | 128)
            } else {
                encoded += String.fromCharCode((characterCode >> 12) | 224);
                encoded += String.fromCharCode(((characterCode >> 6) & 63) | 128);
                encoded += String.fromCharCode((characterCode & 63) | 128)
            }
        }
        return encoded
    }

    function rotateLeft(value, shift) {
        return (value << shift) | (value >>> (32 - shift))
    }

    function wordToHex(value) {
        var hex = '';
        for (var index = 7; index >= 0; index--) hex += ((value >>> (index * 4)) & 0x0f).toString(16);
        return hex
    }

    function sha1(value) {
        var encoded = utf8Encode(value),
            length = encoded.length,
            words = [],
            schedule = new Array(80),
            index,
            block,
            a,
            b,
            c,
            d,
            e,
            temporary,
            h0 = 0x67452301,
            h1 = 0xEFCDAB89,
            h2 = 0x98BADCFE,
            h3 = 0x10325476,
            h4 = 0xC3D2E1F0;
        for (index = 0; index < length - 3; index += 4) words.push(encoded.charCodeAt(index) << 24 | encoded.charCodeAt(index + 1) << 16 | encoded.charCodeAt(index + 2) << 8 | encoded.charCodeAt(index + 3));
        switch (length % 4) {
            case 0: index = 0x080000000; break;
            case 1: index = encoded.charCodeAt(length - 1) << 24 | 0x0800000; break;
            case 2: index = encoded.charCodeAt(length - 2) << 24 | encoded.charCodeAt(length - 1) << 16 | 0x08000; break;
            case 3: index = encoded.charCodeAt(length - 3) << 24 | encoded.charCodeAt(length - 2) << 16 | encoded.charCodeAt(length - 1) << 8 | 0x80; break
        }
        words.push(index);
        while (words.length % 16 != 14) words.push(0);
        words.push(length >>> 29);
        words.push((length << 3) & 0x0ffffffff);
        for (block = 0; block < words.length; block += 16) {
            for (index = 0; index < 16; index++) schedule[index] = words[block + index];
            for (index = 16; index <= 79; index++) schedule[index] = rotateLeft(schedule[index - 3] ^ schedule[index - 8] ^ schedule[index - 14] ^ schedule[index - 16], 1);
            a = h0;
            b = h1;
            c = h2;
            d = h3;
            e = h4;
            for (index = 0; index <= 19; index++) {
                temporary = (rotateLeft(a, 5) + ((b & c) | (~b & d)) + e + schedule[index] + 0x5A827999) & 0x0ffffffff;
                e = d; d = c; c = rotateLeft(b, 30); b = a; a = temporary
            }
            for (index = 20; index <= 39; index++) {
                temporary = (rotateLeft(a, 5) + (b ^ c ^ d) + e + schedule[index] + 0x6ED9EBA1) & 0x0ffffffff;
                e = d; d = c; c = rotateLeft(b, 30); b = a; a = temporary
            }
            for (index = 40; index <= 59; index++) {
                temporary = (rotateLeft(a, 5) + ((b & c) | (b & d) | (c & d)) + e + schedule[index] + 0x8F1BBCDC) & 0x0ffffffff;
                e = d; d = c; c = rotateLeft(b, 30); b = a; a = temporary
            }
            for (index = 60; index <= 79; index++) {
                temporary = (rotateLeft(a, 5) + (b ^ c ^ d) + e + schedule[index] + 0xCA62C1D6) & 0x0ffffffff;
                e = d; d = c; c = rotateLeft(b, 30); b = a; a = temporary
            }
            h0 = (h0 + a) & 0x0ffffffff;
            h1 = (h1 + b) & 0x0ffffffff;
            h2 = (h2 + c) & 0x0ffffffff;
            h3 = (h3 + d) & 0x0ffffffff;
            h4 = (h4 + e) & 0x0ffffffff
        }
        return (wordToHex(h0) + wordToHex(h1) + wordToHex(h2) + wordToHex(h3) + wordToHex(h4)).toLowerCase()
    }

    function base64Encode(value) {
        return btoa(encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, function(match, hex) {
            return String.fromCharCode('0x' + hex)
        }))
    }

    function base64Decode(value) {
        try {
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            while (value.length % 4) value += '=';
            return decodeURIComponent(Array.prototype.map.call(atob(value), function(character) {
                return '%' + ('00' + character.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
        } catch (error) {
            return ''
        }
    }

    function base64UrlEncode(value) {
        return base64Encode(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }

    function ajaxRequest(payload, onSuccess, onError, onTimeout, onProgress, cancel) {
        var request = new XMLHttpRequest();
        if (cancel) {
            onTimeout.call(request);
            return
        }
        request.open('POST', root.location.href, true);
        request.setRequestHeader('AJAX', 1);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    root.clearTimeout(timeoutId);
                    onSuccess.call(request, request.responseText)
                } else if (request.status >= 400) {
                    root.clearTimeout(timeoutId);
                    onError.call(request, request.responseText)
                }
            }
        };
        if (payload.charAt) {
            var timeoutId = root.setTimeout(function() {
                request.onreadystatechange = function() {};
                onTimeout.call(request)
            }, 20000);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        } else {
            var resetTimeout = function() {
                    return root.setTimeout(function() {
                        request.onreadystatechange = function() {};
                        request.upload.onprogress = function() {};
                        onTimeout.call(request)
                    }, 20000)
                },
                timeoutId = resetTimeout(),
                loadedBytes = 0;
            request.upload.onprogress = function(event) {
                if (event.loaded > loadedBytes) {
                    loadedBytes = event.loaded;
                    root.clearTimeout(timeoutId);
                    onProgress.call(request, loadedBytes, event.total)
                } else timeoutId = resetTimeout()
            };
            onProgress.call(request, 0, 0)
        }
        request.send(payload)
    }

    var uiContracts = root.MyVibeHTMLUIContracts;
    root.MyVibeHTMLTransport = {
        writeCookie: writeCookie,
        removeCookie: removeCookie,
        readCookie: readCookie,
        sha1: sha1,
        base64Decode: base64Decode,
        base64UrlEncode: base64UrlEncode,
        ajaxRequest: ajaxRequest,
        generateToken: uiContracts && uiContracts.generateToken
    }
}(window));
