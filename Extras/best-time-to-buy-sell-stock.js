const maxProfit = (prices) => {
  if (prices.length <= 1) return 0;
  let l = 0;
  let r = 1;
  let max = 0;

  while (r < prices.length) {
    max = Math.max(max, prices[r] - prices[l]);
    if (prices[r] <= prices[l]) {
      l = r;
    }
    r++;
  }

  return max;
};

// const prices = [7, 3, 5, 1, 6, 4];

// const prices = [7, 6, 4, 3, 1];

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
