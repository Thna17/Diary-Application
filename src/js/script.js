
const acceptButton = document.getElementById('accept-button');
const inputHeading = document.getElementById('input-title');
const inputTag = document.getElementById('input-tag');
const inputText = document.getElementById('input-body-text');

const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9); 
};
const getValueHeading = () => inputHeading.value;
const getValueTag = () => inputTag.value;
const getValueText = () => inputText.value;

const saveJournalCard = () => {
    const journalCard = {
        id: generateUniqueId(),
        heading: getValueHeading(),
        tag: getValueTag(),
        text: getValueText()
    };

    let currentData = JSON.parse(localStorage.getItem('journalCards')) || [];

    currentData.push(journalCard);
    localStorage.setItem('journalCards', JSON.stringify(currentData));

};

acceptButton.addEventListener('click', saveJournalCard);
