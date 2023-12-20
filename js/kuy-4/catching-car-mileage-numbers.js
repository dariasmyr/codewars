// DESCRIPTION:
//     "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
//
//     Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
//
//     It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
//
// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
//
// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
//
//     Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
//
// So, you should expect these inputs and outputs:
//
// // "boring" numbers
//     isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0
//
// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2
//
// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
//     Input will always be an integer greater than 0, and less than 1,000,000,000.
//     The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.


// My solution
function isInteresting(number, awesomePhrases) {
    console.log(number, awesomePhrases);

    function hasFollowedByZeros(number) {
        if (number >= 100) {
            const firstNumber = number.toString().charAt(0);

            const followedByZeros = new RegExp(`${firstNumber}0*$`);

            console.log('hasFollowedByZeros', number, followedByZeros.test(String(number)) && number % 100 === 0);
            return followedByZeros.test(String(number)) && number % 100 === 0;
        } else {
            return false;
        }
    }

    function isSameDigits(number) {
        if (number >= 100) {
            const numberStringified = number.toString();
            const firstDigit = numberStringified.charAt(0);

            for (let i = 1; i < numberStringified.length; i++) {
                if (numberStringified.charAt(i) !== firstDigit) {
                    return false;
                }
            }
            console.log('isSameDigits', number);
            return true;
        } else {
            return false;
        }
    }

    function isIncremental(number) {
        if (number >= 100) {
            const numberStringified = number.toString();

            for (let i = 1; i < numberStringified.length; i++) {
                const currentDigit = parseInt(numberStringified.charAt(i));
                const previousDigit = parseInt(numberStringified.charAt(i - 1));

                if (currentDigit !== previousDigit + 1 && !(previousDigit === 9 && currentDigit === 0)) {
                    return false;
                }
            }

            console.log('isIncremental', number);
            return true;
        } else {
            return false;
        }
    }

    function isDecremental(number) {
        if (number >= 100) {
            const numberStringified = number.toString();

            for (let i = 1; i < numberStringified.length; i++) {
                const currentDigit = parseInt(numberStringified.charAt(i));
                const previousDigit = parseInt(numberStringified.charAt(i - 1));

                if (currentDigit !== previousDigit - 1 || (previousDigit === 0 && currentDigit === 9)) {
                    return false;
                }
            }

            console.log('isDecremental', number);
            return true;
        } else {
            return false;
        }
    }

    function isPalindromic(number) {
        if (number >= 100) {
            const numberStringified = number.toString();
            const reversedString = numberStringified.split('').reverse().join('');
            return numberStringified === reversedString;
        } else {
            return false;
        }
    }

    if (number >= 98) {
        if (awesomePhrases.length !== 0) {
            for (const awesomeNumber of awesomePhrases) {
                console.log(awesomeNumber);
                if (number === awesomeNumber - 1) {
                    console.log('number is near awesome');
                    return 1;
                } else if (number === awesomeNumber - 2) {
                    console.log('number has awesome and it\'s interesting');
                    return 1;
                } else if (number === awesomeNumber) {
                    console.log('number has awesome and it\'s interesting');
                    return 2;
                }
            }

            for (const awesomeNumber of awesomePhrases) {
                if (hasFollowedByZeros(number) || isSameDigits(number) || isIncremental(number) || isPalindromic(number)) {
                    console.log('number has awesome but is not related, and it\'s interesting');
                    return 2;
                } else {
                    const nextNumber = number + 1;
                    if (hasFollowedByZeros(nextNumber) || isSameDigits(nextNumber) || isIncremental(nextNumber) || isPalindromic(nextNumber)) {
                        console.log('number has awesome but is not related, and it\'s not interesting, but it\'s next to interesting');
                        return 1;
                    } else {
                        const nextTwoNumbers = nextNumber + 1;
                        if (hasFollowedByZeros(nextTwoNumbers) || isSameDigits(nextTwoNumbers) || isIncremental(nextTwoNumbers) || isPalindromic(nextTwoNumbers)) {
                            console.log('number has awesome but is not related, and it\'s not interesting, but it\'s two numbers far from interesting');
                            return 1;
                        } else {
                            console.log('number has awesome but is not related, and it\'s not interesting');
                            return 0;
                        }
                    }
                }
            }
        }
        else if (hasFollowedByZeros(number) || isSameDigits(number) || isIncremental(number) || isDecremental(number) || isPalindromic(number)) {
            console.log('number has not awesome, but it\'s interesting');
            return 2;
        } else if (hasFollowedByZeros(number + 1) || isSameDigits(number + 1) || isIncremental(number + 1) || isDecremental(number + 1) || isPalindromic(number + 1)) {
            console.log('number has not awesome, but it\'s near interesting');
            return 1;
        } else if (hasFollowedByZeros(number + 2) || isSameDigits(number + 2) || isIncremental(number + 2) || isDecremental(number + 2) || isPalindromic(number + 2)) {
            console.log('number has not awesome, but it\'s near interesting');
            return 1;
        }
        else {
            console.log('number has not awesome, but it\'s not interesting');
            return 0;
        }
    } else {
        console.log('number is less than 100 and it\'s not interesting');
        return 0;
    }
}
