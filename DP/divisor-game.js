const divisorGame = (n) => {
  const dp = [false, false, true];

  const dfs = (n, dp) => {
    if (n <= 1) return false;
    if (dp[n]) return dp[n];

    let i = 1;
    while (i < n) {
      if (n % i === 0) {
        if (!dfs(n - i, dp)) {
          dp[n] = true;
          return true;
        }
      }
    }
    dp[n] = false;
    return false;
  };

  return dfs(n, dp);
};

const n = 2;
console.log(divisorGame(3));
