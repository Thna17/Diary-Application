const addButtons = document.querySelectorAll('.add-button');
const listButtons = document.querySelectorAll('.list-button');
const editbutton = document.getElementById('edit-button');
const emptyJournalMessage = document.getElementById('empty-journal-message')

listButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '../pages/list.html';
    });
});

const navigateAddButton = () => {
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '../pages/write.html';
        });
    })
}
navigateAddButton();


const navigateToWrite = () => {
    emptyJournalMessage.addEventListener('click', () => {
        window.location.href = '../pages/write.html';
    })
}


const navigateEditPage = () => {
    editbutton.addEventListener('click', () => {
        window.location.href = '../pages/edit.html';
    })
    
}
if (window.location.pathname.endsWith('/pages/list.html')) {
    navigateToWrite()
} 
if (window.location.pathname.endsWith('/pages/view.html')) {
    navigateEditPage();
}   

