// var uniqueMorseRepresentations = function (words) {
//   const set = new Set();
//   for (let w of words) {
//     let result = "";
//     for (let c of w) {
//       result += map.get(c);
//     }
//     set.add(result);
//   }
//   return set.size;
// };

// const map = new Map([
//   ["a", ".-"],
//   ["b", "-..."],
//   ["c", "-.-."],
//   ["d", "-.."],
//   ["e", "."],
//   ["f", "..-."],
//   ["g", "--."],
//   ["h", "...."],
//   ["i", ".."],
//   ["j", ".---"],
//   ["k", "-.-"],
//   ["l", ".-.."],
//   ["m", "--"],
//   ["n", "-."],
//   ["o", "---"],
//   ["p", ".--."],
//   ["q", "--.-"],
//   ["r", ".-."],
//   ["s", "..."],
//   ["t", "-"],
//   ["u", "..-"],
//   ["v", "...-"],
//   ["w", ".--"],
//   ["x", "-..-"],
//   ["y", "-.--"],
//   ["z", "--.."],
// ]);

//another way
var uniqueMorseRepresentations = function (words) {
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const set = new Set();
  for (let i of words) {
    set.add(
      i
        .split("")
        .map((c) => codes[c.charCodeAt(0) - 97])
        .join("")
    );
  }
  return set.size;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
