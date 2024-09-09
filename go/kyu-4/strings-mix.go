// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
//
// s1 = "A aaaa bb c"
//
// s2 = "& aaa bbb c d"
//
// s1 has 4 'a', 2 'b', 1 'c'
//
// s2 has 3 'a', 3 'b', 1 'c', 1 'd'
//
// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
//
// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.
//
// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.
//
// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".
//
// Hopefully other examples can make this clearer.
//
// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
//
// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
//
// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:
//
// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:
// My Solution
package kata

import (
	"unicode"
	"strings"
	"fmt"
	"sort"
)

type LetterInfo struct {
	Source string
	Letter string
	Count  int
}

func CountLetters(str string) map[rune]int {
	letterCount := make(map[rune]int)
	for _, char := range str {
		if unicode.IsLower(char) {
			letterCount[char]++
		}
	}
	return letterCount
}

func filterLowercaseLetters(str string) string {
	var filtered strings.Builder
	for _, char := range str {
		if unicode.IsLower(char) {
			filtered.WriteRune(char)
		}
	}
	return filtered.String()
}

func Mix(s1, s2 string) string {
	filteredStr1 := filterLowercaseLetters(s1)
	filteredStr2 := filterLowercaseLetters(s2)

	count1 := CountLetters(filteredStr1)
	count2 := CountLetters(filteredStr2)

	var result []LetterInfo

	for char, count1 := range count1 {
		count2 := count2[char]
		if count1 > 1 || count2 > 1 {
			if count1 > count2 {
				result = append(result, LetterInfo{"1", string(char), count1})
			} else if count2 > count1 {
				result = append(result, LetterInfo{"2", string(char), count2})
			} else {
				result = append(result, LetterInfo{"=", string(char), count1})
			}
		}
	}

	for char, count2 := range count2 {
		if _, found := count1[char]; !found && count2 > 1 {
			result = append(result, LetterInfo{"2", string(char), count2})
		}
	}

	sort.Slice(result, func(i, j int) bool {
		if result[i].Count != result[j].Count {
			return result[i].Count > result[j].Count
		}
		if result[i].Source != result[j].Source {
			return result[i].Source < result[j].Source
		}
		return result[i].Letter < result[j].Letter
	})

	var formattedResult strings.Builder
	for i, info := range result {
		if i > 0 {
			formattedResult.WriteString("/")
		}
		formattedResult.WriteString(fmt.Sprintf("%s:%s", info.Source, strings.Repeat(info.Letter, info.Count)))
	}

	return formattedResult.String()
}