const listContainer = document.querySelector('.list-container');
const journalCards = JSON.parse(localStorage.getItem('journalCards')) || [];

const displayJournalCards = () => {
    listContainer.innerHTML = '';

    journalCards.forEach((journalCard, index) => {
        const subList = document.createElement('div');
        subList.classList.add('sub-list');
        
        // Set a unique identifier for each journal card
        subList.setAttribute('data-id', index);

        subList.innerHTML = `
            <div class="heading-mood">
                <div>
                    <h2>${journalCard.heading}</h2>
                </div>
                <div>
                    <p>Tag: ${journalCard.tag}</p>
                </div>
            </div>
            <div class="body-text">
                <p>${journalCard.text} </p>
                <span>Read More</span>
            </div>
        `;
        
        // Attach click event listener to each journal card
        subList.addEventListener('click', () => {
            // Get the id of the clicked journal card
            const id = subList.getAttribute('data-id');
            
            // Store selected journal data in localStorage
            localStorage.setItem('selectedJournal', JSON.stringify(journalCards[id]));
            
            // Navigate to view.html
            window.location.href = '../pages/view.html';
        });

        listContainer.appendChild(subList);
    });
};

// Call displayJournalCards to render the journal cards
displayJournalCards();
