/*
 * @lc app=leetcode id=1283 lang=javascript
 *
 * [1283] Find the Smallest Divisor Given a Threshold
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let low = 1;
  let high = maxValue(nums);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (posDiv(nums, mid, threshold)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

function minValue(nums) {
  let minVal = 1;
  for (i = 1; i < nums.length; i++) {
    minVal = Math.min(minVal, nums[i]);
  }

  return minVal;
}

function maxValue(nums) {
  let maxVal = nums[0];
  for (i = 1; i < nums.length; i++) {
    maxVal = Math.max(maxVal, nums[i]);
  }

  return maxVal;
}

function posDiv(nums, mid, threshold) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let quotient = Math.ceil(nums[i] / mid);

    total += quotient;
  }

  if (total <= threshold) {
    return true;
  } else {
    return false;
  }
}
// @lc code=end
