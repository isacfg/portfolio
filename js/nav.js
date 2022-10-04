const openMenu = document.querySelector(".hamburger-icon");
const closeMenu = document.querySelector(".close");
const navMenu = document.querySelector(".mobile-menu");

openMenu.addEventListener("click", () => {
    navMenu.classList.toggle("oculto");
    openMenu.classList.toggle("oculto");
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.toggle("oculto");
    openMenu.classList.toggle("oculto");
});