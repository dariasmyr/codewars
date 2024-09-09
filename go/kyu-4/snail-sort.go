// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// My Solution
package kata

func Snail(snailMap [][]int) []int {
	if len(snailMap) == 0 || len(snailMap[0]) == 0 {
    return []int{}
  }

  var result []int
  top, bottom := 0, len(snailMap)-1
  left, right := 0, len(snailMap[0])-1


  for top <= bottom && left <= right {
    for i := left; i<= right; i++ {
      result = append(result, snailMap[top][i])
    }

    top++

    for i:= top;i<=bottom;i++ {
      result = append(result, snailMap[i][right])
    }

    right--

    if top <= bottom {
      for i:= right; i>=left; i-- {
        result = append(result, snailMap[bottom][i])
      }

    bottom--
    }

    if left <= right {
      for i:= bottom; i>=top; i-- {
        result = append(result, snailMap[i][left])
      }

    left++
    }
  }

 return result
}