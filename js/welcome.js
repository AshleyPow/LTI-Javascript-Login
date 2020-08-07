function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loadData() {
    var username = getCookie('username');
    var decryptedBytes = CryptoJS.AES.decrypt(username, "usernamePass");
    var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('welcomeMsg').innerHTML = 'Welcome Back, ' + plaintext;
}