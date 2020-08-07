function checkCookie() {
    var remember = getCookie('remember');
    if (remember == 'true') {
        window.location.href = 'welcome.html';
    }
}

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


function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + ";path=/;";
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    const cb = document.getElementById('remember');

    if (username == '') {
        alert("Enter username.");
    }
    else if (password == '') {
        alert("Enter the password");
    }
    else {

        if (username == "LTI" && password == "123") {

            // encrypt Username and Password
            var encryptUsername = CryptoJS.AES.encrypt(username, "usernamePass");
            var encryptPassword = CryptoJS.AES.encrypt(password, "passwordPass");

            // if 'Remember Me' check box is checked then ecrypt and store data in cookie
            if (cb.checked) {
                setCookie('username', encryptUsername, 1);
                setCookie('password', encryptPassword, 1);
                setCookie('remember', 'true', 1);
                window.location.href = 'welcome.html';
            }
            else {
                setCookie('username', encryptUsername);
                window.location.href = 'welcome.html';
            }
        }
        else {
            document.getElementById("alertText").innerHTML = "Invalid Username / Password. Try Again!";
        }
    }
}	