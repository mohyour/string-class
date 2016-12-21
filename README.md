[![Build Status](https://travis-ci.org/andela-msosan/string-class.svg?branch=test-coverage)](https://travis-ci.org/andela-msosan/string-class)
[![Coverage Status](https://coveralls.io/repos/github/andela-msosan/string-class/badge.svg?branch=test-coverage)](https://coveralls.io/github/andela-msosan/string-class?branch=test-coverage)

# String Class

Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the String class to support more string manipulation features.

## Methods Added

* **hasVowels:** Checks if the string contains vowels.
* **toUpper:** Converts string to uppercase characters.
* **toLower:** Converts string to lowercase characters.
* **ucFirst:** Converts the first character of a string to uppercase.
* **isQuestion:** Checks if the string is a question.
* **words:** Returns the list of words in string as an array.
* **wordCount:** Counts the number of words in a string.
* **toCurrency:** Converts the string to a currency format.
* **fromCurrency:** Converts the string from currency format to number.
* **inverseCase:** Returns the string passed in with inverted character cases.
* **alternatingCase:** Returns the string passed in with alternating character cases starting with lowercase.
* **getMiddle:** Returns the character(s) in the middle of the string.
* **numberWords:** Returns the words equivalent of the number passed in.
* **isDigit:** Checks if the string is a single digit.
* **doubleCheck:** Checks if the string contains double characters.

## Usage
* Clone the repository `git clone https://github.com/andela-msosan/string-class`
* Run `npm install` to install all dependencies.
* To run test, run `npm test`
* Require/Make use of `src/string-class.js` in your project.

## Technologies and Services
Written in Javascript es6 with the following:
* Node.js (Runtime Environment)
* Mocha (Test Framework)
* Travic CI (Continious Integration)
* Coveralls (Test coverage percentage)
* Hound CI (Check for style violations)
* Instabul (Test coverage generator)

## Contributions
* Clone the repository.
* Create a new branch for included feature(s).
* Raise a pull request.
