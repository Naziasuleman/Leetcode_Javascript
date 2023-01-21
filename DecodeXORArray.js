var decode = function (encoded, first) {
  let res = [];
  res.push(first);
  for (let i = 0; i < encoded.length; i++) {
    res.push(encoded[i] ^ res[i]);
  }
  return res;
};

console.log(decode([1, 2, 3], 1));
