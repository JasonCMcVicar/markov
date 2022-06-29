"use strict";
/** Textual markov chain generator. */

const TEXT = `I am Daniel
I am Sam
Sam I am
That Sam-I-am
That Sam-I-am!
I do not like
That Sam-I-am
Do you like
Green eggs and ham`;


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    let markovChains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      if (markovChains.has(this.words[i]) === false) {
        if (i === this.words.length-1) {
          markovChains.set(`${this.words[i]}`, [null]);
        } else {
        markovChains.set(`${this.words[i]}`, [`${this.words[i+1]}`])
        }
      } else {
        let value = markovChains.get(`${this.words[i]}`);
        if (i === this.words.length-1) {
          value.push(null);
        } else {
          value.push(this.words[i]);
        }
      }
    }

    return markovChains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let word = this.words[0];
    const newStory = [word];

    // debugger;

    while (word !== null) {
      // find value array at a word key
      const choices = this.chains.get(`${word}`); // [word, cat, The]

      // randomly choose a new word from that value array
      const choiceIndex = Math.floor(Math.random() * choices.length);
      let choice = choices[choiceIndex];
      // do we need this?
      if (choice === null) {
        break;
      }
      console.log("word= ", word, "choice=", choice);
      word = choice;
      newStory.push(word);
    }
    
    return newStory;
  }

}

module.exports = {
  MarkovMachine,
  TEXT,
}
