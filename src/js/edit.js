const saveButton = document.getElementById('accept-button');
const selectedJournal = JSON.parse(localStorage.getItem('selectedJournal'));
const journalCards = JSON.parse(localStorage.getItem('journalCards'));

const editJournal = () => {
    document.querySelector('.heading input').value = selectedJournal.heading;
    document.querySelector('.meta-info .tag input').value = selectedJournal.tag;
    document.querySelector('.body-text textarea').value = selectedJournal.text;
};

const findIndexById = (journalCards, idJournal) => {
    return journalCards.findIndex(journalCard => journalCard.id === idJournal);
};

const saveEditJournal = () => {
    const idJournal = selectedJournal.id;
    const index = findIndexById(journalCards, idJournal);
    if (index !== -1) {
        journalCards[index] = {
            ...journalCards[index],
            heading: document.querySelector('.heading input').value,
            tag: document.querySelector('.meta-info .tag input').value,
            text: document.querySelector('.body-text textarea').value
        };

        localStorage.setItem('journalCards', JSON.stringify(journalCards));
    } else {
        console.log('Journal not found');
    }
};


saveButton.addEventListener('click', saveEditJournal);
editJournal();
