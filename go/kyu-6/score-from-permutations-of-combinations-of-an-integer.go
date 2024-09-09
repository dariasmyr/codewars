// Description:
// We define the score of permutations of combinations, of an integer number (the function to obtain this value:sc_perm_comb) as the total sum of all the numbers obtained from the permutations of all the possible combinations of its digits. For example we have the number 348.
//
// sc_perm_comb(348) = 3 + 4 + 8 + 34 + 38 + 48 + 43 + 83 + 84 + 348 + 384 + 834 + 843 + 438 + 483  = 3675
// If the number has a digit 0, the numbers formed by a leading 0 should be discarded:
//
// sc_perm_comb(340) = 3 + 4 + 34 + 30 + 40 + 43 + 340 + 304 + 430 + 403 = 1631
// Duplicate permutations can occur if the number has more than once the same digit, but they should be added only once in the result:
//
// sc_perm_comb(333) = 3 + 33 + 333 = 369
// If the number has only one digit its score is the same number:
//
// sc_perm_comb(6) = 6
// sc_perm_comb(0) = 0
// Enjoy it!!
// My Solution
package kata

import (
	"fmt"
	"strconv"
)

func combine(str string) (combinations []string) {
	n := len(str)

	for i := 1; i < (1 << n); i++ {
		subset := ""
		for j := 0; j < n; j++ {
			if i&(1<<j) != 0 {
				subset += string(str[j])
			}
		}
		combinations = append(combinations, subset)
	}

	return combinations
}

func permute(str string) []string {
	var helper func([]rune, int)
	permutations := []string{}

	helper = func(arr []rune, n int) {
		if n == 1 {
			permutations = append(permutations, string(arr))
		} else {
			for i := 0; i < n; i++ {
				helper(arr, n-1)
				if n%2 == 1 {
					arr[0], arr[n-1] = arr[n-1], arr[0]
				} else {
					arr[i], arr[n-1] = arr[n-1], arr[i]
				}
			}
		}
	}

	runes := []rune(str)
	helper(runes, len(runes))
	return permutations
}

func ScPermComb(n int) (res uint64) {
	str := strconv.Itoa(n)

	combinations := combine(str)
	fmt.Println("combinations", combinations)
	uniqueNums := map[int]bool{}

	for _, comb := range combinations {
		perms := permute(comb)
		for _, perm := range perms {
			num, _ := strconv.Atoi(perm)
			uniqueNums[num] = true
		}
	}

	for num := range uniqueNums {
		res += uint64(num)
	}

	return
}