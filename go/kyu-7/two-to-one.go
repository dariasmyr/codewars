// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Solution
package kata

import (
	"sort"
)

func TwoToOne(s1 string, s2 string) string {
  combined := s1 + s2

  uniqueChars := make(map[rune]struct{})
  for _, char := range combined {
    uniqueChars[char] = struct{}{}
  }

  var sortedUniqueChars []rune
  for char := range uniqueChars {
    sortedUniqueChars = append(sortedUniqueChars, char)
  }

  sort.Slice(sortedUniqueChars, func(i,j int) bool {
    return sortedUniqueChars[i] < sortedUniqueChars[j]
  })

  return string(sortedUniqueChars)
}