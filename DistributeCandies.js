/**Alice has n candies, where the ith candy is of type candyType[i]. Given the integer array candyType of
 * length n, return the maximum number of different types of candies she can eat if she only eats n / 2
 * of them.*/

var distributeCandies = function (candyType) {
  let candy = candyType.length / 2;
  let set = new Set(candyType);
  return candy > set.size ? set.size : candy;
};

//another way
var distributeCandies = function (candyType) {
  return Math.min(candyType.length / 2, new Set(candyType).size);
};
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
