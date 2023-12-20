// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// 
// Examples:
// 
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My Solution
export function solution(str: string, ending: string): boolean {
  const length = ending.length;
  const strEnding = str.substring(str.length - length);
  return strEnding === ending;
}
