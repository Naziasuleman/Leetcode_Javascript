/**Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums. */

var runningSum = function (nums) {
  let runningSum = [],
    sum = 0;
  for (let i in nums) {
    sum += nums[i];
    runningSum.push(sum);
  }
  return runningSum;
};
