// Using recursion.
// This one doesn't pass Leetcode,
// they want you to iterate instead.
// const climbStairs = (n) => {
//   if (n === 2) return 2;
//   if (n === 1) return 1;
//   if (n <= 0) return 0;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

const climbStairs = (n) => {
  if (n <= 2) return n;

  let prev1 = 2;
  let prev2 = 1;

  let i = 3;
  while (i <= n) {
    const res = prev1 + prev2;
    prev2 = prev1;
    prev1 = res;

    if (i === n) return res;
    i++;
  }
};

const n = 7;

console.log(climbStairs(n));
