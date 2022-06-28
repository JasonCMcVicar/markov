"use strict";
// getChains first
// Map -- key/val remembers original insertion order

// getChains()
// take a string of text
// creates a map with:
    // keys: a single word
    // values: the next adjacent word, or null if last word in text string.

// ourStory
// MarkovStory = new MarkovMachine(ourStory)
// MarkovStory.words --> the individual words of ourStory text

// newMap = Map()
// for each word in ourStory
    // check is this the last word in the text?
        // yes --> value is null
    // if duplicate word, add as value to corresponding key (is it already in the Map?)
    // add it to newMap
        // ex. "The": ["cat"]

map1.set('a', 1);