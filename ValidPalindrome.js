/**A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers. Given a string s, return true
 * if it is a palindrome, or false otherwise. */

var isPalindrome = function (s) {
  //replacing all the characters except a-z and 0-9 numbers with empty string
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  return s === s.split("").reverse().join("") ? true : false;
};
//console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("never odd or even"));
