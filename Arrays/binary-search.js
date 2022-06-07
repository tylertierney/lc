// This is the iterative approach
// const search = (nums, target) => {
//   let l = 0;
//   let r = nums.length - 1;

//   while (l <= r) {
//     let mid = Math.floor((l + r) / 2);
//     if (nums[mid] === target) return mid;
//     if (nums[mid] < target) {
//       l = mid + 1;
//     } else {
//       r = mid - 1;
//     }
//   }
//   return -1;
// };

// const nums = [1];
const nums = [-1, 0, 3, 5, 9, 12];
// const nums = [-1, 0, 3, 5, 9, 12];

// console.log(search(nums, 4));

// This is the recursive

const searchRecursive = (nums, target) => {
  const search = (l, r) => {
    const mid = Math.floor((l + r) / 2);
    if (l > r) return -1;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      return search(l, mid - 1);
    } else {
      return search(mid + 1, r);
    }
  };

  return search(0, nums.length - 1);
};

console.log(searchRecursive(nums, 0));
