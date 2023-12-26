// DESCRIPTION:
// Task
// You are given a string s. Every letter in s appears once.

// Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

// Example
// For s = "abc", the result should be "bac".

//  The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

// Input/Output
// [input] string s
// unique letters (2 <= length <= 26)

// [output] a string
// middle permutation.

// My Solution
function middlePermutation(inputString) {
    let sortedString = inputString.split('').sort().join('');

    if (sortedString.length <= 2) {
        return sortedString;
    }

    if (sortedString.length % 2 === 0) {
        let middle = sortedString.length / 2 - 1;
        let remainder = sortedString.slice(0, middle) + sortedString.slice(middle + 1);
        return sortedString[middle] + remainder.split('').reverse().join('');
    } else {
        let middle = Math.floor(sortedString.length / 2);
        let remainder = sortedString.slice(0, middle - 1) + sortedString.slice(middle + 1);
        return sortedString[middle] + sortedString[middle - 1] + remainder.split('').reverse().join('');
    }
}
