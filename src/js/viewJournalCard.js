const todaydate1 = document.querySelectorAll('.date h3, .date-mob h3, .today-date');


const viewJournal = () => {
    document.querySelector('.heading h2').textContent = selectedJournal.heading;
    document.querySelector('.meta-info .tag h3:last-child').textContent = selectedJournal.tag;
    document.querySelector('.body-text p').textContent = selectedJournal.text;
    todaydate1.forEach(todaydate => {
        todaydate.textContent = selectedJournal.createdDate
    })
};
viewJournal();





