import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getFirestore, 
    collection, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC37Cv3EtC6BdA9ug-JSbDF9RYs5jTq0kY",
    authDomain: "campushub-28777.firebaseapp.com",
    projectId: "campushub-28777",
    storageBucket: ""campushub-28777.firebasestorage.app",
    messagingSenderId: "88804538178",
    appId: "1:88804538178:web:4b3ee5b92b0c8d7c4dbadb"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
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
const opportunityContainer =
    document.getElementById("opportunityContainer");


async function loadOpportunities() {

    const querySnapshot =
        await getDocs(collection(db, "opportunities"));


    opportunityContainer.innerHTML = "";


    querySnapshot.forEach((doc) => {

        const opportunity = doc.data();


        opportunityContainer.innerHTML += `

        <div class="opportunity-card">

            <span class="badge">
                ${opportunity.category}
            </span>

            <h3>
                ${opportunity.title}
            </h3>

            <p>
                ${opportunity.description}
            </p>

            <div class="card-bottom">

                <span>
                    📍 ${opportunity.location}
                </span>

                <a href="${opportunity.link}" target="_blank">
                    Apply →
                </a>

            </div>

        </div>

        `;

    });

}


loadOpportunities();
