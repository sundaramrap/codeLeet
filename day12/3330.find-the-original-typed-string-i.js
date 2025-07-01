/*
 * @lc app=leetcode id=3330 lang=javascript
 *
 * [3330] Find the Original Typed String I
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let ans = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      ans += 1;
    }
  }

  return ans;
};
// @lc code=end
