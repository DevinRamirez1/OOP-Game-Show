/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//variables for app.js
const game = new Game();
const startButton = document.getElementById('btn__reset');
const keys = document.getElementById('qwerty')

//eventlistener for the start button
startButton.addEventListener('click', e => {
    game.startGame();
})

//eventlistener for keys
keys.addEventListener('click', e => {
    game.handleInteraction(e.target);
})

