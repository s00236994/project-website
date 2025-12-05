document.addEventListener('DOMContentLoaded', function () {
    const checkoutDisplay = document.getElementById('checkout');

    // indiv product prices
    const prices = {
        addtocart1: 49.99,
        addtocart2: 49.99,
        addtocart3: 5.99,
        addtocart4: 19.99,
        addtocart5: 1.99,
        addtocart6: 1.99
    };

    // load totals or set defaults
    let totalItems = parseInt(localStorage.getItem('checkout')) || 0;
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    checkoutDisplay.innerHTML = totalItems;

    // add event listeners
    for (let i = 1; i <= 6; i++) {
        const id = "addtocart" + i;
        const button = document.getElementById(id);

        if (button) {
            button.addEventListener('click', (event) => {
                event.preventDefault();

                totalItems++;
                totalPrice += prices[id];

                localStorage.setItem('checkout', totalItems);
                localStorage.setItem('totalPrice', totalPrice.toFixed(2));

                checkoutDisplay.innerHTML = totalItems;
            });
        }
    }
});
