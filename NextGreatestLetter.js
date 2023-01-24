var nextGreatestLetter = function (letters, target) {
  const findNextGreatestLetter = (letters, start, end, target) => {
    if (start > end) return letters[start % letters.length];
    const mid = Math.floor((start + end) / 2);

    return letters[mid] <= target
      ? findNextGreatestLetter(letters, mid + 1, end, target)
      : findNextGreatestLetter(letters, start, mid - 1, target);
  };
  return findNextGreatestLetter(letters, 0, letters.length - 1, target);
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
