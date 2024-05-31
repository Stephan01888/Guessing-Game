document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 3;  

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
            guessButton.disabled = true;
        } else if (attempts >= maxAttempts) {
            message.textContent = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low. Try again.';
        } else {
            message.textContent = 'Too high. Try again.';
        }

        guessInput.value = '';
        guessInput.focus();
    });

    guessInput.addEventListener('input', () => {
        if (!/^\d*$/.test(guessInput.value)) {
            guessInput.value = guessInput.value.replace(/[^\d]/g, '');
        }
    });
});
