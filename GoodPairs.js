/**Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j. */

// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   for (let i in nums) {
//     for (let j in nums) {
//       if (nums[i] == nums[j] && i < j) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i in nums) {
    for (let j in nums) {
      if (i < j) if (nums[i] == nums[j]) count++;
    }
  }
  return count;
};
nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));
