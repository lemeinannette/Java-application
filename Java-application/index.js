let cart = [];
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const name = item.getAttribute("data-name");
        const price = parseFloat(item.getAttribute("data-price"));

        const existingItem = cart.find(i => i.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

// Open cart modal
cartBtn.addEventListener("click", () => {
    cartModal.style.display = "block";
});

// Close cart modal
closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Update cart display
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
    cartBtn.textContent = `Cart (${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
}
