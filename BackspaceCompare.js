var backspaceCompare = function (s, t) {
  return compare(s) === compare(t);
};
const compare = (s) => {
  const arr = [];
  s = s.split("");
  for (let i of s) {
    // if # (backspace) moving one step back, else add them into new arr
    i === "#" ? arr.pop() : arr.push(i);
  }
  return arr.join("");
};
console.log(backspaceCompare("ab#c", "adc"));
