// Sample data for coffee items
const coffeeItems = [
    {
        name: "Espresso",
        image: "https://brewespressocoffee.com/wp-content/uploads/2022/01/Cappuccino-and-other-espresso-drinks.jpg.webp",
        description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
        price: "$2.50",
    },
    {
        name: "Cappuccino",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
        description: "An espresso-based coffee made with equal parts of espresso, steamed milk, and milk foam.",
        price: "$3.50",
    },
    {
        name: "Latte",
        image: "https://thebigmansworld.com/wp-content/uploads/2021/03/oat-milk-latte4.jpg",
        description: "A coffee drink made with espresso and steamed milk, often topped with a small amount of milk foam.",
        price: "$4.00",
    },
    {
        name: "American Coffee",
        image: "https://pontevecchiosrl.it/wp-content/uploads/2021/03/caffe-americano-in-casa.jpg",
        description: "A simple, brewed coffee made by diluting espresso with hot water, resulting in a mild, smooth flavor.",
        price: "$2.00",
    },
    {
        name: "Mocha",
        image: "https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg",
        description: "A chocolate-flavored espresso drink made with espresso, hot milk, and cocoa, often topped with whipped cream.",
        price: "$4.50",
    },
    {
        name: "Caramel Macchiato",
        image: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
        description: "An espresso-based coffee made with vanilla syrup, steamed milk, and caramel drizzle.",
        price: "$4.50",
    },
];

// Function to generate coffee cards
function generateCoffeeCards() {
    const coffeeCardsContainer = document.querySelector('.coffee-cards');

    coffeeItems.forEach((item, index) => {
        const coffeeCard = document.createElement('div');
        coffeeCard.className = 'coffee-card';

        const cardContent = `
            <h3>${index + 1}. ${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.description}</p>
            <p>Price: ${item.price}</p>
            <button onclick="buyCoffee('${item.name}')">Buy</button>
        `;

        coffeeCard.innerHTML = cardContent;
        coffeeCardsContainer.appendChild(coffeeCard);
    });
}

// JavaScript function to handle the "Buy" button
function buyCoffee(coffeeName) {
    alert(`You've purchased a ${coffeeName}! Enjoy your coffee!`);
}

// Call the function to generate coffee cards when the page loads
window.addEventListener('load', generateCoffeeCards);
