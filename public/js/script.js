/* eslint-disable */
function getResult() {
  let result;
  const userInput = document.getElementById('input').value;
  const selected = document.getElementById('method').value;
  if (userInput === undefined || userInput === '') {
    result = '';
    alert('Enter a string');
  } else {
    switch (selected) {
      case 'hasVowels':
        result = userInput.hasVowels();
        break;
      case 'toUpper':
        result = userInput.toUpper();
        break;
      case 'toLower':
        result = userInput.toLower();
        break;
      case 'ucFirst':
        result = userInput.ucFirst();
        break;
      case 'isQuestion':
        result = userInput.isQuestion();
        break;
      case 'words':
        result = userInput.words();
        break;
      case 'wordCount':
        result = userInput.wordCount();
        break;
      case 'toCurrency':
        result = userInput.toCurrency();
        break;
      case 'fromCurrency':
        result = userInput.fromCurrency();
        break;
      case 'inverseCase':
        result = userInput.inverseCase();
        break;
      case 'alternatingCase':
        result = userInput.alternatingCase();
        break;
      case 'getMiddle':
        result = userInput.getMiddle();
        break;
      case 'numberWords':
        result = userInput.numberWords();
        break;
      case 'isDigit':
        result = userInput.isDigit();
        break;
      case 'doubleCheck':
        result = userInput.doubleCheck();
        break;
      default:
				break;
    }
  }
	document.getElementById('result').value = '';
  document.getElementById('result').value += result;
}
