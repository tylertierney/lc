const maxProduct = (nums) => {
  let local = -Infinity;
  let global = -Infinity;

  let i = 0;

  while (i < nums.length) {
    local = Math.max(nums[i], local * nums[i]);
    global = Math.max(local, global);
    i++;
  }

  return global;
};

// -36
const nums = [2, 3, -1, -3, -2];

console.log(maxProduct(nums));
