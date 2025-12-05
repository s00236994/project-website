if (localStorage.getItem('checkout') === null) {
    localStorage.setItem('checkout', 0);
}

var checkout = localStorage.getItem('checkout');
var checkoutIcon = document.querySelector('#checkout');
if(checkoutIcon) {
    checkoutIcon.innerHTML = checkout;
}

var loginlogout = document.getElementById('loginlogout');
if (loginlogout) {
    loginlogout.addEventListener('click', (event) => {
        event.preventDefault();
        var loggedin = localStorage.getItem('loggedIn');
        if (loggedin == 1) {
            localStorage.setItem('loggedIn', 0);
            window.location.href = "/";
        } else {
            window.location.href = "login";
        }
    });
}

function checkLoginStatus() {
    var loggedin = localStorage.getItem('loggedIn');
    var userdetailsLink = document.getElementById("userdetails");

    if (loggedin == 1) {
        if(loginlogout) loginlogout.innerHTML = "Logout";
        if(userdetailsLink) userdetailsLink.style.display = "inline-block";
    } else {
        if(loginlogout) loginlogout.innerHTML = "Login";
        if(userdetailsLink) userdetailsLink.style.display = "none";
    }
}
checkLoginStatus();
