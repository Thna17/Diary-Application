const listContainer = document.querySelector('.list-container');

const displayJournalCards = (filteredJournals = journalCards) => {
    listContainer.innerHTML = '';

    filteredJournals.forEach((journalCard, index) => {
        const subList = document.createElement('div');
        subList.classList.add('sub-list');
        
        subList.setAttribute('data-id', journalCard.id);

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
                <p>${journalCard.text}</p>
            </div>
            <div class="span">Read More</div>
        `;
        
        subList.addEventListener('click', () => {
            localStorage.setItem('selectedJournal', JSON.stringify(journalCard));
            window.location.href = '../pages/view.html';
        });

        listContainer.appendChild(subList);
    });
};

// Call displayJournalCards to render the journal cards initially
displayJournalCards();
