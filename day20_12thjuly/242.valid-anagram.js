/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();

  for (char of s) {
    mapS.set(char, (mapS.get(char) || 0) + 1); //if char is undefined set it to 0 ,else +1 val of char
  }

  for (char of t) {
    if (!mapS.has(char) || mapS.get(char) === 0) {
      return false;
    }

    mapS.set(char, mapS.get(char) - 1);
  }

  return true;
};
// @lc code=end
