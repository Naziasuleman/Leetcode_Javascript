var searchRange = function (nums, target) {
  let minIndex = binarySearch(nums, target, false);
  if (minIndex !== -1) {
    let maxIndex = binarySearch(nums, target, true);
    return [minIndex, maxIndex];
  }
  return [-1, -1];
};

function binarySearch(nums, target, findEnd) {
  let targetIndex = -1,
    start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;
    else {
      targetIndex = mid;
      findEnd ? (start = mid + 1) : (end = mid - 1);
    }
  }
  return targetIndex;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], (target = 8)));
