/**
 * TwoSum Problem:
 *  Given an array of integers nums and an integer target,
 *   return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution,
 *  and you may not use the same element twice.
 *  You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // the function returns an array
  // of indices, indicating the indexed
  // numbers that form the value,
  // when summing 2 numbers
  
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

var nums = twoSum([1, 2, 1], 3);
console.log(nums);
