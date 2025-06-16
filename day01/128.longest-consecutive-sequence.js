/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums = Array.from(new Set(nums)).sort((a, b) => a - b);
  let lngStreak = 1;
  let currStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      currStreak += 1;
    } else {
      lngStreak = Math.max(lngStreak, currStreak);
      currStreak = 1;
    }
  }

  return Math.max(lngStreak, currStreak);
};
// @lc code=end
