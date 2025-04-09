document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector(".menu-icon span");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");

    // Only set onclick if elements exist
    if (menuBtn && cancelBtn && items) {
        menuBtn.onclick = () => {
            items.classList.add("active");
            menuBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        }

        cancelBtn.onclick = () => {
            items.classList.remove("active");
            menuBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
        }
    }
});
