// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// 
// Examples input/output:
// 
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// My Solution
export function xo(str: string): boolean {
  const xMatches = str.match(/x/gi);
  const oMatches = str.match(/o/gi);

  const xLength = xMatches ? xMatches.length : 0;
  const oLength = oMatches ? oMatches.length : 0;

  return xLength === oLength;
}
