//Search in Linked List
class Solution {
  searchKey(head, key) {
    // Your code goes here
    let current = head;
    while (current.next !== null) {
      if (current.val === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
