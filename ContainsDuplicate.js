/**Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct. */

var containsDuplicate = function (nums) {
  return new Set(nums).size != nums.length ? true : false;
};

var containsDuplicate = function (nums) {
  let array = [];
  for (let i of nums) {
    if (array.includes(i)) return true;
    else array.push(i);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
