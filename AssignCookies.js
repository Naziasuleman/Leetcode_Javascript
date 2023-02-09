var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let ptr2 = 0;
  s.map((n) => {
    if (n >= g[ptr2]) {
      //ptr1++;
      ptr2++;
    }
  });
  return ptr2;
};

// var findContentChildren = function (g, s) {
//   s = s.sort((a, b) => a - b);
//   g = g.sort((a, b) => a - b);
//   let child = 0;
//   for (const j of s) {
//     if (j >= g[child]) child++;
//   }
//   return child;
// };
