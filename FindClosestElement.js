var findClosestElements = function (arr, k, x) {
  const closest = (low, high) => {
    if (low < high) {
      let mid = (low + high) >> 1; // Math.floor((low+high) / 2)
      if (x - arr[mid] <= arr[mid + k] - x) return closest(low, mid);
      else return closest(mid + 1, high);
    }
    //when the element doesn't exist
    else {
      return arr.slice(low, low + k);
    }
  };
  return closest(0, arr.length - 1);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
