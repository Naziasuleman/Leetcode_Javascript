var totalFruit = function (fruits) {
  let max = 0,
    ws = 0,
    basket = {};

  for (let we in fruits) {
    //fruit already present in basket; increment by 1 else assign 1
    !basket[fruits[we]] ? (basket[fruits[we]] = 1) : basket[fruits[we]]++;

    //if the limit exceed remove the fruits (only 1 quantity)
    while (Object.keys(basket).length > 2) {
      basket[fruits[ws]]--;

      //The quantity of removed fruit is zero in basket; delete fruit
      if (basket[fruits[ws]] === 0) delete basket[fruits[ws]];
      ws++;
    }
    max = Math.max(max, we - ws + 1);
  }

  return max;
};
console.log(totalFruit([1, 2, 3, 2, 2]));
