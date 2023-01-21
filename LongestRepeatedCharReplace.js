var characterReplacement = function (s, k) {
  let freq = {},
    Repeat = 0,
    start = 0,
    maxLength = 0;

  for (let i in s) {
    !freq[s[i]] ? (freq[s[i]] = 1) : (freq[s[i]] += 1);

    Repeat = Math.max(Repeat, freq[s[i]]);
    if (i - start + 1 - Repeat > k) {
      freq[s[start]] -= 1;
      start += 1;
    }

    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

console.log(characterReplacement("ABAB", 2));
