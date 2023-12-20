// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
function pigIt(str) {
  const words = str.split(' ');
  const newWords = [];

  for (const word of words) {
    if (word.match(/[a-zA-Z]/)) {
      const updatedWord = `${word.slice(1)}${word[0]}ay`;
      newWords.push(updatedWord);
    } else {
      newWords.push(word);
    }
  }

  return newWords.join(' ');
}
