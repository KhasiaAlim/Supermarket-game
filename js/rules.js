document.addEventListener("DOMContentLoaded", () => {
    // Show the "Next" button after all list items have animated
    setTimeout(() => {
        const nextButton = document.getElementById('next-button');
        nextButton.style.display = 'block';
        nextButton.style.opacity = 1;
    }, 4300); // Delay matches total animation duration of list items
});

let nextPageButton = document.getElementById('next-button');

nextPageButton.addEventListener('click', () => {
    window.location.href = "../pages/game/game.html";
})