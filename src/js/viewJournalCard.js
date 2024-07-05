/// Get reference to local storage data
const selectedJournalString = localStorage.getItem('selectedJournal');
const selectedJournal = JSON.parse(selectedJournalString);

// Function to populate the view with selected journal data
const viewJournal = () => {
    if (selectedJournal) {
        document.querySelector('.heading h2').textContent = selectedJournal.heading || '';
        document.querySelector('.meta-info .tag h3:last-child').textContent = selectedJournal.tag || '';
        document.querySelector('.body-text p').textContent = selectedJournal.text || '';
        
        const formattedDate = selectedJournal.createdDate; // Use directly from selectedJournal

        const todaydateElements = document.querySelectorAll('.date h3, .date-mob h3, .today-date');
        todaydateElements.forEach(todaydate => {
            todaydate.textContent = formattedDate;
        });
    } else {
        console.error('No selected journal found in local storage.');
    }
};


viewJournal();





