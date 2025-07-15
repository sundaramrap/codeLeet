/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let current = head;
  let count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }

  let n = Math.floor(count / 2);

  current = head;
  for (let i = 0; i < n; i++) {
    current = current.next;
  }

  return current;
};
// @lc code=end
