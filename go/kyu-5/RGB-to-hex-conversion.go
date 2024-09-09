// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// My Solution
package kata

import (
	"fmt"
)

func RGB(r, g, b int) string {
  r = clamp(r, 0, 255)
	g = clamp(g, 0, 255)
	b = clamp(b, 0, 255)

  result := fmt.Sprintf("%02X%02X%02X", r,g,b)
  return result
}

func clamp(value, min, max int) int {
  if value < min {
    return min
  }

  if value > max {
    return max
  }

  return value
}