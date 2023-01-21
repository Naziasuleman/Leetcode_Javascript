var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("a", "ab"));
