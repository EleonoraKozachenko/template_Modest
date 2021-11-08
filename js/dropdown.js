const button = document.querySelector(".header__mobile-button");
const nav = document.querySelector(".header__nav");
button.addEventListener("click", () => {
  nav.classList.toggle("active");
  button.classList.toggle("active");
});
