var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;

    while (start < end) {

      if (nums[i] + nums[start] + nums[end] === 0) {
        arr.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (nums[i] + nums[start] + nums[end] < 0) start++;
      else end--;
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
