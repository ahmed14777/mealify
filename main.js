const body = document.querySelector("body");
const bar = document.querySelector("#bar");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll("links .link");
const checkBox = document.querySelector("input[type='checkbox']");
const home = document.querySelector("#home");

// function add class to animate the nav bar in the large screen
function linksIn() {
    links.classList.toggle("linksIn");
}
//  dark mode
checkBox.addEventListener("change", function () {
    home.classList.toggle("dark-mode");
});
