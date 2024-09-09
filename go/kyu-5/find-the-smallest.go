// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.
//
// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with
//
// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0
//
// smallest(209917) --> [29917, 0, 1] or ...
//
// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.
//
// smallest(1000000) --> [1, 0, 6] or ...
// Note
// Have a look at "Sample Tests" to see the input and output in each language
// My Solutions
package kata

import (
    "strconv"
)

func Smallest(n int64) []int64 {
    tmp := n; s := strconv.FormatInt(n, 10); var res = []int64{-1, 0, 0}
    for i, _ := range s {
        c := string(s[i])
        str1 := s[:i] + s[i + 1:]
        for j, _ := range s {
            str2 := str1[:j] + c + str1[j:]
            nbStr2, _ := strconv.ParseInt(str2, 10, 64)
            if nbStr2 < tmp {
                tmp = nbStr2
                res = []int64{nbStr2, int64(i), int64(j)}
            }
        }
    }
    if res[0] == -1 {res = []int64{n, 0, 0}}
    return res
}