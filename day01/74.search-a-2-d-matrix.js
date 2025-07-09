/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let low = 0;
  let high = matrix.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target < matrix[mid][0]) {
      high = mid - 1;
    } else if (target > matrix[mid][matrix[0].length - 1]) {
      low = mid + 1;
    } else {
      return isExist(matrix[mid], target);
    }
  }
  return false;
};

function isExist(mat, k) {
  let low = 0;
  let high = mat.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mat[mid] === k) return true;

    if (mat[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}
// @lc code=end
