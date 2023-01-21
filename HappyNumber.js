function getNum(n) {
  let square = 0;
  //till the num is not equal to zero
  while (n) {
    //taking square of remainder of number / 10
    square += Math.pow(n % 10, 2);
    //update the number
    n = Math.floor(n / 10);
  }
  return square;
}

var isHappy = function (n) {
  let slow = n,
    fast = getNum(n);

  while (fast !== slow) {
    fast = getNum(getNum(fast));
    slow = getNum(slow);
  }
  return fast === 1 ? true : false;
};

console.log(getNum(19));
console.log(isHappy(2));
