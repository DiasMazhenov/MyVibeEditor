/* MyVibeHTML v0.62 UI contracts */
(function(root) {
    root.MyVibeHTMLUIContracts = {
        generateToken: function() {
            var bytes = new Uint8Array(32), hex = '';
            if (root.crypto && root.crypto.getRandomValues) {
                root.crypto.getRandomValues(bytes);
                for (var index = 0; index < bytes.length; index++) hex += ('00' + bytes[index].toString(16)).slice(-2);
                return hex
            }
            return String(new Date().getTime()) + '-' + Math.floor(Math.random() * 2147483648).toString(16)
        }
    }
}(window));
