var minOperations = function (logs) {
  let c = 0;
  for (let i of logs) {
    // if the value is equals to  ../ move one step back;
    // if the value == zero, its mean its alreday in main folder
    if (i === "../") {
      if (c != 0) c--;
    }
    // if the value != ./ (remain in same folder), move one step away from main folder
    else if (i !== "./") c++;
  }

  // returing the how many steps you are away from main
  return c;
};
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
