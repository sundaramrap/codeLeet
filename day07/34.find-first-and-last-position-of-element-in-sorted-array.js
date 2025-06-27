/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 *
 *
 */
var searchRange = function (nums, target) {
  function bind(isTrue) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        ans = mid;
        if (isTrue) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }

  return [bind(true), bind(false)];
};
// @lc code=end
