"use strict";
/** Textual markov chain generator. */


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
        if (i === this.words.length-1) {
          markovChains.set(`${this.words[i]}`, [null]);
        } else {
          let value = markovChains.get(`${this.words[i]}`);
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
  }
}

module.exports = {
  MarkovMachine,
}