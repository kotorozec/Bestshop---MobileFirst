const hamburger = document.querySelector(".header__menu__hamburger");
const menu = document.querySelector(".header__menu");
const links = document.querySelector(".header__menu__nav-item__link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    links.classList.toggle("active");
    }
)
document.querySelectorAll(".header__menu__nav-item__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    links.classList.remove("active");
}))