/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums1 = [...nums2];
  let res = "";
  let depth = 0;

  for (let ch of s) {
    if (ch === "(") {
      if (depth > 0) res += ch;
      depth++;
    } else {
      depth--;
      if (depth > 0) res += ch;
    }
  }

  return res;
};
// @lc code=end
