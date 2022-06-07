const mergeHalves = (arr1, arr2) => {
  let res = [];
  let l = 0;
  let r = 0;
  while (l < arr1.length && r < arr2.length) {
    if (arr2[r] <= arr1[l]) {
      res.push(arr2[r]);
      r++;
    } else {
      res.push(arr1[l]);
      l++;
    }
  }
  res = [...res, ...arr1.slice(l), ...arr2.slice(r)];
  return res;
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor((nums.length - 1) / 2);
  const leftHalf = mergeSort(nums.slice(0, mid + 1));
  const rightHalf = mergeSort(nums.slice(mid + 1, nums.length));
  return mergeHalves(leftHalf, rightHalf);
};

const nums = [1, 3, 2, 5, 4];

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(mergeSort(nums));
