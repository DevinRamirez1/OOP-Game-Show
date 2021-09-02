/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//variables for app.js
const game = new Game();
const startButton = document.getElementById('btn__reset');
const keys = document.getElementById('qwerty');

//eventlistener for the start button
startButton.addEventListener('click', e => {
    game.startGame();
})

//eventlistener for keys
keys.addEventListener('click', e => {
    if(e.target.className === 'key'){
    game.handleInteraction(e.target);
    }
})

document.addEventListener('keyup', (e) => {
    const keyCode = e.code;
    if (game && keyCode.includes('Key')){
        const key = keyCode.charAt(keyCode.length - 1).toLowerCase();
        const buttons = document.getElementsByClassName('key');
        for(const buttonKey of buttons){
            if(buttonKey.textContent === key && buttonKey.disabled === false){
             e = buttonKey;
             game.handleInteraction(e);
        }
    }
}
})

