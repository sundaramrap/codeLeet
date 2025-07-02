/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let low = minVal(weights);
  let high = maxVal(weights);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (thresDay(weights, mid, days)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

function minVal(weights) {
  let minVal = weights[0];
  for (let i = 1; i < weights.length; i++) {
    minVal = Math.max(minVal, weights[i]);
  }
  return minVal;
}

function maxVal(weights) {
  let maxVal = 0;
  for (let i = 0; i <= weights.length - 1; i++) {
    maxVal += weights[i];
  }
  return maxVal;
}

function thresDay(weights, mid, days) {
  let currentWeight = 0;
  let maxDay = 1;

  for (let i = 0; i < weights.length; i++) {
    if (currentWeight + weights[i] > mid) {
      maxDay++;
      currentWeight = 0;
    }

    currentWeight += weights[i];
  }

  return maxDay <= days;
}
// @lc code=end
