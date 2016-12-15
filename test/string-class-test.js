const chai = require('chai');

const assert = chai.assert;
require('../src/string-class');

describe('String Class Test', () => {
  describe('Check for vowel', () => {
    it('should return true if string contains vowel', () => {
      assert.isTrue('hello'.hasVowels());
      assert.isFalse('hmmm'.hasVowels());
    });
  });

  describe('To uppercase', () => {
    it('should return the uppercase of string', () => {
      assert.equal('change'.toUpper(), 'CHANGE');
      assert.equal('development'.toUpper(), 'DEVELOPMENT');
    });
  });

  describe('To lowercase', () => {
    it('should return the lowercase of string', () => {
      assert.equal('chaNGe'.toLower(), 'change');
      assert.equal('Alrigt'.toLower(), 'alright');
    });
  });

  describe('First Character Uppercase', () => {
    it('should return the first character of string in uppercase', () => {
      assert.equal('change'.ucFirst(), 'Change');
      assert.equal('firstChar'.ucFirst(), 'FirstChar');
    });
  });

  describe('Is Question', () => {
    it('should check if string is a question ending with one question mark', () => {
      assert.isTrue('Where are you?'.isQuestion());
      assert.isFalse("I'm hungry!".isQuestion());
    });
  });

  describe('Words', () => {
    it('should return a list of words in the string', () => {
      assert.deepEqual('We are having fun'.words(), ['We', 'are', 'having', 'fun']);
    });
  });

  describe('Word Count', () => {
    it('should return the number of word in the string', () => {
      assert.Equal('We are having fun'.wordCount(), 4);
    });
  });

  describe('To Currency', () => {
    it('should return a currency representation of the string', () => {
      assert.Equal('11111.11'.toCurrency(), '11,111.11');
    });
  });

  describe('From Currency', () => {
    it('should return a number representation of the currency string', () => {
      assert.Equal('11,111.11'.fromCurrency(), '11111.11');
    });
  });

  describe('Inverse Case', () => {
    it('should return each letter in the string as an inverse of its current case', () => {
      assert.Equal('Mr. Ben'.inverseCase(), 'mR. bEN');
    });
  });

  describe('Alternating Case', () => {
    it('should return the letters in alternating cases', () => {
      assert.Equal('Onomatopoeia'.inverseCase(), 'oNoMaToPoEiA');
    });
  });

  describe('Get Middle', () => {
    it('should return the character(s) in the middle of the string', () => {
      assert.Equal('read'.getMiddle(), 'ea');
      assert.Equal('Amity'.getMiddle(), 'i');
    });
  });

  describe('Number Words', () => {
    it('should return the numbers in words', () => {
      assert.Equal('325'.numberWords(), 'three two five');
    });
  });

  describe('Is Digit', () => {
    it('should return true if the string is a digit', () => {
      assert.isTrue('3'.isDigit());
      assert.isFalse('34'.isDigit());
    });
  });

  describe('Double Check', () => {
    it('should return true if a string contains double characters', () => {
      assert.isTrue('  '.doubleCheck());
      assert.isTrue('!!'.doubleCheck());
    });
  });
});
