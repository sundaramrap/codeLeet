/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

const { jsx } = require("react/jsx-runtime");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let n = matrix.length; //row
  let m = matrix[0].length; //column
  let col0 = 1;
  //mark the row and column as 0
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) col0 = 0;
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // make the elements 0 ,except hash marked element

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // make the column hs elemnt 0 , if marked

  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) matrix[0][j] = 0;
  }
  // make the left over row itenary 0 if marked as 0
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};
// @lc code=end
