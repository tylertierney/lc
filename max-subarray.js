const maxSubArray = (nums) => {
  // Time: O(n)
  // Space: O(1);
  let local = -Infinity;
  let global = -Infinity;

  let i = 0;
  while (i < nums.length) {
    local = Math.max(local + nums[i], nums[i]);
    global = Math.max(local, global);
    i++;
  }

  return global;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
