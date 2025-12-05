document.getElementById('user-login').addEventListener('submit', (event) => {
    event.preventDefault();

    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;

    var storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        localStorage.setItem('loggedIn', 1);
        alert("Login successful!");
        window.location.href = "/shop"; // redirect to shop page
    } else {
        alert("Invalid login details");
        localStorage.setItem('loggedIn', 0);
        document.getElementById("loginerror").style.display = "block";
    }
});
