// Get references to DOM elements and initialize variables
const datesContainer = document.getElementById('dates-container');
const todayDateElem = document.querySelector('.today-date');
const journalCards = JSON.parse(localStorage.getItem('journalCards')) || [];
const today = new Date();
const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;

// Calculate the start of the current week (Monday)
let currentWeekStart = new Date(today);
currentWeekStart.setDate(today.getDate() - today.getDay() + 1); 

// Function to format date as "dd mm, yyyy"
const getFormattedDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
};

// Update today's date displayed in the UI
const updateTodayDate = () => {
    todayDateElem.textContent = getFormattedDate(today);
};

// Generate and display dates for the current week starting from a given startDate
const generateWeekDates = (startDate) => {
    datesContainer.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const dateDiv = document.createElement('div');
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
        const year = date.getFullYear();

        dateDiv.textContent = day;
        dateDiv.dataset.date = `${day} ${month}, ${year}`;

        if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
            dateDiv.classList.add('today');
        }

        dateDiv.addEventListener('click', () => {
            const clickedDate = `${day} ${month}, ${year}`;
            handleDateClick(clickedDate);
            console.log('clickedDate')
        });

        datesContainer.appendChild(dateDiv);
    }
};

// Handle click on a date: filter journals and display relevant information
const handleDateClick = (clickedDate) => {
    const filteredJournals = journalCards.filter(journal => journal.createdDate === clickedDate);
    if (window.location.pathname.endsWith('/pages/list.html')) {
        displayJournalCards(filteredJournals, clickedDate);
    }  
};

// Function to show the previous week's dates
const showPreviousWeek = () => {
    currentWeekStart = new Date(currentWeekStart.getTime() - oneWeekInMillis);
    generateWeekDates(currentWeekStart);
};

// Function to show the next week's dates
const showNextWeek = () => {
    currentWeekStart = new Date(currentWeekStart.getTime() + oneWeekInMillis);
    generateWeekDates(currentWeekStart);
};

// Event listeners for previous and next week buttons
document.getElementById('prev-week').addEventListener('click', showPreviousWeek);
document.getElementById('next-week').addEventListener('click', showNextWeek);

// Initialize
updateTodayDate();
generateWeekDates(currentWeekStart);
handleDateClick(todayDate);