/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = highestElement(piles);
  let ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totHr = hoursEat(piles, mid);
    if (totHr <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
//function to find the highest element---pile --- range
var highestElement = function (piles) {
  let maxEle = piles[0];
  for (let i = 1; i < piles.length; i++) {
    maxEle = Math.max(piles[i], maxEle);
  }
  return maxEle;
};

//run a binary search considering elimination of the range
var hoursEat = function (nums, hours) {
  let totalHours = 0;
  for (let i = 0; i < nums.length; i++) {
    totalHours = totalHours + Math.ceil(nums[i] / hours);
  }

  return totalHours;
};

// @lc code=end
