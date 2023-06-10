// define the body doc
const body = document.querySelector("body");
const bar = document.querySelector("#bar");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll("links .link");
const checkBox = document.querySelector("input[type='checkbox']");
const home = document.querySelector("#Home");
const chefs = document.querySelector("#Chefs");
const gallery = document.querySelector("#Gallery");
const contact = document.querySelector("#Contact");
const chefsCardText = document.querySelector("#chefs .cards .card .text");
// ====================================================================================
// ====================================================================================

//  ========  dark mode ========
checkBox.addEventListener("change", function () {
    home.classList.toggle("dark-mode");
    chefs.classList.toggle("dark-mode");
    gallery.classList.toggle("dark-mode");
    contact.classList.toggle("dark-mode");
});
// ====================================================================================
// ====================================================================================

// ========== add class to animate the nav bar in the large screen ===========
function linksIn() {
    links.classList.toggle("linksIn");
}
function closeLinks() {
    links.classList.remove("linksIn");
}
// ====================================================================================
// ====================================================================================
function delay(URL) {
    setTimeout(function () {
        window.location = URL;
    }, 5000);
}
