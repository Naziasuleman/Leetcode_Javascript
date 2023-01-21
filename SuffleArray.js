/**Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].*/

var shuffle = function (nums, n) {
  let array = [];
  for (let i = 0; i < nums.length / 2; i++) {
    array.push(nums[i]);
    array.push(nums[n + i]);
  }
  return array;
};

//another sol
var shuffle = function (nums, n) {
  let array = [],
    i = 0;
  while (i < nums.length / 2) {
    array.push(nums[i], nums[n + i]);
    i++;
  }
  return array;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
