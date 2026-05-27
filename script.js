// Mobile navbar

(function () {

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");

    if (!menuBtn || !navLinks) {
        return;
    }

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show-menu");

        const icon = menuBtn.querySelector("i");

        if (!icon) {
            return;
        }

        if (navLinks.classList.contains("show-menu")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Auto close menu

    const menuLinks =
        navLinks.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show-menu");

            const icon =
                menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

})();