//cyclic sort
var findDuplicates = function (nums) {
  let i = 1;
  const arr = [];

  while (i < nums.length) {
    let index = nums[i] - 1;
    //sorting using destructing, and duplicate numbers are on the position of missing numbers
    nums[i] !== nums[index]
      ? ([nums[i], nums[index]] = [nums[index], nums[i]])
      : i++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) arr.push(nums[i]);
  }
  return arr;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
