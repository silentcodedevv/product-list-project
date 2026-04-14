const itemContainer = document.querySelectorAll(".item-container");
const yourCart = document.getElementById("your-cart");

const cart = {};


itemContainer.forEach(item => {
  item.addEventListener("click", (e) => {
    const addToCartBtn = e.target.classList.contains("add-to-cart-btn");

    const toggleAddToCart = item.querySelector(".add-to-cart-btn")
    const toggleAmountChanger = item.querySelector(".amount-changer");
    const nameOfProduct = item.querySelector("h2").textContent;
    let currentAmount = item.querySelector(".amount");
    const incrementBtn = e.target.classList.contains("increment");
    const decrementBtn = e.target.classList.contains("decrement");


    function renderCart() {
      yourCart.innerHTML = "";

      Object.values(cart).forEach(product => {
        yourCart.insertAdjacentHTML("afterbegin", `
      <li class="flex mt-2 justify-between border-b border-smalltext pb-4">
              <div class="item-info-container flex gap-8"> <img class="w-16 rounded-sm border-[#6AB3FE] border-2"
                  src=${product.querySelector("img").src} alt=${product.querySelector("img").alt}>
                <div class="item-text-container flex flex-col my-auto gap-2">
                  <h2 class="text-xl font-bold">${name}</h2>
                  <small class="text-[16px] font-extralight text-[#8B9FFF]">${amount} x $${price * amount}</small >
                </div >
                </div >
                <img class="w-4 h-4 cursor-pointer" src="images/ion--trash 1.png" alt="icon trash">
      </li>`);
      })
    }

    if (incrementBtn) {

      if (!cart[nameOfProduct]) {
        cart[nameOfProduct] = {
          name: nameOfProduct,
          amount: 1,
          price: Number(item.querySelector(".price").textContent),
        }
        cart[nameOfProduct].amount++
        currentAmount.textContent = Number(cart[nameOfProduct].amount);
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



    if (addToCartBtn) {
      toggleAddToCart.classList.toggle("hidden");
      toggleAmountChanger.classList.toggle("hidden");
    }
  })
})