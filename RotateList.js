//Three things to do:
//1. connection of tail with head
//2. tail.next = null
//3. Tail.next = newhead

const rotateRight = (head, k) => {
  //if the linked list is empty
  if (!head && k === 0) return head;

  //assigning the newhead and tail to head of linkedlist
  let len = 1,
    newhead = head,
    tail = head;

  //reaching to tail of linkedlist and total len
  while (!tail.next) {
    tail = tail.next;
    len++;
  }
  //connection of tail to head - 1 step
  tail.next = head;

  k %= len;
  //finding the new tail
  for (let i = 0; i < len - k; i++) tail = tail.next;
  //step 3
  newhead = tail.next;
  //step 2
  tail.next = null;

  return newhead;
};
