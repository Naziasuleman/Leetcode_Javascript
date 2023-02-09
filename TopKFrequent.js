var topKFrequent = function (nums, k) {
  let hash = {};
  for (let i of nums) {
    //if not present, set to 1 else increment by 1
    !hash[i] ? (hash[i] = 1) : hash[i]++;
  }

  let arr = Object.keys(hash).map((key) => [hash[key], Number(key)]);
  console.log("arr:", arr);
  let newArr = minHeap(arr, k);
  console.log(newArr);
  let res = newArr.map((x) => x[1]);
  return res;
};

//implemenation of min heap
let minHeap = function (arr, k) {
  let heap = [null];

  let insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx][0] < heap[Math.floor(idx / 2)][0] && idx >= 1) {
        [heap[idx], heap[Math.floor(idx / 2)]] = [
          heap[Math.floor(idx / 2)],
          heap[idx],
        ];
        if (Math.floor(idx / 2) > 1) {
          idx = Math.floor(idx / 2);
        } else {
          break;
        }
      }
    }
  };
  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1][0] > heap[2][0]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      if (heap.length === 2) return smallest;
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i][0] >= heap[left][0] || heap[i][0] >= heap[right][0]) {
        if (heap[left][0] < heap[right][0]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined && heap[right] === undefined) break;
        if (heap[right] === undefined) {
          if (heap[left][0] < heap[i][0]) {
            [heap[left], heap[i]] = [heap[i], heap[left]];
          }
          break;
        }
        if (heap[left] === undefined) break;
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
  this.sort = function () {
    let result = new Array();
    while (heap.length > k + 1) {
      result.push(this.remove());
    }
    return result;
  };
  for (let i in arr) {
    insert(arr[i]);
  }
  console.log(heap);

  this.sort();
  //removing null
  heap.splice(0, 1);
  return heap;
};

console.log(topKFrequent([8, 8, 8, 6, 6, 3], 2));
