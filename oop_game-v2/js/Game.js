/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



//class for the Game array
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Slow and Steady"),
            new Phrase("A Piece of Cake"),
            new Phrase("Break a Leg"),
            new Phrase("Been There Done That"),
            new Phrase("Thats More Like It"),
        ];
        this.activePhrase = null;
    }

    //method to start game
    startGame(){
        let startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        phrase.phrase = this.activePhrase
        phrase.phrase.addPhraseToDisplay();
    }

    //gets random phrase from game class
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    //handles users interactions with game
    handleInteraction(e) {
        let qwerty = document.getElementById('qwerty');
        qwerty.addEventListener('click', e => {
            if (e.tagName === 'BUTTON'){
                e.disabled = true;
            }
        })

        if (this.activePhrase.checkLetter(e.textContent)){
            e.classList.add('chosen');
            e.disabled = true;
            this.activePhrase.showMatchedLetter(e.textContent);
            if(this.checkForWin()){
                let message = "Congratulations! You guessed the phrase!";
                let result = 'win';
                this.gameOver(result, message);
            }
        } else {
            e.classList.add('wrong');
            e.disabled = true;
            this.removeLife();
        }
    }

    //removes life is selection doesn't match a letter in phrase
    removeLife(){
        let scoreBoardHeart = document.getElementsByClassName('tries');
        scoreBoardHeart[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1

        if (this.missed === 5){
            let message = "You didn't correctly guess the phrase, better luck next time!"
            let result = 'lose';
            this.gameOver(result, message);
        }
    }

    //checks if all letters have been revealed
    checkForWin(){
        return document.querySelectorAll('.hide').length === 0;
    }

    //implements a game win or lose depending on outcome
    gameOver(result, message){
        const overlay = document.getElementById('overlay');
        const heading = document.getElementById('game-over-message');
        overlay.style.display ='block';
        overlay.className = `${result}`;
        heading.textContent = `${message}`;

        this.resetGame();
    }

    resetGame() {
        const phrase = document.getElementById('phrase');
        const keys = document.querySelectorAll('.key');
        const hearts = document.getElementsByClassName('tries'); 

        this.missed = 0;

        phrase.firstElementChild.innerHTML = '';

        for (let i = 0; i < hearts.length; i++){
            hearts[i].firstElementChild.src = "images/liveHeart.png";
            hearts[i].firstElementChild.alt = "Heart Icon";
        }



        for (let i = 0; i < keys.length; i++){
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
    }
}