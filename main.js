const itemContainer = document.querySelectorAll(".item-container");
const yourCart = document.getElementById("your-cart");


itemContainer.forEach(item => {
  item.addEventListener("click", (e) => {
    const addToCartBtn = e.target.classList.contains("add-to-cart-btn");

    const toggleAddToCart = item.querySelector(".add-to-cart-btn")
    const toggleAmountChanger = item.querySelector(".amount-changer");
    const nameOfProduct = item.querySelector("h2").textContent;
    let currentAmount = item.querySelector(".amount");
    const incrementBtn = e.target.classList.contains("increment");
    const decrementBtn = e.target.classList.contains("decrement");

    const cart = {
      name: nameOfProduct,
      amount: 1,
      price: Number(item.querySelector(".price").textContent)
    }

    currentAmount.textContent = cart.amount;

    function renderCart() {
      yourCart.innerHTML = "";


      yourCart.insertAdjacentHTML("afterbegin", `
      <li class="flex mt-2 justify-between border-b border-smalltext pb-4">
              <div class="item-info-container flex gap-8"> <img class="w-16 rounded-sm border-[#6AB3FE] border-2"
                  src=${item.querySelector("img").src} alt=${item.querySelector("img").alt}>
                <div class="item-text-container flex flex-col my-auto gap-2">
                  <h2 class="text-xl font-bold">${cart.name}</h2>
                  <small class="text-[16px] font-extralight text-[#8B9FFF]">${cart.amount} x $${cart.price * cart.amount}</small >
                </div >
              </div >
      <img class="w-4 h-4 cursor-pointer" src="images/ion--trash 1.png" alt="icon trash">
      </li>`);
    }

    if (incrementBtn) {
      cart.amount++;
      currentAmount.textContent = cart.amount;
      renderCart();
      if (!cart.name) {
        renderCart();
      } else {
        cart.amount++;
      }
    } else if (decrementBtn) {
      cart.amount--;
      currentAmount.textContent = cart.amount;
      renderCart();
      if (cart.amount === 0) {
        toggleAddToCart.classList.toggle("hidden");
        toggleAmountChanger.classList.toggle("hidden");

        const cartItem = yourCart.querySelectorAll("li");

        cartItem.forEach(cart => {
          const productName = cart.querySelector("h2").textContent;
          console.log(productName)

          if (nameOfProduct === productName) {
            cart.remove();
          }
        })
      }
    }



    addToCartBtn ? toggleAddToCart.classList.toggle("hidden") && toggleAmountChanger.classList.toggle("hidden") : null;

    if (!addToCartBtn) return;
  })
})