// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.

// My Solution
package kata

import (
    "strings"
)

func Disemvowel(comment string) string {
  vowels := "aeiouAEIOU"
  for _, char := range(vowels) {
     comment = strings.ReplaceAll(comment, string(char), "")
  }
    return comment
}