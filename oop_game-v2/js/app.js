/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//variables for app.js
const game = new Game();
const phrase = new Phrase();
const startButton = document.getElementById('btn_reset');
const keys = document.getElementsByClassName('key')

//eventlistener for the start button
startButton.addEventListener('click', e => {
    game.startGame();
})

//eventlistener for keys
keys.addEventListener('click', e => {
    game.handleInteraction(e.target);
})

