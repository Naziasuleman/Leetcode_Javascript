var getRow = function (rowIndex) {
  let row = [1];
  while (rowIndex > 0) {
    row.splice(0, 0, 0);
    row.push(0);
    let res = [];
    for (let i = 0; i < row.length - 1; i++) res.push(row[i] + row[i + 1]);
    row = res;
    rowIndex--;
  }
  return row;
};

console.log(getRow(3));
console.log(getRow(1));
console.log(getRow(0));
