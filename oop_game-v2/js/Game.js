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
            new Phrase("Been There Dont That"),
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
                this.gameOver(win, "Congratulations! You guessed the phrase!")
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
            this.gameOver(lose, "You didn't correctly guess the phrase, better luck next time!");
        }
    }

    //checks if all letters have been revealed
    checkForWin(){
        return document.querySelectorAll('.hide').length === 0;
    }

    //implements a game win or lose depending on outcome
    gameOver(result, message){

        document.getElementById('overlay').classList.replace('start', result);
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('phrase').innerHTML = '';
        let hearts = document.getElementsByClassName('tries');

        hearts.forEach(heart => heart.firstElementChild.src = "images/liveHeart.png");
        this.missed = 0;
    }
}