const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return mergeArrays(mergeSort(left), mergeSort(right));
};

const mergeArrays = (arr1, arr2) => {
  let res = [];
  let l = 0;
  let r = 0;
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] <= arr2[r]) {
      res.push(arr1[l]);
      l++;
    } else {
      res.push(arr2[r]);
      r++;
    }
  }
  res = [...res, ...arr1.slice(l), ...arr2.slice(r)];
  return res;
};

const s = [1, 2, 3, 4, 5, 6];
const nums = [1, 4, 3, 2, 5, 6];
// const nums1 = [1, 3, 5];
// const nums2 = [2, 4];

console.log(mergeSort(nums));
// console.log(mergeArrays(nums1, nums2));

// const mid = Math.floor((nums.length - 1) / 2);

// console.log(s.slice(0, mid));
// console.log(s.slice(mid));
