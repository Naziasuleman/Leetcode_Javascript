var intervalIntersection = function (firstList, secondList) {
  let ptr1 = 0,
    ptr2 = 0,
    arr = [];

  while (ptr1 < firstList.length && ptr2 < secondList.length) {
    if (
      secondList[ptr2][0] <= firstList[ptr1][1] &&
      firstList[ptr1][0] <= secondList[ptr2][1]
    ) {
      arr.push([
        Math.max(secondList[ptr2][0], firstList[ptr1][0]),
        Math.min(secondList[ptr2][1], firstList[ptr1][1]),
      ]);
    }
    firstList[ptr1][1] < secondList[ptr2][1] ? ptr1++ : ptr2++;
  }
  return arr;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
