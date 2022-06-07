const coinChange = (coins, amount) => {
  const dp = [0, -1, 1, 1];

  let i = 3;
  while (i <= amount) {
    dp[i] = 0;
    let currentTotal = amount;
    let j = coins.length - 1;

    while (j >= 0 && currentTotal > 0) {
      let numberOfThisCoin = ~~(currentTotal / coins[j]);
      dp[i] += numberOfThisCoin;
      currentTotal -= numberOfThisCoin * coins[j];

      if (currentTotal === 0) break;
      if (j === 0 && currentTotal > 0) dp[i] = -1;
      j--;
    }
    i++;
  }
  return dp;
};

const coins = [2, 3];
const amount = 4;
console.log(coinChange(coins, amount));
