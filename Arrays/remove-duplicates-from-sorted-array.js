const removeDuplicates = (nums) => {
  let left = 1;
  let right = 1;

  while (right < nums.length) {
    if (nums[right] === nums[right - 1]) {
      right++;
    } else {
      nums[left] = nums[right];
      left++;
      right++;
    }
  }

  return left;
};

// const nums = [1, 1, 2];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// [0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
