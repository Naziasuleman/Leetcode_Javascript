var minOperations = function (nums, x) {
  let ws = 0,
    runningSum = 0,
    max_length = 0, //initially assign max length to -1
    sum = nums.reduce((arr, cur) => arr + cur, 0), //finding the sum of array(nums)
    subarraySum = sum - x; //size of sub arr which have to find

  for (let we in nums) {
    runningSum += nums[we]; //sum of subarray
    //if its become greater then the subarray sum, will remove elements from the start
    while (runningSum > subarraySum) runningSum -= nums[ws++];

    // if the we find the subarry with sum equal to subarray sum, store that
    if (runningSum === subarraySum)
      // pick the max length of sub array whose sum is equal to sumsubarr,
      //so that we'll have the min elemnts left for operation
      max_length = Math.max(max_length, we - ws + 1);
  }
  return max_length == 0 ? -1 : nums.length - max_length;
};
console.log(minOperations([1, 1, 4, 2, 3], 5));
