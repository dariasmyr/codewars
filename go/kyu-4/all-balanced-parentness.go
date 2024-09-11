// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses
//
// Examples
// balancedParens 0 -> [""]
// balancedParens 1 -> ["()"]
// balancedParens 2 -> ["()()","(())"]
// balancedParens 3 -> ["()()()","(())()","()(())","(()())","((()))"]
// My Solution
package kata

func BalancedParens(n int) []string {
  var result []string
  generateParenthesis(n, n, "", &result)
  return result
}

func generateParenthesis(open, close int, current string, result *[]string) {
  if open == 0 && close == 0 {
    *result = append(*result, current)
    return
  }

  if open > 0 {
    generateParenthesis(open-1, close, current+"(", result)
  }

  if close > open {
    generateParenthesis(open, close-1, current+")", result)
  }
}