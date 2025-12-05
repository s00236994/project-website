// Get cart from localStorage
var checkout = localStorage.getItem('checkout') || 0;

// Display total items
document.getElementById('cart-count').innerText = checkout;

// Display a simple message for items
var cartItems = document.getElementById('cart-items');
if(checkout > 0){
    cartItems.innerHTML = `<p>You have ${checkout} item(s) in your cart.</p>`;
}else{
    cartItems.innerHTML = `<p>Your cart is empty.</p>`;
}
