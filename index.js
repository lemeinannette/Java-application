// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop - 50, // Adjust scrolling position
            });
        }
    });
});

// Highlight the active section in the navigation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjust top position
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            const navLinks = document.querySelectorAll('nav a');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Display a message on clicking the menu items
document.querySelectorAll('#menu li').forEach(menuItem => {
    menuItem.addEventListener('click', function() {
        const itemName = this.textContent;
        alert(`You selected: ${itemName}`);
    });
});

// Validate phone number input
const phoneInput = document.querySelector('input[type="tel"]');
phoneInput.addEventListener('input', function() {
    const value = phoneInput.value;
    const valid = /^\d{10}$/.test(value); // Valid phone number has 10 digits
    if (!valid) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit phone number');
    } else {
        phoneInput.setCustomValidity('');
    }
});
