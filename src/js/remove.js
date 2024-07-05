// Get references to DOM elements and local storage data
const deleteButton = document.getElementById('delete-button');
const getSelectedJounal = JSON.parse(localStorage.getItem('selectedJournal'));
const getjournalCards = JSON.parse(localStorage.getItem('journalCards'));

// Function to remove a journal card by its ID
const removeJournalCards = (idJournal) => {
    const updatedJournalCards = getjournalCards.filter(journalCard => journalCard.id !== idJournal);
    localStorage.setItem('journalCards', JSON.stringify(updatedJournalCards));
    localStorage.setItem('selectedJournal', JSON.stringify(updatedJournalCards));
    window.location.reload();
    console.log(`Object with id ${idJournal} removed successfully.`);
};

deleteButton.addEventListener('click', () => removeJournalCards(getSelectedJounal.id));
