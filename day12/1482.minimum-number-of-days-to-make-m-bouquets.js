/*
 * @lc app=leetcode id=1482 lang=javascript
 *
 * [1482] Minimum Number of Days to Make m Bouquets
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) return -1;
  let low = minNumber(bloomDay);
  let high = maxNumber(bloomDay);
  let ans = bloomDay[bloomDay.length - 1];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(bloomDay, mid, m, k)) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return low;
};

function minNumber(bloomDay) {
  let minNum = bloomDay[0];
  for (let i = 1; i < bloomDay.length; i++) {
    minNum = Math.min(minNum, bloomDay[i]);
  }
  return minNum;
}

function maxNumber(bloomDay) {
  let maxNum = bloomDay[0];
  for (let i = 1; i < bloomDay.length; i++) {
    maxNum = Math.max(maxNum, bloomDay[i]);
  }
  return maxNum;
}

function possible(bloomDay, mid, m, k) {
  let n = bloomDay.length;
  let count = 0;
  let bouquetNo = 0;
  for (let i = 0; i <= n - 1; i++) {
    if (bloomDay[i] <= mid) {
      count++;
    } else {
      bouquetNo += Math.floor(count / k);
      count = 0;
    }
  }

  bouquetNo += Math.floor(count / k);
  if (bouquetNo >= m) {
    return true;
  } else return false;
}
// @lc code=end
