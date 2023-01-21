/**Given a string s which consists of lowercase or uppercase letters, return the length of the
 * longest palindrome that can be built with those letters. */

var longestPalindrome = function (s) {
  let set = new Set();
  let c = 0;
  for (let i of s) {
    if (set.has(i)) {
      c += 2;
      set.delete(i);
    } else set.add(i);
  }
  if (set.size > 0) c++;
  return c;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("aaabaaaa"));
