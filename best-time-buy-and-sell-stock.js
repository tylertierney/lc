const maxProfit = (prices) => {
  if (prices.length <= 1) return 0;

  let l = 0;
  let r = 1;
  let max = 0;

  while (r < prices.length) {
    if (prices[r] <= prices[l]) {
      l = r;
    }

    max = Math.max(prices[r] - prices[l], max);

    r++;
  }

  return max;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
