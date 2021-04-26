// Improve style and accessibility
// This script is recommanded but not required
window.addEventListener("load", function () {
    const siteMenuToggle = document.querySelector("#site-menu-toggle");

    siteMenuToggle.addEventListener("click", function (event) {
        const toggle = event.target;

        if (toggle.checked) {
            document.querySelector("body").classList.add("prevent-scrolling");
            toggle.setAttribute("aria-checked", "true");
            toggle.setAttribute("aria-label", "site menu toggle (menu opened)");
        } else {
            document.querySelector("body").classList.remove("prevent-scrolling");
            toggle.setAttribute("aria-checked", "true");
            toggle.setAttribute("aria-label", "site menu toggle (menu closed)");
        }
    });
});
