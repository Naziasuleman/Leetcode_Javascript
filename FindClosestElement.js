var findClosestElements = function (arr, k, x) {
  const res = [];
  let left = 0,
    right = arr.length - k;

  // find lowest bound using binary search
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const r_distance = arr[mid + k] - x;
    const l_distance = x - arr[mid];

    // if arr[mid + k] closer to x -> search right half;
    //if arr[mid] closer to x -> search left half
    r_distance < l_distance ? (left = mid + 1) : (right = mid);
  }

  for (let i = left; i < left + k; i++) res.push(arr[i]);

  return res;
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
