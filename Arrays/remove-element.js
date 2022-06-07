const removeElement = (nums, val) => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] !== val) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
    }
    r++;
  }
  return l;
};

const val = 2;
// const nums = [3, 2, 2, 3];
const nums = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(nums, val));
