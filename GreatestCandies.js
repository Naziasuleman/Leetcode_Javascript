/**There are n kids with candies. You are given an integer array candies, where each candies[i] represents the
 * number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that
 * you have. Return a boolean array result of length n, where result[i] is true if, after giving the
 * ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false
 * otherwise. */

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = [];
  for (let i in candies) {
    if (candies[i] + extraCandies >= max) {
      arr.push(true);
    } else arr.push(false);
  }
  return arr;
};
//another way

var kidsWithCandies = function (candies, extraCandies) {
  let arr = [];
  for (let i in candies) {
    candies[i] + extraCandies >= Math.max(...candies)
      ? arr.push(true)
      : arr.push(false);
  }
  return arr;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
