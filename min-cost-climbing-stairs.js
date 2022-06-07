const minCostClimbingStairs = (cost) => {
  // const dp = [10(0), 15(0), 10(20), (res = 15)];

  let prev1 = 0;
  let prev2 = 0;

  let i = 2;
  while (i <= cost.length) {
    // console.log(prev1);
    let temp = prev1;
    prev1 = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
    prev2 = temp;
    i++;
  }

  return prev1;
};

// const cost = [10, 15, 20];
// const cost = [10, 15];
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// const cost = [0, 0, 0, 1];
console.log(minCostClimbingStairs(cost));
