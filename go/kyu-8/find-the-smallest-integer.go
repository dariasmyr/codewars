// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// My Solution
package kata

func SmallestIntegerFinder(numbers []int) int {
  smallestNumber := numbers[0]
  for _, number := range numbers {
    if number < smallestNumber {
      smallestNumber = number
    }
  }

  return smallestNumber
}