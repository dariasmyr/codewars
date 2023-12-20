// DESCRIPTION:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


// My Solution
function add(a, b) {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let carry = 0;
  let result = '';

  for (let i = maxLength - 1; i >= 0; i--) {
    const digitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
    const currentDigit = digitSum % 10;
    carry = Math.floor(digitSum / 10);
    result = currentDigit.toString() + result;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
}
