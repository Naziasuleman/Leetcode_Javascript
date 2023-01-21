var removePalindromeSub = function (s) {
  let len = s.length - 1;

  for (let i = 0; i < len; i++) {
    if (s[i] === s[len]) len--; // for plaindromic sequence
    else return 2; // for non plaindromic sequence (min steps)
  }
  return 1; //palindrome string
};
console.log(removePalindromeSub("abbaa"));
