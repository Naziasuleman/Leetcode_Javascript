var duplicateZeros = function (arr) {
  let len = arr.length;
  console.log(len);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  return arr.slice(0, len);
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
