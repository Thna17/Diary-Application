
const listButtons = document.querySelectorAll('.list-button');

listButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '../pages/list.html';
    });
});

