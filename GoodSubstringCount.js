var countGoodSubstrings = function (s) {
  // sliding window algorithm
  const k = 3;
  let obj = {};
  let count = 0,
    ws = 0;

  if (k > s.length) return false;
  for (let i in s) {
    //already present in the obj or not,
    obj[s[i]] ? (obj[s[i]] += 1) : (obj[s[i]] = 1);

    if (i >= k - 1) {
      if (Object.keys(obj).length == k) count += 1;

      obj[s[ws]] -= 1;
      if (obj[s[ws]] == 0) delete obj[s[ws]];
      ws += 1;
    }
  }
  return count;
};

console.log(countGoodSubstrings("xyzzaz"));
