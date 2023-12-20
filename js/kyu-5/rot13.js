// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// My solution
function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  const alphabetData = {};

  for (let i = 0; i < alphabet.length; i++) {
    alphabetData[alphabet[i]] = i + 1;
  }
  
  const result = message.split('').map(letter => { 
    if (letter.match(/[a-zA-Z]/)) {
      const isUpperCase = letter === letter.toUpperCase();
      const currentPos = alphabetData[letter.toLowerCase()];
      const newPos = (currentPos + 12) % 26 + 1;
      const newLetter = alphabet[newPos - 1];
      return isUpperCase ? newLetter.toUpperCase() : newLetter;
    } else {
      return letter;
    }
  });

  return result.join('');
}
