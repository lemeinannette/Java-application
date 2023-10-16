// Function to fetch and populate the coffee menu from JSON
function fetchAndPopulateMenu() {
    fetch('http://localhost:5000/menu') // Fetch the JSON file
        .then((response) => response.json()) // Parse the JSON data
        .then((data) => {
            const menuList = document.getElementById('menu');

            data.forEach((coffee) => {
                const menuItem = document.createElement('li');
                menuItem.innerHTML = `
                    <span class="coffee-name">${coffee.name}</span> - ${coffee.description}
                    <img src="${coffee.image}" alt="${coffee.name}" class="coffee-image">
                    <button class="buy-button" onclick="buyCoffee('${coffee.name}')">Buy</button>
                `;

                menuList.appendChild(menuItem);
            });
        })
        .catch((error) => {
            console.error('Error fetching coffee menu data:', error);
        });
}

// JavaScript code for handling coffee purchases
function buyCoffee(coffeeName) {
    alert(`You have purchased a ${coffeeName}! Enjoy your coffee.`);
    // You can add more functionality here, such as processing orders.
}

// Populate the coffee menu when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchAndPopulateMenu();
});

