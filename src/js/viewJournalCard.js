const todaydate = document.querySelectorAll('.date h3, .date-mob h3, .today-date');
const selectedJournal = JSON.parse(localStorage.getItem('selectedJournal'));

const viewJournal = () => {
    document.querySelector('.heading h2').textContent = selectedJournal.heading;
    document.querySelector('.meta-info .tag h3:last-child').textContent = selectedJournal.tag;
    document.querySelector('.body-text p').textContent = selectedJournal.text;
    todaydate.forEach(todaydate => {
        todaydate.textContent = selectedJournal.createdDate
    })
};
viewJournal();





