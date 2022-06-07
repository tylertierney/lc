// const tribonacci = (n) => {
//     // Recursive
//     // Doesn't pass Leetcode, time limit exceeded
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;

//   return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
// };

const tribonacci = (n) => {
  const dp = {
    0: 0,
    1: 1,
    2: 1,
  };

  let i = 3;
  while (i <= n) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    i++;
  }

  return dp[n];
};

console.log(tribonacci(25));
