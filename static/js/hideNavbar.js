let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && !navbar.classList.contains("hidden")) {
        // Scroll down
        navbar.classList.add("hidden");
    } else if (currentScroll < lastScrollTop && navbar.classList.contains("hidden")) {
        // Scroll up
        navbar.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
});
