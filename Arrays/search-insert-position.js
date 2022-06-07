const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = ~~((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const nums = [1, 3, 5, 6];
const target = 2;

console.log(searchInsert(nums, target));
