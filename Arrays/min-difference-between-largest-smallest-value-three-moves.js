const minDifference = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let min = nums[0];

  for (let i = 0; i < 3; i++) {
    const target = nums.length - 1 - i;
    const diff = nums[target] - min;
    nums[target] = nums[target] - diff;
  }

  const max = Math.max(...nums);
  min = Math.min(...nums);

  return {
    nums,
    minDiff: max - min,
  };
  //   return max - min;
};

// const nums = [2,3,4,5];
// const nums = [5, 5, 5, 18, 18, 3, 2, 4];
// const nums = [5, 3, 2, 4];
// const nums = [1, 5, 0, 10, 14];
const nums = [6, 6, 0, 1, 1, 4, 6];
console.log(minDifference(nums));
