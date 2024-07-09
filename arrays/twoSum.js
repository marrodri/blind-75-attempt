// redo twoSum. Aug, 30, 2023
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
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (j != i) {
        if (nums[j] + nums[i] == target) return [j, i];
      }
    }
  }
};

var nums = twoSum([1, 2, 1], 3);
console.log(nums);
