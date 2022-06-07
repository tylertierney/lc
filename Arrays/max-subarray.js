const maxSubArray = (nums) => {
  let globalMax = -Infinity;
  let currentMax = -Infinity;
  let i = 0;

  while (i < nums.length) {
    currentMax = Math.max(nums[i] + currentMax, nums[i]);
    globalMax = Math.max(currentMax, globalMax);
    i++;
  }
  return globalMax;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1, 1, 3, 4];
// const nums = [18];

console.log(maxSubArray(nums));
