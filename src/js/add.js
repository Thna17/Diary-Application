
    const acceptButton = document.getElementById('accept-button');
    const inputHeading = document.getElementById('input-title');
    const inputTag = document.getElementById('input-tag');
    const inputText = document.getElementById('input-body-text');
    let journalCards = [];

    const getValueHeading = () => inputHeading.value;
    const getValueTag = () => inputTag.value;
    const getValueText = () => inputText.value;

    const saveJournalCard = () => {
        const journalCard = {
            heading: getValueHeading(),
            tag: getValueTag(),
            text: getValueText()
        };

        journalCards.push(journalCard);
        localStorage.setItem('journalCards', JSON.stringify(journalCards));
   
    };

    const storeCard = () => {
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


    storeCard();

    acceptButton.addEventListener('click', saveJournalCard);

