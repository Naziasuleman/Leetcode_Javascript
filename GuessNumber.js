//coding pattern : binary search using recursion
//guess - build in api
var guessNumber = function (n) {
  const findNumber = (low, high) => {
    const mid = Math.floor((high + low) / 2);

    if (guess(mid) === 0) return mid;
    else if (guess(mid) === -1) return findNumber(low, mid - 1);
    else return findNumber(mid + 1, high);
  };

  return findNumber(0, n);
};
console.log(guessNumber(10));
