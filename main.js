const itemContainer = document.querySelectorAll(".item-container");
const yourCart = document.getElementById("your-cart");

itemContainer.forEach(item => {
  item.addEventListener("click", (e) => {
    const addToCartBtn = e.target.classList.contains("add-to-cart-btn");

    const toggleAddToCart = item.querySelector(".add-to-cart-btn")
    const toggleAmountChanger = item.querySelector(".amount-changer");
    const nameOfProduct = item.querySelector("h2").textContent;
    let amount = toggleAmountChanger.querySelector(".amount");
    const incrementBtn = e.target.classList.contains("increment");
    const decrementBtn = e.target.classList.contains("decrement");

    let currentAmount = Number(amount.textContent);
    currentAmount === 0 ? currentAmount++ : null;
    amount.textContent = currentAmount;

    if (incrementBtn) {
      currentAmount++;
      amount.textContent = currentAmount;
      return currentAmount;
    } else if (decrementBtn) {
      currentAmount--;
      amount.textContent = currentAmount;
      if (currentAmount === 0) {
        toggleAddToCart.classList.toggle("hidden");
        toggleAmountChanger.classList.toggle("hidden");
        return currentAmount;
      }
    }



    addToCartBtn ? toggleAddToCart.classList.toggle("hidden") && toggleAmountChanger.classList.toggle("hidden") : null;

    if (!addToCartBtn) return;

    if (item) {
      yourCart.insertAdjacentHTML("afterbegin", `
      <li class="flex justify-between border-b border-smalltext pb-4">
              <div class="item-info-container flex gap-8"> <img class="w-16 rounded-sm border-[#6AB3FE] border-2"
                  src=${item.querySelector("img").src} alt=${item.querySelector("img").alt}>
                <div class="item-text-container flex flex-col my-auto gap-2">
                  <h3 class="text-xl font-bold">${nameOfProduct}</h3>
                  <small class="text-[16px] font-extralight text-[#8B9FFF]">${currentAmount} x $${item.querySelector("span").textContent * currentAmount}</small >
                </div >
              </div >
      <img class="w-4 h-4 cursor-pointer" src="images/ion--trash 1.png" alt="icon trash">
      </li>`);
    } else if (!yourCart.querySelector(".item")) {
      yourCart.insertAdjacentElement("afterbegin", "Your added items will appear here");
    }
  })
})