/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * Description:
   * -Given a string s, find the length of the longest substring without
   * repeating characters.
   *
   * Example 1:
   * -Input s = "abcabcbb"
   * -Output:3
   * -Why? theanswer "abc" is the longest string, with a length of 3.
   *
   *
   * Approach:
   * -using a double array approach is not going to be helpful,
   * instead use a hashtable to add each character that exists in the
   * array as key. when the key has a value stored of 1, it means
   * that it exists, and break the count. Otherwise keep it,
   * if its bigger than the usual size.
   * */

  const storedChars = new Map();
  var currLength = 0;
  var longestStringLength = 0;
  for (var i = 0; i < s.length; i++) {
    /**iterate each character */
    if (storedChars.get(s[i]) === undefined) {
      //key doesnt exist yet, so increment the counter of the
      //curr Substr. and add the current character to the hash table
      currLength++;
      storedChars.set(s[i], 1);
    } else {
      //otherwise, it means that the character exists in the substr
      //already
      /**
       * check the current length is it higher than the longest
       * length. If it is, then replace it before reseting the
       * currLength to 0;
       *
       * then restart the current map with a new map.
       */
      if (currLength >= longestStringLength) {
        longestStringLength = currLength;
      }
      storedChars.clear();
      currLength = 1;
      storedChars.set(s[i], 1);
    }
  }
  if (currLength > longestStringLength) {
    return currLength;
  }
  return longestStringLength;
};

var len = lengthOfLongestSubstring("helloworld");
console.log("lengthOfLongestSubstring: " + len);

/***
 * "abcabcbb"
 *  "bbbbb"
 * "pwwkew"
 *
 * edge case: "dvdf"
 * your program goes liner and doesnt check whats ahead. Here its just vdf, but its ignored.
 * because after the "dv", it checks "df". Does this needs DP?
 */
