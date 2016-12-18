const stringClass = {
  hasVowels() {
    const vowels = /[aeiou]/i;
    return vowels.test(this);
  },

  toUpper() {
    const lowerCase = /[a-z]/g;
    return this.replace(lowerCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  toLower() {
    const upperCase = /[A-Z]/g;
    return this.replace(upperCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  isQuestion() {
    const quest = /^[\w\s]+\?$/g;
    return quest.test(this.trim());
  },

  words() {
    const invalid = /[^\w\s]/g;
    return this.replace(invalid, ' ').split(' ')
    .filter((item) => {
      return Boolean(item);
    });
  },

  wordCount() {
    return this.words().length;
  },

  inverseCase() {
    const allCase = /[A-Za-z]/g;
    return this.replace(allCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

  alternatingCase() {
    const letters = /[a-zA-z]/g;
    return this.replace(letters, (char, index) => {
      if (index % 2 === 0) {
        return char.toLower();
      }
      return char.toUpper();
    });
  },

  getMiddle() {
    const midPosition = Math.round(this.length / 2);
    if (midPosition % 2 === 1) {
      return this[midPosition - 1];
    }
    return `${this[midPosition - 1]}${this[midPosition]}`;
  },

  isDigit() {
    const digit = /^\d$/g;
    return digit.test(this);
  },

  doubleCheck() {
    const checkDouble = /(.)\1{1}/g;
    return checkDouble.test(this);
  }

};

Object.assign(String.prototype, stringClass);
