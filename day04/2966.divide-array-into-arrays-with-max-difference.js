/*
 * @lc app=leetcode id=2966 lang=javascript
 *
 * [2966] Divide Array Into Arrays With Max Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i += 3) {
    //checking if the sub-array has more than one element
    if (i + 2 < nums.length) {
      //checking if the elemnt difference is smaller is provided k
      if (nums[i + 2] - nums[i] > k) {
        return [];
      }

      ans.push(nums.slice(i, i + 3));
    }
    //if the last sub-array has less than three elements then we will add the remainig elemnt in the array
    else ans[ans.length - 1] = ans[ans.length - 1].concat(nums.slice(i));
  }
  return ans;
};
// @lc code=end
