"use strict";

const uniqueRandomArray = require("unique-random-array");
const db = require("./db.json");

/**
 * Get a random quote or phrase from any of the
 * 12 books in Marcus Aurelius's mediations.
 * @returns {string} A random quote from Meditations
 * @example
 * const meditations = require('meditations')
 *
 * let randomQuote = meditations.random()
 * console.log(randomQuote)
 * // => From the reputation and remembrance of my father, modesty and a manly
 * // character.
 */
const random = () => {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const randomBook = uniqueRandomArray(books)();
  const book = db.meditations[randomBook];

  return uniqueRandomArray(book)();
};

/**
 * Retrieves a quote or phrase from Marcus Aurelius's Meditations,
 * given the book and phrase numbers to search.
 * @param {number} bookNum The book to retrieve a quote from, bounded by [1-12]
 * @param {number} phraseNum The phrase to retrieve a quote from
 * @returns {string} A quote specified by the book and phrase numbers
 * @example
 * const meditations = require('meditations')
 *
 * let quote = meditations.retrieve(5, 18)
 * console.log(quote)
 * // => To seek what is impossible is madness: and it is impossible that the
 * // bad should not do something of this kind.
 */
const retrieve = (bookNum, phraseNum) => {
  try {
    if (bookNum > 12 || bookNum < 1)
      throw new Error("You must enter a valid book number [1-12].");
    let book = db.meditations[bookNum];
    if (phraseNum < 1 || phraseNum > book.length)
      throw new Error(
        `You must enter a valid phrase number [Book ${bookNum}: 1-${book.length}]`
      );

    return book[phraseNum - 1]
  } catch (err) {
    return err;
  }
};

module.exports = {
  random: random,
  retrieve: retrieve,
};
