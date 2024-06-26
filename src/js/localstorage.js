const acceptButton = document.getElementById('accept-button');
const inputHeading = document.getElementById('input-title');
const inputTag = document.getElementById('input-tag');
const inputText = document.getElementById('input-body-text');
const todaydate = document.querySelectorAll('.date h3, .date-mob h3, .today-date');
const selectedJournal = JSON.parse(localStorage.getItem('selectedJournal'));


const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9); 
};
const getValueHeading = () => inputHeading.value;
const getValueTag = () => inputTag.value;
const getValueText = () => inputText.value;

const saveJournalCard = () => {
    const journalCard = {
        id: generateUniqueId(),
        createdDate: getTodayDate(),
        heading: getValueHeading(),
        tag: getValueTag(),
        text: getValueText()
    };

    let currentData = JSON.parse(localStorage.getItem('journalCards')) || [];
    currentData.push(journalCard);
    localStorage.setItem('journalCards', JSON.stringify(currentData));
    navigateViewPage(journalCard);

};

const navigateViewPage = (currentData) => {
    localStorage.setItem('selectedJournal', JSON.stringify(currentData));
    window.location.href = '../pages/view.html'

}
acceptButton.addEventListener('click', saveJournalCard);



const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day} ${month}, ${year}`
}

const setTodayDate = () => {
    const dateString = getTodayDate();
    todaydate.forEach(todaydate => {
        todaydate.textContent = dateString;
    })
    
}
setTodayDate();