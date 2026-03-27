const shoppingCartBtn = document.getElementById("shopping-cart-btn");
const shoppingCart = document.getElementById("shopping-cart");

function openShoppingCart() {
  shoppingCart.classList.toggle("hidden");
}

shoppingCartBtn.addEventListener("click", openShoppingCart);