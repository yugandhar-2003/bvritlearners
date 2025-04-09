// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const filterButtonsContainer = document.querySelector("#course-filter-buttons");
    const filterableCards = document.querySelectorAll("#course-cards .card-item"); // Select the column wrappers

    // Function to filter cards based on the button clicked
    const filterCards = (filterValue) => {
        filterableCards.forEach((card) => {
            const cardName = card.getAttribute("data-name");

            // Check if the card should be shown or hidden
            if (filterValue === "all" || cardName === filterValue) {
                // Show the card (remove the 'hide' class)
                card.classList.remove("hide");
                // Optional: force reflow for transitions if using opacity/transform
                // void card.offsetWidth;
                // card.style.opacity = '1';
                // card.style.transform = 'scale(1)';
            } else {
                // Hide the card (add the 'hide' class)
                card.classList.add("hide");
                // Optional: for transitions
                // card.style.opacity = '0';
                // card.style.transform = 'scale(0.95)';
            }
        });
    };

    // Add click event listener to the filter buttons container (using event delegation)
    if (filterButtonsContainer) {
        filterButtonsContainer.addEventListener("click", (e) => {
            // Only proceed if a filter button was clicked
            if (e.target.classList.contains("filter-button")) {

                // Remove 'active' class from the previously active button
                const previouslyActiveButton = filterButtonsContainer.querySelector(".filter-button.active");
                if (previouslyActiveButton) {
                    previouslyActiveButton.classList.remove("active");
                }

                // Add 'active' class to the clicked button
                e.target.classList.add("active");

                // Get the filter value (e.g., 'all', 'paper2018')
                const filterValue = e.target.getAttribute("data-filter");

                // Call the filtering function
                filterCards(filterValue);
            }
        });
    } else {
        console.error("Filter buttons container '#course-filter-buttons' not found.");
    }

    
}); // End DOMContentLoaded