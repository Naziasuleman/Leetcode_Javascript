var minCostToMoveChips = function (position) {
  let odd = 0,
    even = 0;
  for (let p of position) p % 2 === 0 ? even++ : odd++;
  return Math.min(even, odd);
};
console.log(minCostToMoveChips([1, 2, 3]));
console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
