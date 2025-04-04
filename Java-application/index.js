const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalDisplay = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];

cartBtn.addEventListener('click', () => {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.item');
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));

        const existingItem = cart.find(i => i.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity}`;
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const span = document.createElement('span');
        span.textContent = ` $${itemTotal.toFixed(2)}`;
        li.appendChild(span);

        cartItemsContainer.appendChild(li);
    });

    cartTotalDisplay.textContent = total.toFixed(2);
    cartBtn.textContent = `Cart (${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    const confirmed = confirm(`Your total is $${total}. Do you want to proceed to checkout?`);

    if (confirmed) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
    }
});
