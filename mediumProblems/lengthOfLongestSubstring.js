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
  var j = 0;
  for (var i = 0; i < s.length; i++) {
    if (storedChars.get(s[i]) === undefined) {
      currLength++;
      storedChars.set(s[i], i);
    } else {
      /**
       * -if the character already exist in the hash table,
       * return the index of the repeated character and assign it
       * to the j, incremented by 1.
       *
       * -Then get the currSubStrLen to be updated as the longestSubStrLen,
       * if it meets the requirements.
       *
       * -then get the diff of j - i; to get the newest currLen.
       *
       */

      //updating the initial subStr index
      j = storedChars.get(s[i]) + 1;
      //setting the repeated character to the newest index on the hash table.
      storedChars.set(s[i], i);

      //updating the longSubStrLen if needed
      if (currLength >= longestStringLength) {
        longestStringLength = currLength;
      }

      //recalculate the current length.
      currLength = j - i + 1;
    }
  }

  if (storedChars.length == 1) {
    return 1;
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
 *
 */
