var isValid = function (s) {
  const openers = ["{", "[", "("],
    closers = ["}", "]", ")"];

  const map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);

  let stack = [];
  for (const i of s) {
    // for present letter (
    // it is present in the opener, we push it in stack
    if (openers.includes(i)) stack.push(i);
    // then for the next letter ), if its in closer array
    else if (closers.includes(i)) {
      // pop the previous inserted letter from the stack
      let prev = stack.pop();
      //searching the pop letter '(' in map which return us with ')'
      //if the ')' matches with the presnet letter which is also ')'  return true
      if (map.get(prev) !== i) return false;
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(){}}{"));
