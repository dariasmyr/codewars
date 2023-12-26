// DESCRIPTION:
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
 // 400 -> "CD"
 //  90 -> "XC"
 //  40 -> "XL"
 //   1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000



// My Solution
const NumberConverter = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
};

class RomanNumerals {
  static toRoman(num) {
    if (num < 1 || num >= 4000) {
      throw new Error('Number out of range for Roman numerals conversion.');
    }

    let result = '';

    for (const key of Object.keys(NumberConverter).sort((a, b) => NumberConverter[b] - NumberConverter[a])) {
      const value = NumberConverter[key];
      const count = Math.floor(num / value);

      if (count > 0) {
        result += key.repeat(count);
        num -= count * value;
      }
    }

    return result;
  }

  static fromRoman(str) {
    let result = 0;

    for (const key of Object.keys(NumberConverter).sort((a, b) => NumberConverter[b] - NumberConverter[a])) {
      while (str.indexOf(key) === 0) {
        result += NumberConverter[key];
        str = str.slice(key.length);
      }
    }

    return result;
  }
}
