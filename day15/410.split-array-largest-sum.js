/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(nums, mid, k)) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return low;
};

function possible(nums, mid, k) {
  let splitCount = 1;
  let splitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (splitSum + nums[i] <= mid) {
      splitSum += nums[i];
    } else {
      splitCount++;
      splitSum = nums[i];
    }
  }

  if (splitCount <= k) return true;
  else return false;
}
// @lc code=end
