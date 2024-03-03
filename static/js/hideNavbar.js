let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.classList.add("hidden");
    } else {
        // Scroll up
        navbar.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
});
