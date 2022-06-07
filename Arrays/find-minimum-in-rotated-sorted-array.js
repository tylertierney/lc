const findMin = (nums) => {
  if (nums.length < 2) return nums[0];
  let l = 0;
  let r = nums.length - 1;
  let res = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
    }
    const mid = ~~((l + r) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

// const nums = [5, 1, 2, 3, 4];
// const nums = [12, 15, 3, 6, 9];
// const nums = [9, 12, 15, 3, 6];
const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [1, 2, 3, 4, 5];

console.log(findMin(nums));

// const binarySearch = (nums, target) => {
//   let l = 0;
//   let r = nums.length - 1;

//   while (l <= r) {
//     const mid = ~~((l + r) / 2);

//     if (nums[mid] === target) return mid;
//     if (nums[mid] > target) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }

//   return -1;
// };

// const target = 2;
// const nums1 = [3, 6, 9, 12, 15, 18];
// console.log(binarySearch(nums1, target));
