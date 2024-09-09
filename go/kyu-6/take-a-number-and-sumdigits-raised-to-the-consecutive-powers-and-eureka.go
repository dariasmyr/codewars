// My Solution
package kata

import (
  "fmt"
)

func IsEurekaNumber(n uint64) bool {
  var sum uint64
  temp := n

  numDigit := len(fmt.Sprintf("%d", n))

  for i := numDigit; i > 0; i-- {
    lastDigit := temp % 10
    power := uint64(1)
    for j := 0; j < i; j++ {
        power = power * lastDigit
    }
    sum += power
    temp /= 10
  }

  return sum == n
}

func SumDigPow(a, b uint64) []uint64 {
  var result []uint64

  for i := a; i <= b; i++ {
    if IsEurekaNumber(i) {
      result = append(result, i)
    }
  }

  return result
}