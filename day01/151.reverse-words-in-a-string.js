/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = [];
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
    } else {
      if (word.length > 0) {
        result.push(word);
        word = "";
      }
    }
  }
  if (word.length > 0) result.push(word);

  return result.join(" ");
};
// @lc code=end
