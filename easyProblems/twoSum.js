/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // the function returns an array
  // of indices, indicating the indexed
  // numbers that form the value,
  // when summing  2 numbers

  /**
   * it looks like it needs a double
   * nested for loop. where each loop
   * is going. when a sum is encountered,
   * stop the iteration and return both
   * values as an array.
   */

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

var nums = twoSum([1,2,1], 3);
console.log(nums);
