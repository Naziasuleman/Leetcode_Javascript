var getRow = function (rowIndex) {
  let res = [];
  for (let i = 0; i <= rowIndex; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(temp);
  }
  return res[rowIndex];
};

console.log(getRow(3));
