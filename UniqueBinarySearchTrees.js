var numTrees = function (n) {
  let unique = 1;
  for (let i = 0; i < n; i++) {
    unique = (unique * 2 * (2 * i + 1)) / (i + 2);
  }
  return unique;
};

console.log(numTrees(3));
