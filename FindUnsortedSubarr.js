var findUnsortedSubarray = function (nums) {
  const len = nums.length;
  let min = nums[len - 1],
    max = nums[0],
    minIdx = 0,
    maxIdx = 0;

  for (let i = 0; i < len; i++) {
    nums[i] >= max ? (max = nums[i]) : (maxIdx = i + 1);
  }

  for (let j = len - 1; j >= 0; j--) {
    nums[j] <= min ? (min = nums[j]) : (minIdx = j);
  }

  return maxIdx - minIdx;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
