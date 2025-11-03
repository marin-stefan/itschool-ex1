const hamburgerIcon = document.querySelector(".menu-icon");

const ulMenu = document.querySelector(".menu-icon-container ul");
ulMenu.classList.add("show-dropdown");

hamburgerIcon.addEventListener("click", function () {
    ulMenu.classList.toggle("show-dropdown");
});


