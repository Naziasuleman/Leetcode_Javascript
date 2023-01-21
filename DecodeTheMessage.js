/**You are given the strings key and message, which represent a cipher key and a secret message, respectively.
 * The steps to decode message are as follows: Use the first appearance of all 26 lowercase English
 * letters in key as the order of the substitution table. */

// var decodeMessage = function (key, message) {
//   const createchar = (ascii) => String.fromCharCode(ascii);
//   let map = new Map(),
//     newset = new Set();
//   let index = 97,
//     stringvar = "";

//   for (const c of key) {
//     if (c == " " || newset.has(c)) continue;
//     map.set(c, createchar(index++));
//     newset.add(c);
//   }
//   for (const i of message) {
//     stringvar += map.get(i) || " ";
//   }
//   return stringvar;
// };

//another solution
var decodeMessage = function (key, message) {
  let res = "";
  key = Array.from(new Set(key.split(" ").join("")));

  const map = new Map(),
    alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i in alphabets) {
    map.set(key[i], alphabets[i]);
  }
  for (let c of message) {
    res += map.get(c) || " ";
  }
  return res;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
