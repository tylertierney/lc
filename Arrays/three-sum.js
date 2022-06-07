// Sort the array. Then, for each val in nums, perform a two-pointer with L on i+1, and
// R at the end.
// The trick is to remember the previous value of L so you can increment
// an extra time if they're the same - this is done to avoid duplicates.

const threeSum = (nums) => {
  const res = [];
  if (nums.length < 3) return res;
  nums.sort((a, b) => a - b);

  nums.forEach((startingPosition, i) => {
    if (startingPosition !== nums[i - 1]) {
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[r] + nums[l] + startingPosition;
        if (sum === 0) res.push([startingPosition, nums[l], nums[r]]);
        if (sum <= 0) {
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        } else {
          r--;
        }
      }
    }
  });

  return res;
};

// const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [-2, 0, 0, 2, 2];
// const nums = [1, -1, -1, 0];
// const nums = [3,6,9,12,15,18];
const nums = [0, 0, 0, 0];
console.log(threeSum(nums));
