const shoppingCartBtn = document.getElementById("shopping-cart-btn");
const shoppingCart = document.getElementById("shopping-cart");
const backdropFilter = document.getElementById("backdrop-filter");
const closeBtn = document.getElementById("close-btn");

function openShoppingCart() {
  shoppingCart.classList.toggle("hidden");
  backdropFilter.classList.toggle("hidden");
}

function closeShoppingCart() {
  shoppingCart.classList.toggle("hidden");
  backdropFilter.classList.toggle("hidden");
}

shoppingCartBtn.addEventListener("click", openShoppingCart);
closeBtn.addEventListener("click", closeShoppingCart);