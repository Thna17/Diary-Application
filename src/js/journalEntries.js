const listContainer = document.querySelector('.list-container');
const getDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
};
const todayDate = getDate(new Date());


const displayJournalCards = (filteredJournals = journalCards, clickedDate) => {
    if ((clickedDate === todayDate) && (filteredJournals.length <= 0)) {
        listContainer.innerHTML =  `
            <div class="empty-journal-message" id="empty-journal-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path d="M19.06 3.58988L20.41 4.93988C21.2 5.71988 21.2 6.98988 20.41 7.76988L7.18 20.9999H3V16.8199L13.4 6.40988L16.23 3.58988C17.01 2.80988 18.28 2.80988 19.06 3.58988ZM5 18.9999L6.41 19.0599L16.23 9.22988L14.82 7.81988L5 17.6399V18.9999Z"/>
                </svg>
               <p>Looks like there's no journal entry for today. Capture your thoughts and experiences now!</p>
            </div>
        `
    }   else if ((filteredJournals.length <= 0) && (clickedDate !== todayDate)) {
        listContainer.innerHTML = `
        <div class="empty-journal-message">
             <img src="../assets/images/folder.png" alt="">  
            <p>No journal entry for this day.</p>
        </div>
        `
    }
    else {
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
    }
};

displayJournalCards();

