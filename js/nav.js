const openMenu = document.querySelector(".hamburger-icon");
const closeMenu = document.querySelector(".close");
const navMenu = document.querySelector(".mobile-menu");

function animateMobileIn() {
    navMenu.style.animation = "slideIn 0.5s forwards";
};

function animateMobileOut() {
    navMenu.style.animation = "slideOut 0.5s forwards";
};

openMenu.addEventListener("click", () => {
    animateMobileIn();
    openMenu.classList.toggle("oculto");
    navMenu.classList.replace("oculto", "aberto");
});
closeMenu.addEventListener("click", () => {
    animateMobileOut();
    openMenu.classList.toggle("oculto");
    // navMenu.classList.replace("aberto", "oculto");
});
