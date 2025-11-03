const hamburgerIcon = document.querySelector(".menu-icon");
const ulMenu = document.querySelector(".menu-icon-container ul");

hamburgerIcon.addEventListener("click", function () {
    ulMenu.classList.toggle("show-dropdown");
});
