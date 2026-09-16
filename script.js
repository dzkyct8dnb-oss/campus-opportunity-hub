const searchInput =
    document.getElementById("searchInput");

const opportunityCards =
    document.querySelectorAll(".opportunity-card");

searchInput.addEventListener("input", function () {

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    opportunityCards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();

        if (cardText.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
