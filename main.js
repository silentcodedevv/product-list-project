const itemContainer = document.querySelectorAll(".item-container");
const amountChanger = document.querySelectorAll(".amount-changer");

itemContainer.forEach(item => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-btn")) {
      amountChanger.forEach(amountChange => {
        e.currentTarget.amountChange.toggle("hidden");
      })
    }
  })
})