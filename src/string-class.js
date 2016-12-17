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

  inverseCase() {
    const allCase = /[A-Za-z]/g;
    return this.replace(allCase, (char) => {
      return String.fromCharCode(char.charCodeAt() ^ 32);
    });
  },

};

Object.assign(String.prototype, stringClass);
