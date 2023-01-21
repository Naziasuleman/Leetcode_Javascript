var decompressRLElist = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    while (freq-- > 0) {
      ans.push(val);
    }
  }
  return ans;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
