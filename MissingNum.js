//cyclic sort
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i in nums) {
    // where the number(value) is not equal to its index
    if (nums[i] != i) return i;
  }
  //return the length of nums
  return nums.length;
};
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1, 2]));
