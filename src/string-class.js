const stringClass = {
  /**
   * Has Vowels
   *
   * It checks if a string contains any vowel letter.
   *
   * @return {Boolean} True if string contains vowel and false if not.
   */
  hasVowels() {
    const vowels = /[aeiou]/i;
    return vowels.test(this);
  },

  /**
   * To Upper
   *
   * It converts string to uppercase.
   *
   * @return {String} Uppercase of string.
   */
  toUpper() {
    const lowerCase = /[a-z]/g;
    return this.replace(lowerCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  /**
   * To Lower
   *
   * It converts string to lowercase.
   *
   * @return {String} Lowercase of string.
   */
  toLower() {
    const upperCase = /[A-Z]/g;
    return this.replace(upperCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  /**
   * Upper Character First
   *
   * It converts the first character in a string to uppercase.
   *
   * @return {String} First Character of string in uppercase.
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * Is Question
   *
   * It checks if string is a question.
   *
   * @return {Boolean} True if string is a question and false if not.
   */
  isQuestion() {
    const quest = /^[\w\s]+\?$/g;
    return quest.test(this.trim());
  },

  /**
   * Words
   *
   * It return the words of a string in an array.
   *
   * @return {Array} Array of words in string.
   */
  words() {
    const invalid = /[^\w\s]/g;
    return this.replace(invalid, ' ').split(' ')
    .filter((item) => {
      return Boolean(item);
    });
  },

  /**
   * Word Count
   *
   * It return the number words in a string.
   *
   * @return {Number} The number of words in the string.
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Reverse Word
   *
   * Reverse string.
   *
   * @return {String} The reverse of the string.
   */
  reverseWord() {
    return this.split('').reverse().join('');
  },

  /**
   * To Currency
   *
   * It changes number string to currency format.
   *
   * @return {String} Currenct format of string.
   */
  toCurrency() {
    const onThreeCount = /\d{3}/g;
    const trailingComma = /,$/g;
    const splitCurrency = this.split('.');
    const decimalPart = splitCurrency[1] || '00';
    const wholePart = splitCurrency[0];
    const newWhole = wholePart.reverseWord()
      .replace(onThreeCount, (number) => {
        return `${number},`;
      })
      .replace(trailingComma, '')
      .reverseWord();
    return `${newWhole}.${decimalPart}`;
  },

  /**
   * From Currency
   *
   * It changes currency representation of string to number string.
   *
   * @return {String} Current format of string.
   */
  fromCurrency() {
    const toRemove = /(,|.00|£$¤€¢¥₧ƒ)/g;
    return this.replace(toRemove, '');
  },

  /**
   * Inverse Case
   *
   * Change case of letters in strings to their inverse.
   *
   * @return {String} Inverse of each letter in string.
   */
  inverseCase() {
    const allCase = /[A-Za-z]/g;
    return this.replace(allCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  /**
   * Alternating Case
   *
   * Alternate case of letters in string.
   *
   * @return {String} Inverse of each letter in string.
   */
  alternatingCase() {
    const letters = /[a-zA-z]/g;
    return this.replace(letters, (char, index) => {
      if (index % 2 === 0) {
        return char.toLower();
      }
      return char.toUpper();
    });
  },

  /**
   * Get Middle
   *
   * It gets the middle character(s) in a string.
   *
   * @return {String} The middle character(s).
   */
  getMiddle() {
    const midPosition = Math.round(this.length / 2);
    if (midPosition % 2 === 1) {
      return this[midPosition - 1];
    }
    return `${this[midPosition - 1]}${this[midPosition]}`;
  },

  /**
   * Number Words
   *
   * It returns the number representation of string.
   *
   * @return {String} Number representation of string.
   */
  numberWords() {
    const numbersMap = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    const digits = /\d/g;
    return this.replace(digits, (num) => {
      return `${numbersMap[num]} `;
    }).trim();
  },

  /**
   * Is Digit
   *
   * It checks if string is a digit.
   *
   * @return {Boolean} True if string is a digit and False if not.
   */
  isDigit() {
    const digit = /^\d$/g;
    return digit.test(this);
  },

  /**
   * Double Check
   *
   * It checks if a string contains double characters.
   *
   * @return {String} True if string has double character and False if not.
   */
  doubleCheck() {
    const checkDouble = /(.)\1{1}/g;
    return checkDouble.test(this);
  }

};

Object.assign(String.prototype, stringClass);
