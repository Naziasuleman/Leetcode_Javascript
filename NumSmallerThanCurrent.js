/**Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and
 * nums[j] < nums[i]. Return the answer in an array. */

var smallerNumbersThanCurrent = function (nums) {
  return nums.map((x) => nums.filter((y) => x > y).length);
};

//another way

var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  count = 0;
  for (let i in nums) {
    for (let j in nums) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
