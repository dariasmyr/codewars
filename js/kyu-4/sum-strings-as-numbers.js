// DESCRIPTION:
//     Given the string representations of two integers, return the string representation of the sum of those integers.
//
//     For example:
//
//     sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
//
//     I have removed the use of BigInteger and BigDecimal in java


// My Solution
function sumStrings(a, b) {
    let result = '';
    let carry = 0;

    while (a.length < b.length) {
        a = '0' + a;
    }
    while (b.length < a.length) {
        b = '0' + b;
    }

    for (let i = a.length - 1; i >= 0; i--) {
        const digitSum = parseInt(a[i], 10) + parseInt(b[i], 10) + carry;
        result = (digitSum % 10) + result;
        carry = Math.floor(digitSum / 10);
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result.replace(/^0+/, '') || '0';
}
