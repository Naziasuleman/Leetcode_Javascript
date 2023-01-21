var reverseList = function (head) {
  let prev = head.next;
  head.next = null;
  let next;

  while (prev) {
    next = prev.next;
    prev.next = head;
    head = prev;
    prev = next;
  }
  return head;
};
