/* eslint-disable import/no-unresolved */
const assert = require('chai').assert;
require('../src/string-class');

describe('String Class Test', () => {
  describe('Check for vowel', () => {
    it('should return true if string contains vowel', () => {
      assert.isTrue('hello'.hasVowels());
      assert.isTrue('UmbrEllA'.hasVowels());
      assert.isTrue('c@m3ra'.hasVowels());
    });

    it('should return false if string does not contains vowel', () => {
      assert.isFalse('myth'.hasVowels());
      assert.isFalse('c@t'.hasVowels());
    });
  });

  describe('To uppercase', () => {
    it('should return the uppercase of string', () => {
      assert.equal('chanGe'.toUpper(), 'CHANGE');
      assert.equal('DEVELOPMENT'.toUpper(), 'DEVELOPMENT');
    });
  });

  describe('To lowercase', () => {
    it('should return the lowercase of string', () => {
      assert.equal('chaNGe'.toLower(), 'change');
      assert.equal('alright'.toLower(), 'alright');
    });
  });

  describe('First Character Uppercase', () => {
    it('should return the first character of string in uppercase', () => {
      assert.equal('change'.ucFirst(), 'Change');
      assert.equal('firstChar'.ucFirst(), 'FirstChar');
      assert.equal('the First in upperCase'.ucFirst(), 'The First in upperCase');
    });
  });

  describe('Is Question', () => {
    it('should check if string is a question', () => {
      assert.isTrue('Where are you?'.isQuestion());
    });

    it('should return false if string has more than a question mark', () => {
      assert.isFalse('Where are you???'.isQuestion());
      assert.isFalse('What? You say?'.isQuestion());
    });

    it('should check if string is not a question', () => {
      assert.isFalse('See you later.'.isQuestion());
      assert.isFalse("I'm hungry!".isQuestion());
    });
  });

  describe('Words', () => {
    it('should return a list of words in the string', () => {
      assert.deepEqual('We are having fun'.words(), ['We', 'are', 'having', 'fun']);
    });

    it('should remove invalid characters and return list of words', () => {
      assert.deepEqual('He is @ home'.words(), ['He', 'is', 'home']);
      assert.deepEqual('I.am.here'.words(), ['I', 'am', 'here']);
    });
  });

  describe('Word Count', () => {
    it('should return the number of word in the string', () => {
      assert.equal('We are having fun'.wordCount(), 4);
      assert.deepEqual('I.am.here'.wordCount(), 3);
    });
  });

  describe('To Currency', () => {
    it('should return a currency representation of the string', () => {
      assert.equal('11111.11'.toCurrency(), '11,111.11');
      assert.equal('123456789'.toCurrency(), '123,456,789.00');
    });
  });

  describe('From Currency', () => {
    it('should return a number representation of the currency string', () => {
      assert.equal('11,111.11'.fromCurrency(), '11111.11');
      assert.equal('123,456,789.00'.fromCurrency(), '123456789');
    });
  });

  describe('Inverse Case', () => {
    it('should return each letter in the string as an inverse of its current case', () => {
      assert.equal('Mr. Ben'.inverseCase(), 'mR. bEN');
      assert.equal('Hello World'.inverseCase(), 'hELLO wORLD');
    });
  });

  describe('Alternating Case', () => {
    it('should return the letters in alternating cases starting with lowercase', () => {
      assert.equal('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
      assert.equal('AGILITY'.alternatingCase(), 'aGiLiTy');
    });
  });

  describe('Get Middle', () => {
    it('should return the character(s) in the middle of the string', () => {
      assert.equal('read'.getMiddle(), 'ea');
      assert.equal('Amity'.getMiddle(), 'i');
    });
  });

  describe('Number Words', () => {
    it('should return the numbers in words', () => {
      assert.equal('325'.numberWords(), 'three two five');
      assert.equal('3061'.numberWords(), 'three zero six one');
    });
  });

  describe('Is Digit', () => {
    it('should return true if the string is a single digit', () => {
      assert.isTrue('3'.isDigit());
    });

    it('should return false if the string is not a single digit', () => {
      assert.isFalse('3at'.isDigit());
      assert.isFalse('34'.isDigit());
      assert.isFalse('-5'.isDigit());
    });
  });

  describe('Double Check', () => {
    it('should return true if a string contains double characters', () => {
      assert.isTrue('  '.doubleCheck());
      assert.isTrue('!!'.doubleCheck());
      assert.isTrue('boo'.doubleCheck());
    });

    it('should return false if a string does not contain double characters', () => {
      assert.isFalse('double'.doubleCheck());
      assert.isFalse('Whao!'.doubleCheck());
    });
  });
});
