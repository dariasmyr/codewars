// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// 
// The tests contain some very huge arrays, so think about performance.
//
// This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// My Solution
export function findUniq(arr: number[]): number {
  const uniqueArray = [...new Set(arr)]
  const firstNumber = uniqueArray[0]
  const secondNumber = uniqueArray[1]
  const firstNumberOccurrences = arr.filter(num => num === firstNumber).length;
  const secondNumberOccurrences = arr.filter(num => num === secondNumber).length;
  if (firstNumberOccurrences > secondNumberOccurrences) {
    return secondNumber;
  } else {
    return firstNumber;
  }
}
