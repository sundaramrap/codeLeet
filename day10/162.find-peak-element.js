/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  //eliminate the edge cases
  if (nums.length === 0) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 1]) return nums.length - 1;
  let low = 1;
  let high = nums.length - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    else if (nums[mid] > nums[mid - 1]) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return -1;
};
// @lc code=end
