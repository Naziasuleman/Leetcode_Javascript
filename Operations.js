/*** Given an array of strings operations containing a list of operations,
 * return the final value of X after performing all the operations.*/

// solution:

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i in operations) {
    if (operations[i] == "X++" || operations[i] == "++X") {
      x++;
    } else {
      x--;
    }
  }
  return x;
};

// another way
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i in operations) {
    operations[i] == "X++" || operations[i] == "++X" ? x++ : x--;
  }
  return x;
};

//operations = ["--X", "X++", "X++"];
operations = ["X++", "++X", "--X", "X--"];
//operations = ["++X", "++X", "X++"];
console.log(finalValueAfterOperations(operations));
