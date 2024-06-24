const addButtons = document.querySelectorAll('.add-button');
const listButtons = document.querySelectorAll('.list-button');
const editbutton = document.getElementById('edit-button');

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

const navigateEditPage = () => {
    window.location.href = '../pages/edit.html';
}
editbutton.addEventListener('click', navigateEditPage)

