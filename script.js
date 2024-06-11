document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');

    yesButton.addEventListener('click', () => {
        moveButton(yesButton);
    });

    noButton.addEventListener('click', () => {
        message.textContent = 'OK, no problem!';
    });

    function moveButton(button) {
        const x = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
});

