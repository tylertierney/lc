const climbStairs = (n) => {
  // Time: O(n)
  // Space: O(1)
  if (n <= 2) return n;

  let prev1 = 2;
  let prev2 = 1;
  let i = 3;
  while (i <= n) {
    let temp = prev1;
    prev1 = prev1 + prev2;
    prev2 = temp;
    i++;
  }

  return prev1;

  // if (n === 1) return 1;
  // if (n === 2) return 2;
  // let prev1 = 1;
  // let prev2 = 1;

  // let res = 0;
  // let i = 0;
  // while (i < n - 1) {
  //   res = prev1 + prev2;
  //   prev2 = prev1;
  //   prev1 = res;
  //   i++;
  // }
  // return res;
};

console.log(climbStairs(5));
