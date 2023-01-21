//cyclic sort
var findDisappearedNumbers = function (nums) {
  let i = 0;
  const arr = [];
  while (i < nums.length) {
    let j = nums[i] - 1;
    //sorting using destructing, and duplicate numbers are on the position of missing numbers
    nums[i] !== nums[j] ? ([nums[i], nums[j]] = [nums[j], nums[i]]) : i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) arr.push(i + 1);
  }
  return arr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
