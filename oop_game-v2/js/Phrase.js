/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//class for phrase
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split("");

    }

    //method to add phrases to html
    addPhraseToDisplay() {
        const phraseSection = document.querySelector('div > ul');
        
        this.letters.forEach(letter => {
            let phraseLi = document.createElement('li');
            if(letter != " "){
                phraseLi.className = `hide letter ${letter}`;
                phraseLi.textContent = '?';
                phraseSection.appendChild(phraseLi);
            } else {
                phraseLi.className = 'space';
                phraseLi.textContent = `${letter}`;
                phraseSection.appendChild(phraseLi);
            }
        })

        }
    

    //checks if letter selected matches letter in phrase
    checkLetter(selected) {
        return this.phrase.includes(selected);
    }

    //shows the letters that have been matched
    showMatchedLetter(letter) {
        const letterList = document.getElementsByTagName('li');
        const selectedLetter = letter;
        let correctLetter;
        for (let i = 0; i < letterList.length; i++){
            if (letterList[i].textContent === selectedLetter){
                correctLetter = letterlist[i].textContent;
            for (const element of correctLetter){
                element.textContent = `${letter}`;
                element.classList.remove('hide');
                element.classList.add('show');
            }
        }
    }
}
}
