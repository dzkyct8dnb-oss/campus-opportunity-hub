// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC37Cv3EtC6BdA9ug-JSbDF9RYs5jTq0kY",
    authDomain: "campushub-28777.firebaseapp.com",
    projectId: "campushub-28777",
    storageBucket: ""campushub-28777.firebasestorage.app",
    messagingSenderId: "88804538178",
    appId: "1:88804538178:web:4b3ee5b92b0c8d7c4dbadb"
};

// Your existing search function
const searchInput =
    document.getElementById("searchInput");

const opportunityCards =
    document.querySelectorAll(".opportunity-card");

if (searchInput) {

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

}
