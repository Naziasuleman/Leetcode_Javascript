var sortArrayByParity = function (nums) {
  let start = 0,
    end = 1;

  //iterating through all elements
  for (end in nums) {
    //if value at start pointer is even, move start pointer to right
    if (nums[start] % 2 === 0) start++;
    //check whether the value at end pointer is even, swap
    else if (nums[end] % 2 === 0) {
      //destructing - swapping
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
    }
  }
  return nums;
};
console.log(sortArrayByParity([3, 1, 2, 4]));
