
const listContainer = document.querySelector('.list-container');
const journalCards = JSON.parse(localStorage.getItem('journalCards')) || [];


const displayJournalCards = () => {
    listContainer.innerHTML = ''; 

    journalCards.forEach((journalCard) => {
        const subList = document.createElement('div');
        subList.classList.add('sub-list');

        subList.innerHTML = `
            <div class="heading-mood">
                <div>
                    <h2>${journalCard.heading}</h2>
                </div>
                <div>
                    <img src="/assets/icon & Logo/happy-mood.svg" alt="">
                </div>
            </div>
            <div class="body-text">
                <p>${journalCard.text} </p>
                <span>Read More</span>
            </div>
            
        `;
        listContainer.appendChild(subList);
    });
};


displayJournalCards();
