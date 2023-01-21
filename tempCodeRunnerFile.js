var restoreString = function (s, indices) {
  let res = Array.from({ length: s.length }, () => 0);
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
};