var minimumRecolors = function (blocks, k) {
  let white = 0;
  let best = 0;
  for (let i in blocks) {
    //keep track of each element when its white
    if (blocks[i] === "W") white++;

    //till it reaches the total consecutive element req limit
    if (i < k) best = white;
    else {
      //after subtracting the limit from present, still any element is white, remove it from white
      if (blocks[i - k] === "W") white--;
      best = Math.min(best, white);
    }
  }
  return best;
};

console.log(minimumRecolors("WWWB", 4));
