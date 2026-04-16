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
    let totalProductAmount = document.querySelector(".total-product-amount");

    yourCart.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const li = e.target.closest("li");
        const productName = li.dataset.name;

        delete cart[productName]
        renderCart();

      }
    })

    function renderCart() {
      yourCart.innerHTML = "";
      Object.values(cart).forEach(product => {
        yourCart.insertAdjacentHTML("afterbegin", `
      <li data-name="${product.name}" class="flex mt-2 justify-between border-b border-smalltext pb-4">
              <div class="item-info-container flex gap-8"> <img class="w-16 rounded-sm border-[#6AB3FE] border-2"
                  src=${product.img} alt=${product.imgAlt}>
                <div class="item-text-container flex flex-col my-auto gap-2">
                  <h2 class="text-xl font-bold">${product.name}</h2>
                  <small class="text-[16px] font-extralight text-[#8B9FFF]">${product.amount} x $${Math.floor(product.price * product.amount)}</small >
                </div >
                </div >
                <img class="w-4 h-4 cursor-pointer delete-btn" src="images/ion--trash 1.png" alt="icon trash">
      </li>`);
        totalProductAmount.textContent = Number(Object.keys(cart).length);
      })
    }

    if (incrementBtn) {
      if (!cart[nameOfProduct]) {
        cart[nameOfProduct] = {
          name: nameOfProduct,
          amount: 1,
          price: Number(item.querySelector(".price").textContent),
          img: item.querySelector("img").src,
          imgAlt: item.querySelector("img").alt,
        }
        renderCart();
      } else {
        cart[nameOfProduct].amount++;
        currentAmount.textContent = Number(cart[nameOfProduct].amount);
        renderCart();
      }

    } else if (decrementBtn) {
      if (cart[nameOfProduct].amount === 1) {
        toggleAddToCart.classList.toggle("hidden");
        toggleAmountChanger.classList.toggle("hidden");
        delete cart[nameOfProduct];
        totalProductAmount.textContent = Number(Object.keys(cart).length);
        renderCart();
      } else {
        cart[nameOfProduct].amount--;
        currentAmount.textContent = Number(cart[nameOfProduct].amount);
        renderCart();
      }
    }


    if (addToCartBtn) {
      toggleAddToCart.classList.toggle("hidden");
      toggleAmountChanger.classList.toggle("hidden");

      if (!cart[nameOfProduct]) {
        cart[nameOfProduct] = {
          name: nameOfProduct,
          amount: 1,
          price: Number(item.querySelector(".price").textContent),
          img: item.querySelector("img").src,
          imgAlt: item.querySelector("img").alt,
        }
        currentAmount.textContent = Number(cart[nameOfProduct].amount);
        renderCart();
      }
    }
  })
});
