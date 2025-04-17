document.addEventListener("DOMContentLoaded", () => {
    // 🏆 Mobile Menu Toggle
    const menuBtn = document.createElement("div");
    menuBtn.classList.add("menu-btn");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector("header").prepend(menuBtn);

    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // 🔎 Search Functionality
    const searchInput = document.querySelector(".icons input");
    const products = document.querySelectorAll(".product");

    searchInput.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();

        products.forEach((product) => {
            const productName = product.querySelector("p").textContent.toLowerCase();
            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // 🛒 Add to Cart Feature
    let cartCount = 0;
    const cartIcon = document.querySelector(".fa-shopping-cart");
    const cartCountDisplay = document.createElement("span");
    cartCountDisplay.classList.add("cart-count");
    cartIcon.appendChild(cartCountDisplay);

    const addToCartButtons = document.querySelectorAll(".product");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
            alert("Item added to cart!");
        });
    });

    // 🎯 Smooth Scrolling for Navigation
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
