var checkoutBtn = document.getElementById('buy-now');

var paymentSuccess = document.getElementById("payment-success");
var paymentFailure = document.getElementById("payment-failure");

// hide alerts initially
paymentSuccess.style.display = 'none';
paymentFailure.style.display = 'none';

// check if user is logged in
var loggedIn = localStorage.getItem('loggedIn');
if (loggedIn != 1) {
    window.location.href = "/login"; // redirect if not logged in
}

checkoutBtn.addEventListener("click", (event) => {
    event.preventDefault();

    var cardNumber = document.getElementById('cardNumber').value;
    var cardCvv = document.getElementById('cardCvv').value;

    if (cardNumber === "1234 1234 1234 1234" && cardCvv === "123") {
        alert("Payment successful!");
        
        paymentFailure.style.display = 'none';
        paymentSuccess.style.display = 'block';

        // reset cart
        localStorage.setItem('checkout', 0);    
        localStorage.setItem('totalPrice', 0);  // important
        document.querySelector('#checkout').innerHTML = 0;

        // redirect to payment success page
        window.location.href = "/successful";

    } else {
        alert("Payment failed!");
        paymentFailure.style.display = 'block';
        paymentSuccess.style.display = 'none';
    }
});
