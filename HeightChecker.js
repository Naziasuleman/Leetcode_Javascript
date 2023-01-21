/**A school is trying to take an annual photo of all the students. The students are asked to stand in
 * a single file line in non-decreasing order by height. */

var heightChecker = function (heights) {
  let exp = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i in heights) {
    if (exp[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
