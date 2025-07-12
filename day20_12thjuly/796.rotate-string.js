/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
};
// @lc code=end
