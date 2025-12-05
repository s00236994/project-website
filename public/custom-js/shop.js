document.addEventListener('DOMContentLoaded', function() {
    const checkoutDisplay = document.getElementById('checkout');

    for (let i = 1; i <= 6; i++) {
        const addButton = document.getElementById('addtocart' + i);
        if (addButton) {
            addButton.addEventListener('click', (event) => {
                event.preventDefault();
                let total = parseInt(localStorage.getItem('checkout'));
                total++;
                localStorage.setItem('checkout', total);
                checkoutDisplay.innerHTML = total;
            });
        }
    }
});
