const sideMenu = document.querySelector(".side-menu-container");
const navButton = document.querySelector(".toggle-nav");

navButton.addEventListener("click", (e) => {
  sideMenu.classList.toggle("toggle");
});
