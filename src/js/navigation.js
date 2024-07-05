// Get references to DOM elements
const addButtons = document.querySelectorAll('.add-button');
const listButtons = document.querySelectorAll('.list-button');
const editbutton = document.getElementById('edit-button');
const emptyJournalMessage = document.getElementById('empty-journal-message')
const exitButton = document.getElementById('exit-button')

// Event listeners for list buttons to navigate to list page
listButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '../pages/list.html';
    });
});

// Function to navigate to write page on add button click
const navigateAddButton = () => {
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '../pages/write.html';
        });
    })
}
navigateAddButton();

// Function to navigate to write page when clicking empty journal message
const navigateToWrite = () => {
    emptyJournalMessage.addEventListener('click', () => {
        window.location.href = '../pages/write.html';
    })
}

// Function to navigate to edit page on edit button click
const navigateEditPage = () => {
    editbutton.addEventListener('click', () => {
        window.location.href = '../pages/edit.html';
    })
    
}




// Conditional navigation based on current page pathname
if (window.location.pathname.endsWith('/pages/list.html')) {
    navigateToWrite();
  
} 
if (window.location.pathname.endsWith('/pages/view.html')) {
    navigateEditPage();
    exitButton.addEventListener('click', () => {
        window.location.href = '../pages/list.html';
    })
}
if (window.location.pathname.endsWith('/pages/edit.html')) {
    exitButton.addEventListener('click', () => {
        window.location.href = '../pages/view.html';
    })
}

