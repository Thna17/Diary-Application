// Get references to DOM elements
const InputMob = document.getElementById('input-mob');
const InputDesktop = document.getElementById('input-dsk');
const acceptButton = document.getElementById('accept-button');
const inputHeading = document.getElementById('input-title');
const inputTag = document.getElementById('input-tag');
const inputText = document.getElementById('input-body-text');

// Function to generate a unique ID
const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9); 
};

// Functions to get input values
const getValueHeading = () => inputHeading.value;
const getValueTag = () => inputTag.value;
const getValueText = () => inputText.value;

// Function to save the journal card to localStorage
const saveJournalCard = () => {
    const createdDate = formatDate(InputMob.value || InputDesktop.value); // Use whichever is set

    const journalCard = {
        id: generateUniqueId(),
        createdDate: createdDate,
        heading: getValueHeading(),
        tag: getValueTag(),
        text: getValueText()
    };

    let currentData = JSON.parse(localStorage.getItem('journalCards')) || [];
    currentData.push(journalCard);
    localStorage.setItem('journalCards', JSON.stringify(currentData));
    navigateViewPage(journalCard);

};

// Function to navigate to view page
const navigateViewPage = (currentData) => {
    localStorage.setItem('selectedJournal', JSON.stringify(currentData));
    window.location.href = '../pages/view.html';
};

// Function to format date as "04 07, 2024"
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
};

// Event listener for the accept button
acceptButton.addEventListener('click', saveJournalCard);


