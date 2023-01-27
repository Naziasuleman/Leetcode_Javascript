var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};
const binarySearch = (nums, start, end, target) => {
  let mid = (start + end) >> 1,
    left = -1,
    right = -1;
  if (start <= end) {
    if (nums[mid] === target) return mid;
    else {
      left = binarySearch(nums, start, mid - 1, target);
      right = binarySearch(nums, mid + 1, end, target);
    }
  }
  return Math.max(left, right);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
