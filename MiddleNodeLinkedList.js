// two pointer Approach
var middleNode = function (head) {
  let fast = head,
    slow = head;
  // fast pointer moves two step faster than slow
  //when fast.next is null, the slow reaches at middle node
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
