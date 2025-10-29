const hamburgerIcon = document.querySelector(".menu-icon");

const ulMenu = document.querySelector(".menu-icon-container ul");
ulMenu.classList.add("show-dropdown");
ulMenu.style.visibility = "hidden";

hamburgerIcon.addEventListener("click", function () {
    // schimbam visibility din hidden in visible si invers
    if (ulMenu.style.visibility === "hidden") {
        ulMenu.style.visibility = "visible";
    } else {
        ulMenu.style.visibility = "hidden";
    }
});


