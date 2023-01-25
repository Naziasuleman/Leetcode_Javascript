var generateParenthesis = function (n) {
  const arr = [];

  const pairs = (string, open, close) => {
    if (string.length >= n * 2) arr.push(string);
    if (open < n) pairs(string + "(", open + 1, close);
    if (close < open) pairs(string + ")", open, close + 1);
    
    return arr;
  };

  return pairs("", 0, 0);
};
console.log(generateParenthesis(3));
