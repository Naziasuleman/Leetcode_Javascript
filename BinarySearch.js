//recursive method
var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};
const binarySearch = function (nums, target, low, high) {
  let mid = Math.floor((low + high) / 2);
  if (high < low) return -1;
  else if (nums[mid] === target) return mid;
  else if (target > nums[mid]) return binarySearch(nums, target, mid + 1, high);
  else return binarySearch(nums, target, low, mid - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
