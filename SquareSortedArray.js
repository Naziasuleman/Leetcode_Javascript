var sortedSquares = function (nums) {
  let s = 0,
    e = nums.length - 1;
  const arr = [];

  while (s <= e) {
    if (Math.abs(nums[s]) > Math.abs(nums[e])) {
      arr.push(nums[s] * nums[s]);
      s++;
    } else {
      arr.push(nums[e] * nums[e]);
      e--;
    }
  }
  return arr.reverse();
  //another solution
  // return s.split("").reverse().join("") == s ? 1 : 2;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
