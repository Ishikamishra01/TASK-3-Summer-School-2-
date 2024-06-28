document.addEventListener("DOMContentLoaded", () => {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    const guessForm = document.getElementById('guessForm');
    const feedback = document.getElementById('feedback');

    guessForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userGuess = parseInt(document.getElementById('userGuess').value);
        
        if (userGuess > targetNumber) {
            feedback.textContent = 'Too high! Try again.';
        } else if (userGuess < targetNumber) {
            feedback.textContent = 'Too low! Try again.';
        } else {
            feedback.textContent = 'Congratulations! You guessed the correct number.';
        }
    });
});
