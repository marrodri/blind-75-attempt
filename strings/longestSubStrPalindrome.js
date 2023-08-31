/**
 * @param {string} Array
 * @return {boolean}
 */
var isStringPalindrome = function (arr) {
  /**
   * first check its length, calculate if its even or odd the number of characters.
   * //if even, stack the first half and pop with the other half.
   * //if odd, stack the first half, then the middle character is skipped, and pop the other half.
   *
   * if the top character is a different character from latter half of the string, return false
   *
   * otherwise, when the stack is empty and the iterator reached the end of the array. return true.
   *
   * SMALL DETAILS
   *  TO MEMORIZE:
   *  -the returned values of 7/2=3.5, 8/2=4, 7%2=1, 8%2 = 0
   *      --decimal point not showing only when it has a division without remained
   *  -Javascript shows decimals, variables don't have a specific datatype
   *  -its not like c++ where the variables must have a datatype, having its limitations depending the datatype.
   */
  var stack = Array();
  var middleIndex = Math.floor(arr.length / 2); //round
  var isOdd = arr.length % 2;
  console.log("arr length:" + middleIndex);

  for (var i = 0; i < middleIndex; i++) {
    stack.push(arr[i]);
  }
  middleIndex += isOdd;
  for (var i = middleIndex; i < arr.length; i++) {
    if (arr[i] !== stack[stack.length-1]) {
      console.log("is NOT a palindrome");
      return false;
    }
    stack.pop();
  }
  console.log("is A palindrome");
  return true;
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

isStringPalindrome("a b ada b a");
