// const rob = (nums) => {
//     // Recursion with memoization
//     // Time complexity O(N)
//     // Space complexity O(N)
//   const dp = {};

//   const robFrom = (i, nums) => {
//     if (i >= nums.length) return 0;

//     if (i in dp) {
//       return dp[i];
//     }

//     let answer = Math.max(robFrom(i + 1, nums), robFrom(i + 2, nums) + nums[i]);

//     dp[i] = answer;
//     return answer;
//   };

//   return robFrom(0, nums);
// };

const rob = (nums) => {};

// const nums = [1, 2, 3, 1];
// const nums = [2, 1, 1, 2];
// const nums = [2, 7, 9, 3, 1];
const nums = [2, 3];

console.log(rob(nums));
