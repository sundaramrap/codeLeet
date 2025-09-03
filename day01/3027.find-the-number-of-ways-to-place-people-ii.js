/*
 * @lc app=leetcode id=3027 lang=javascript
 *
 * [3027] Find the Number of Ways to Place People II
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  points.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  let n = points.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    //get x1 an y1

    const [x1, y1] = points[i];
    let yMax = -Infinity;
    for (let j = i + 1; j < n; j++) {
      //x2 ND y2

      const [x2, y2] = points[j];

      if (y1 >= y2 && y2 > yMax) {
        ans += 1;
        yMax = y2;
      }
    }
  }

  return ans;
};
// @lc code=end
