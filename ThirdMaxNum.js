var thirdMax = function (nums) {
  const nums1 = Array.from(new Set(nums.sort((a, b) => a - b)));
  // return array.length < 3 ? [...nums1].at(-1) : [...nums1].at(-3);
  let len = nums1.length;
  return len < 3 ? nums1[len - 1] : nums1[len - 3];
};



var thirdMax = function (nums) {
  const nums1 = new Set(nums.sort((a, b) => a - b));
  return nums1.size < 3 ? [...nums1].at(-1) : [...nums1].at(-3);
};
console.log(thirdMax([3, 1, 4]));
