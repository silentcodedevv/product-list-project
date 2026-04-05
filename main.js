const itemContainer = document.querySelectorAll(".item-container");
const amountChanger = document.querySelectorAll(".amount-changer");

itemContainer.forEach(item => {
  item.addEventListener("click", (e) => {
    let itemAmount = item.querySelector(".amount");
    itemAmount.textContent = 1;

    if (e.target.classList.contains("add-to-cart-btn")) {
      const amountChanger = item.querySelector(".amount-changer");
      amountChanger.classList.toggle("hidden");
      const addToCartBtn = item.querySelector(".add-to-cart-btn");
      addToCartBtn.classList.toggle("hidden");

      if (e.target.classList.contains("increment")) {
        itemAmount.textContent = "lol"
      } else if (e.target.classList.contains("decrement")) {
        itemAmount--
      }
    }
  })
})