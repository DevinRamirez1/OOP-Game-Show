/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//class for phrase
class Phrase {
    constructor() {
        this.phrase = phrase.toLowerCase();

    }

    //method to add phrases to html
    addPhraseToDisplay() {
        const phraseSection = document.getElementById('phrase');
        let phraseLi = document.createElement('li');
        for (let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i] != ''){
                phraseLi.classList.add('hide', 'letter', this.phrase[i]);
                phraseLi.innerHTML = this.phrase[i];
            } else {
                phraseLi.classList.add('space');
            }
            phraseSection.appendChild(phraseLi);
        }
    }

    //checks if letter selected matches letter in phrase
    checkLetter(selected) {
        if (this.phrase.includes(selected.textContent));
        return true;
    }

    //shows the letters that have been matched
    showMatchedLetter() {
        selectedLetter.classList.remove('hide');
        selectedLetter.classList.add('show')
    }
}
