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
        return this.phrase.includes(selected.textContent)
    }

    //shows the letters that have been matched
    showMatchedLetter() {
        selectedLetter.classList.remove('hide');
        selectedLetter.classList.add('show')
    }
}
