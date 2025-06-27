/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //array is sorted

    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }

    ans = Math.min(ans, nums[mid]);
    //left part is sorted
    if (nums[low] <= nums[mid]) {
      low = mid + 1;
    } else high = mid - 1;

    //right side is sorted
  }

  return ans;
};
// @lc code=end
