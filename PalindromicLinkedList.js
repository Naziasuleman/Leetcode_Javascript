var isPalindrome = function (arr) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.slice().reverse().join("") == arr.join("");
};
console.log(isPalindrome[(1, 2, 2, 1)]);
