const datesContainer = document.getElementById('dates-container');
const todayDateElem = document.querySelector('.today-date');
const journalCards = JSON.parse(localStorage.getItem('journalCards')) || [];
const today = new Date();
const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
let currentWeekStart = new Date(today);
currentWeekStart.setDate(today.getDate() - today.getDay() + 1); // Start of the current week (Monday)

const getFormattedDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
};

const updateTodayDate = () => {
    todayDateElem.textContent = getFormattedDate(today);
};

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
        });

        datesContainer.appendChild(dateDiv);
    }
};

const handleDateClick = (clickedDate) => {
    const filteredJournals = journalCards.filter(journal => journal.createdDate === clickedDate);
    if (window.location.pathname.endsWith('/pages/list.html')) {
        displayJournalCards(filteredJournals, clickedDate);
    }  
};

const showPreviousWeek = () => {
    currentWeekStart = new Date(currentWeekStart.getTime() - oneWeekInMillis);
    generateWeekDates(currentWeekStart);
};

const showNextWeek = () => {
    currentWeekStart = new Date(currentWeekStart.getTime() + oneWeekInMillis);
    generateWeekDates(currentWeekStart);
};

document.getElementById('prev-week').addEventListener('click', showPreviousWeek);
document.getElementById('next-week').addEventListener('click', showNextWeek);

// Initialize
updateTodayDate();
generateWeekDates(currentWeekStart);
handleDateClick(todayDate);