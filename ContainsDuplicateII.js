//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in
//the array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function (nums, k) {
  let map = {};
  for (let i in nums) {
    if (map[nums[i]]) {
      if (Math.abs(map[nums[i]] - i) <= k) {
        return true;
      }
    }
    map[nums[i]] = i;
  }
  return false;
};
