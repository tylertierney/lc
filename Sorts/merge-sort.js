const nums = [5, 2, 3, 1];
// const left = [1, 2, 4, 6];
// const right = [3, 5];

const sort = (nums) => {
  if (nums.length <= 1) return nums;

  const mid = Math.floor((nums.length - 1) / 2);
  const leftHalf = sort(nums.slice(0, mid + 1));
  const rightHalf = sort(nums.slice(mid + 1, nums.length));
  return mergeArrays(leftHalf, rightHalf);
};

const mergeArrays = (left, right) => {
  const res = [];

  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l]);
      l++;
    } else {
      res.push(right[r]);
      r++;
    }
  }

  while (l < left.length) {
    res.push(left[l]);
    l++;
  }

  while (r < right.length) {
    res.push(right[r]);
    r++;
  }

  return res;
};

console.log(sort(nums));
