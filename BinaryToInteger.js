/**Given head which is a reference node to a singly-linked list. The value of each node in the
 * linked list is either 0 or 1. The linked list holds the binary representation of a number. */
var getDecimalValue = function (head) {
  let Binary = "";
  while (head) {
    Binary += head.val;
    head = head.next;
  }
  return parseInt(Binary, 2);
};
console.log(getDecimalValue([1, 0, 1]));
