// DESCRIPTION:
//     Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
//     12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// My solution
function nextBigger(number) {
    if (number < 10) {
        return -1;
    }

    const numberStringified = number.toString();
    const numberArray = numberStringified.split('').map(Number);

    let i = numberArray.length - 1;
    while (i > 0 && numberArray[i - 1] >= numberArray[i]) {
        i--;
    }

    if (i <= 0) {
        return -1;
    } else {
        let j = numberArray.length - 1;
        while (numberArray[j] <= numberArray[i - 1]) {
            j--;
        }

        [numberArray[i - 1], numberArray[j]] = [numberArray[j], numberArray[i - 1]];

        const remainingDigits = numberArray.slice(i).sort((a, b) => a - b);

        const resultNumber = Number(numberArray.slice(0, i).concat(remainingDigits).join(''));

        const isBigger = () => {
            if (resultNumber > number) {
                return resultNumber;
            } else {
                return -1;
            }
        }

        return isBigger();
    }
}
