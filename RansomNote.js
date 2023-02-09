var canConstruct = function (ransomNote, magazine) {
  let map1 = {};
  for (let i of magazine) {
    !map1[i] ? (map1[i] = 1) : map1[i]++;
  }
  for (let i of ransomNote) {
    if (map1[i]) map1[i]--;
    else return false;
  }
  return true;
};
