/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//class for the Game array
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "Slow and Steady",
            "A Piece of Cake",
            "Break a Leg",
            "Been There Dont That",
            "Thats More Like It"
        ];
        this.activePhrase = null;
    }

    //method to start game
    startGame(){
        let startScreen = document.getElementById('overlay');
        let randomPhrase = getRandomPhrase();
        startScreen.display = 'none';
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

    //gets random phrase from game class
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    //handles users interactions with game
    handleInteraction(e) {
        let qwerty = document.getElementById('qwerty');
        qwerty.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON'){
                phrase.checkLetter(e.target);
                e.target.disabled = true;
            }
        })

        if (checkLetter(e.target) = true){
            e.target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(e.target);
            if(this.checkForWin()){
                this.gameOver(win, "Congratulations! You guessed the phrase!")
            }
        } else {
            e.target.classList.add('wrong');
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