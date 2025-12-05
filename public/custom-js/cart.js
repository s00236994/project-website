// get stored values
let totalItems = parseInt(localStorage.getItem('checkout')) || 0;
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// update items count
document.getElementById('cart-count').innerText = totalItems;

// update total price on page
document.getElementById('cart-total').innerText = "€" + totalPrice.toFixed(2);

// message area
let cartItems = document.getElementById('cart-items');

if (totalItems > 0) {
    cartItems.innerHTML = `<p>You have ${totalItems} item(s) in your cart.</p>`;
} else {
    cartItems.innerHTML = `<p>Your cart is empty.</p>`;
}
