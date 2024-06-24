const addButtons = document.querySelectorAll('.add-button');

const addCard = () => {
    const storedCards = localStorage.getItem('journalCards');
    if (storedCards) {
        journalCards = JSON.parse(storedCards);
        if (journalCards.length > 0) {
            const lastJournalCard = journalCards[journalCards.length - 1];
            document.getElementById('input-title').value = lastJournalCard.heading;
            document.getElementById('input-tag').value = lastJournalCard.tag;
            document.getElementById('input-body-text').value = lastJournalCard.text;
        }
    }
};

const addNewCard = () => {
    inputHeading.value = '';
    inputTag.value = '';
    inputText.value = '';

}

addButtons.forEach(button => {
    button.addEventListener('click', addNewCard)
})

const navigateAddButton = () => {
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '../pages/write.html';
        });
    })
    addNewCard();
}
navigateAddButton();
addCard();

