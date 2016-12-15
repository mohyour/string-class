var chai = require('chai');
var assert = chai.assert;
require('../src/string-class');

describe("String Class Test", function(){
  describe("Check for vowel", function(){
    it("should return true if string contains vowel", function(){
      assert.isTrue("hello".hasVowels());
      assert.isFalse("hmmm".hasVowels());
    });
  });

  describe("To uppercase", function(){
    it("should return the uppercase of string", function(){
      assert.equal("change".toUpper(), "CHANGE");
      assert.equal("development".toUpper(), "DEVELOPMENT");
    });
  });

  describe("To lowercase", function(){
    it("should return the lowercase of string", function(){
      assert.equal("chaNGe".toLower(), "change");
      assert.equal("Alrigt".toLower(), "alright");
    });
  });

  describe("First Character Uppercase", function(){
    it("should return the first character of string in uppercase", function(){
      assert.equal("change".ucFirst(), "Change");
      assert.equal("firstChar".ucFirst(), "FirstChar");
    });
  });

  describe("Is Question", function(){
    it("should check if string is a question ending with one question mark", function(){
      assert.isTrue("Where are you?".isQuestion());
      assert.isFalse("I'm hungry!".isQuestion());
    });
  });

  describe("Words", function(){
    it("should return a list of words in the string", function(){
      assert.deepEqual("We are having fun".words(), ['We', 'are', 'having', 'fun']);
    });
  });

  describe("Word Count", function(){
    it("should return the number of word in the string", function(){
      assert.Equal("We are having fun".wordCount(), 4);
    });
  });

  describe("To Currency", function(){
    it("should return a currency representation of the string", function(){
      assert.Equal('11111.11'.toCurrency(), '11,111.11');
    });
  });

  describe("From Currency", function(){
    it("should return a number representation of the currency string", function(){
      assert.Equal('11,111.11'.fromCurrency(), '11111.11');
    });
  });

  describe("Inverse Case", function(){
    it("should return each letter in the string as an inverse of its current case", function(){
      assert.Equal('Mr. Ben'.inverseCase(), 'mR. bEN');
    });
  });

  describe("Alternating Case", function(){
    it("should return the letters in alternating cases", function(){
      assert.Equal('Onomatopoeia'.inverseCase(), 'oNoMaToPoEiA');
    });
  });

  describe("Get Middle", function(){
    it("should return the character(s) in the middle of the string", function(){
      assert.Equal('read'.getMiddle(), 'ea');
      assert.Equal('Amity'.getMiddle(), 'i')
    });
  });

  describe("Number Words", function(){
    it("should return the numbers in words", function(){
      assert.Equal('325'.numberWords(), 'three two five');
    });
  });

  describe("Is Digit", function(){
    it("should return true if the string is a digit", function(){
      assert.isTrue('3'.isDigit());
      assert.isFalse('34'.isDigit());
    });
  });

  describe("Double Check", function(){
    it("should return true if a string contains double characters", function(){
      assert.isTrue('  '.doubleCheck());
      assert.isTrue('!!'.doubleCheck());
    });
  });

});