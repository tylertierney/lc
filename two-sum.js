const pairExists = (nums, target) => {
  // Time complexity: linear O(n)
  //   const dictionary = {};

  //   let i = 0;
  //   while (i < nums.length) {
  //     const difference = target - nums[i];

  //     if (nums[i] in dictionary) {
  //       return true;
  //     } else {
  //       dictionary[difference] = i;
  //     }
  //     i++;
  //   }

  //   return false;
  /////////////////////////////////////////
  // SLOWER
  // Using loop with binary search, N * O(log n)

  //   nums.sort((a, b) => a - b);

  //   let i = 0;
  //   while (i < nums.length - 1) {
  //     const difference = target - nums[i];
  //     let l = i + 1;
  //     let r = nums.length - 1;
  //     while (l <= r) {
  //       const mid = Math.floor((l + r) / 2);
  //       if (nums[mid] === difference) {
  //         return true;
  //       }
  //       if (nums[mid] < difference) {
  //         r = mid - 1;
  //       } else {
  //         l = mid + 1;
  //       }
  //     }
  //     i++;
  //   }
  //   return false;
  /////////////////////////////////////////
  // Time complexity: O(log N);
  nums.sort((a, b) => a - b);
  // [1,1,3,5,6,9]
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] === target) return true;
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  return false;
};

const target = 8;
// const nums = [9, 2, 3, 1];
const nums = [1, 6, 9, 4, 2];

console.log(pairExists(nums, target));
