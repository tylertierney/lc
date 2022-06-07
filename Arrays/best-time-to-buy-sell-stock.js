const maxProfit = (prices) => {
  if (prices.length < 2) return 0;
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return max;
};

const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];
console.log(maxProfit(prices));
