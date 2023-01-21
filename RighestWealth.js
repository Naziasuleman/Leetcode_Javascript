/***ou are given an m x n integer grid accounts where accounts[i][j] is the amount of money
 * the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth. */

var maximumWealth = function (accounts) {
  let res = 0,
    i = 0;
  while (i < accounts.length) {
    let temp = 0,
      j = 0;
    while (j < accounts[i].length) {
      temp += accounts[i][j];
      j++;
    }
    res = Math.max(res, temp);
    i++;
  }
  return res;
};

//another solution
var maximumWealth = function (accounts) {
  let array = accounts.map((x) => x.reduce((a, b) => a + b));
  return Math.max(...array);
};

accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
