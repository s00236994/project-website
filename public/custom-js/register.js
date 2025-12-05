document.getElementById('user-register').addEventListener('submit', (event) => {
    event.preventDefault();

    // get form values
    var firstName = document.getElementById('firstNameID').value;
    var lastName = document.getElementById('lastNameID').value;
    var email = document.getElementById('emailID').value;
    var password = document.getElementById('passwordID').value;
    var dob = document.getElementById('dobID').value;
    var address = document.getElementById('addressID').value;

    // store user in localStorage
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dob: dob,
        address: address
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert("Registration successful! You can now login.");
    window.location.href = "/login"; // redirect to login page
});
