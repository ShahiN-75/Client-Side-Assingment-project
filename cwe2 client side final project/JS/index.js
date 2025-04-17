
document.addEventListener("DOMContentLoaded", () => {

  //  Search Functionality
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

  // Add to Cart Feature
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

  //  Smooth Scrolling for Navigation
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
  });
});

// Function to display user icon and logout button if logged in
function updateUserUI() {
  const userEmail = localStorage.getItem("userEmail");
  const userIcon = document.querySelector(".fas.fa-user");
  const loginLink = document.querySelector(".icons a[href='login.html']");

  if (userEmail) {
    const firstLetter = userEmail.charAt(0).toUpperCase();

    // Replace user icon with first letter
    userIcon.outerHTML = `<div class="user-initial" style="
      background-color: #007bff;
      color: white;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
    ">${firstLetter}</div>`;

    // Replace login button with logout
    if (loginLink) {
      loginLink.outerHTML = `<button onclick="logoutUser()" style="
        margin-left: 10px;
        padding: 8px 16px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;
      ">Logout</button>`;
    }
  }
}

function logoutUser() {
  localStorage.removeItem("userEmail");
  location.reload();
}

document.addEventListener("DOMContentLoaded", updateUserUI);
// Show current date and time
function updateDateTime() {
const now = new Date();
document.getElementById("datetime").textContent = "Current time: " + now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Welcome back message
document.addEventListener("DOMContentLoaded", () => {
const visits = parseInt(localStorage.getItem("visits") || "0") + 1;
localStorage.setItem("visits", visits);
alert("Welcome back! You've visited this page " + visits + " times.");
});

// Flash Sale Countdown
const countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 6); // 6-hour flash sale

function updateCountdown() {
const now = new Date().getTime();
const distance = countdownDate.getTime() - now;

if (distance < 0) {
  document.getElementById("countdown").innerHTML = "Sale Ended!";
  return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerText = String(days).padStart(2, '0');
document.getElementById("hours").innerText = String(hours).padStart(2, '0');
document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

