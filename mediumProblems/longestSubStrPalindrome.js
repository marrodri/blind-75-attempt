/**
 * @param {string} Array
 * @return {boolean}
 */
var isStringPalindrome = function (arr) {
  var stack = Array();
  for (var i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      stack.push();
	  //TODO:finish this function
    } else if (i > arr.length / 2 && arr[i] == stack[i]) {
      stack.pop();
    }
  }
  return false;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var palindromeSubStr = "";
  var subStrLen = 0;
  var stack = Array();
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length && !isStringPalindrome(stack); j++) {
      stack.push(s);
    }
    if (stack.length >= subStrLen) {
      subStrLen = stack.length;
      palindromeSubStr = stack.toString();
    }
  }
  /**
   * todo build the double nested for loop for this exercise.
   */
  return palindromeSubStr;
};
