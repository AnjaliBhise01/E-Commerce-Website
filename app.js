// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar Toggle for Mobile View
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Image Slider (if your site has multiple images for a product or banner)
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        if (slides.length > 0) {
            slides.forEach((slide, index) => {
                slide.style.display = index === slideIndex ? "block" : "none";
            });
            slideIndex = (slideIndex + 1) % slides.length;
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    }
    showSlides();

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.getAttribute("data-product") || "Product";
            alert(`${productName} added to cart!`);
        });
    });

    // Dark Mode Toggle (if you have a button with id="dark-mode-toggle")
    const darkModeToggle = document.querySelector("#dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

});
