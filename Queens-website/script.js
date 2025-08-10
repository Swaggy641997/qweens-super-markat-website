// ===============================
// Background Images Rotation
// ===============================

// Select the hero section element where background images will rotate
const hero = document.getElementById("hero");

// Array of background image paths
const images = [
  "image/julia-zolotova-M_xIaxQE3Ms-unsplash.jpg",
  "image/jacopo-maiarelli--gOUx23DNks-unsplash.jpg",
  "image/eiliv-aceron-YlAmh_X_SsE-unsplash.jpg",
];

// Current image index
let current = 0;

// Function to change the hero section's background image
function changeBackground() {
  hero.style.backgroundImage = `url('${images[current]}')`; // Update background
  current = (current + 1) % images.length; // Move to next image (loop back to first)
}

// Initialize with the first background image
changeBackground();

// Automatically change background image every 2 seconds
setInterval(changeBackground, 2000);


// ===============================
// Dark Mode Toggle
// ===============================

// Toggle dark mode by adding/removing a CSS class on the body
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Select theme toggle button and body
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Listen for clicks on the theme toggle button
toggleBtn.addEventListener('click', () => {
  // Switch between 'dark' and 'light' themes
  body.classList.toggle('dark');
  body.classList.toggle('light');

  // Update button icon based on the current theme
  toggleBtn.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});


// ===============================
// Category Filtering
// ===============================

// Select all category list items
const categoryItems = document.querySelectorAll(".categories li");

// Select all product cards
const products = document.querySelectorAll(".product-card");

// Add click event listener to each category item
categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    // Get the category type from the clicked item's data attribute
    const category = item.getAttribute("data-category");

    // Show or hide products based on the selected category
    products.forEach(product => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.style.display = "block"; // Show product
      } else {
        product.style.display = "none"; // Hide product
      }
    });
  });
});
