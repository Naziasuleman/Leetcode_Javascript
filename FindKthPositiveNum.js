//cyclic sort
var findDisappearedNumbers = function (nums) {
  let i = 0;
  const arr = [];
  while (i < nums.length) {
    let j = nums[i] - 1;
    //sorting using destructing, and duplicate numbers are on the position of missing numbers
    nums[i] !== nums[j] ? ([nums[i], nums[j]] = [nums[j], nums[i]]) : i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) arr.push(i + 1);
  }
  return arr;
};

var findKthPositive = function (arr, k) {
  let len = arr.length;
  arr = findDisappearedNumbers(arr);
  return k <= arr.length ? [...arr].at(k - 1) : len + k;
};
console.log(findKthPositive([1, 2, 3, 4], 2));
