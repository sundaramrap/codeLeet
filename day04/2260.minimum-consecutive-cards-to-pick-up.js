/*
 * @lc app=leetcode id=2260 lang=javascript
 *
 * [2260] Minimum Consecutive Cards to Pick Up
 */

// @lc code=start
/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  const map = new Map();
  let minLength = Infinity;

  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      let prevIndex = map.get(cards[i]);
      minLength = Math.min(minLength, i - [prevIndex] + 1);
    }

    map.set(cards[i], i);
  }

  return minLength === Infinity ? -1 : minLength;
};
// @lc code=end
