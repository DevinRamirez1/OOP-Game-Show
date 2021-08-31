/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//class for phrase
class Phrase {
    constructor() {
        this.phrase = phrase.toLocaleLowerCase();

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
}
