/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //search for sorted array side after parting the middle
  // eliminate the  left side or right side
  // look for element between low-target-mid--mid-target--high;

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //if mid is the target
    if (nums[mid] === target) return mid;
    //left part is sorted and looking for element there
    if (nums[low] <= nums[mid]) {
      // checking for target lying in between low and mid ;
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      // checking for target lying in between mid and high ;
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }

  return -1;
};
// @lc code=end
