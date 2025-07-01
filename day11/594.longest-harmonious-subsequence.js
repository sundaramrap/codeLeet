/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let mapFreq = new Map();
  let maxTot = 0;

  for (let num of nums) {
    //set key value pair
    mapFreq.set(num, (mapFreq.get(num) || 0) + 1);
  }

  for (let [key, value] of mapFreq) {
    if (mapFreq.has(key + 1)) {
      let total = value + mapFreq.get(key + 1);
      maxTot = Math.max(maxTot, total);
    }
  }
  return maxTot;
};
// @lc code=end
