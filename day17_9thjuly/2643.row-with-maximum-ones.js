/*
 * @lc app=leetcode id=2643 lang=javascript
 *
 * [2643] Row With Maximum Ones
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let maxCount = 0;
  let rowIndex = 0;

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      rowIndex = i;
    }
  }

  return [rowIndex, maxCount];
};

// @lc code=end
