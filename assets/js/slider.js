const button = document.querySelector(".button-slider img");
const cartSlider = document.querySelector(".main-cart");
const buttonClose = document.querySelector(".button-close");

button.addEventListener("click", function () {
  cartSlider.classList.toggle("slider");
});

buttonClose.addEventListener("click", function () {
  cartSlider.classList.toggle("slider");
});
