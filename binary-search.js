const search = (nums, target) => {
  // Time: O(log n)

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};

// const target = 9;
// const nums = [-1, 0, 3, 5, 9, 12];

const target = 1;
const nums = [1];
console.log(search(nums, target));
