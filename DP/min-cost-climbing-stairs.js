// const minCostClimbingStairs = (cost) => {
//   cost.push(0);

//   for (let i = cost.length - 3; i >= 0; i--) {
//     cost[i] += Math.min(cost[i + 1], cost[i + 2]);
//   }

//   return Math.min(cost[0], cost[1]);
// };

// const minCost = (cost) => {
//   const n = cost.length;
//   const traverse = (n) => {
//     if (n < 0) return 0;
//     if (n === 0) return cost[n];
//     if (n === 1) return cost[n];
//     return cost[n] + Math.min(traverse(n - 1), traverse(n - 2));
//   };

//   return Math.min(traverse(n - 1), traverse(n - 2));
// };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const minCostClimbingStairs = (cost) => {
//   // Iteratively using helper array.
//   // Time and space are both O(n)

//   const minCosts = [0, 0];

//   const n = cost.length;
//   let i = 2;
//   while (i <= n) {
//     minCosts[i] = Math.min(
//       minCosts[i - 1] + cost[i - 1],
//       minCosts[i - 2] + cost[i - 2]
//     );
//     i++;
//   }

//   return minCosts[n];
// };

const minCostClimbingStairs = (cost) => {
  // Using temporary variables rather than helper array.
  // This has O(n) time and O(1) space.
  let minCost1 = 0;
  let minCost2 = 0;

  let i = 2;
  while (i < cost.length + 1) {
    const currentMinCost = Math.min(
      minCost1 + cost[i - 1],
      minCost2 + cost[i - 2]
    );
    if (i === cost.length) {
      return currentMinCost;
    }

    const temp = minCost1;
    minCost1 = currentMinCost;
    minCost2 = temp;

    i++;
  }
};

// const cost = [10, 15];
// const cost = [10, 15, 20];
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));
// console.log(minCost(cost));
