var hasCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;

  //   let arr = [];
  // while (fast && fast.next) {
  //   fast = fast.next.next;
  //   slow = slow.next;
  //   arr.push(slow, fast);
  //   if (arr.includes(fast)) return true;
  // }
};
