/*** TOGLE CLASS BURGER MENU ***/
const burger = document.getElementById("burger");
const navbar = document.getElementById("navBar");

burger.addEventListener("click", () => {
 burger.classList.toggle("active");
 navbar.classList.toggle("active_nav");
});
