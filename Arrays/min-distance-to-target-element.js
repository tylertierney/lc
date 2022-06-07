const getMinDistance = (nums, target, start) => {
  let l = 0;
  let r = nums.length - 1;
  let min = Infinity;

  while (l <= r) {
    if (nums[l] === target) {
      min = Math.min(min, Math.abs(l - start));
    }

    if (nums[r] === target) {
      min = Math.min(min, Math.abs(r - start));
    }

    if (min === 0) return 0;
    l++;
    r--;
  }

  return min;
};

// const nums = [1,2,3,4,5];
const nums = [1, 2, 3, 4, 4, 6];
const target = 2;
const start = 5;

console.log(getMinDistance(nums, target, start));
