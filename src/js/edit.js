// Get references to DOM elements and initialize variables
const saveButton = document.getElementById('accept-button');
const selectedJournal = JSON.parse(localStorage.getItem('selectedJournal'));
const todaydate = document.querySelectorAll('.date h3, .date-mob h3, .today-date');


const editJournal = () => {
    if (selectedJournal) {
        document.querySelector('.heading input').value = selectedJournal.heading || '';
        document.getElementById('input-mob').value = convertToInputDateFormat(selectedJournal.createdDate);
        document.getElementById('input-dsk').value = convertToInputDateFormat(selectedJournal.createdDate);
        document.querySelector('.meta-info .tag input').value = selectedJournal.tag || '';
        document.querySelector('.body-text textarea').value = selectedJournal.text || '';
        todaydate.forEach(todaydate => {
            todaydate.textContent = selectedJournal.createdDate;
        })
    } 
};

// Convert date from "dd mm, yyyy" to "yyyy-mm-dd"
const convertToInputDateFormat = (dateString) => {
    const [day, month, year] = dateString.split(/[ ,]+/);
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const findIndexById = (journalCards, idJournal) => {
    return journalCards.findIndex(journalCard => journalCard.id === idJournal);
};

// Save edited journal data to localStorage and navigate to view page
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
        localStorage.setItem('selectedJournal', JSON.stringify(journalCards[index]));
        window.location.href = '../pages/view.html'
        console.log(`Object with id ${idJournal} updated successfully.`);
    } else {
        console.log(`Object with id ${idJournal} not found.`);
    }
};

// Event listener for save button click to trigger saveEditJournal function
saveButton.addEventListener('click', saveEditJournal);
editJournal();
