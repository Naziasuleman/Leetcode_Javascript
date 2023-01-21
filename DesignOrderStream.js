var OrderedStream = function (n) {
  this.arr = new Array(n);
  this.ptr = 0;
};
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey - 1] = value;
  let res = [];
  if (idKey - 1 === this.ptr) {
    while (this.arr[this.ptr]) {
      res.push(this.arr[this.ptr++]);
    }
  }
  return res;
};

var obj = new OrderedStream(5);
var param_1 = obj.insert(
  ["OrderedStream", "insert", "insert", "insert", "insert", "insert"][
    ([5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"])
  ]
);
