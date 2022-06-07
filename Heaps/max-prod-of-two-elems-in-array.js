const maxProduct = (nums) => {
  // Time complexity O(n^2) SLOWEST
  //   let max = 0;
  //   let i = 0;
  //   while (i < nums.length - 1) {
  //     let j = i + 1;
  //     while (j < nums.length) {
  //       max = Math.max((nums[i] - 1) * (nums[j] - 1), max);
  //       j++;
  //     }
  //     i++;
  //   }
  //   return max;
  ////////////////////////////////////////////////////////////////////
  // Time complexity O(nlogn) FASTER
  // nums.sort((a, b) => b - a);
  // return (nums[0] - 1) * (nums[1] - 1);
  ////////////////////////////////////////////////////////////////////
  // The FASTEST solution would be to use a max-heap.
  // Time Complexity O(n).
  // The heap would really look like a tree:
  //   const heap = {
  //     val: 5,
  //     left: {
  //       val: 4,
  //       left: null,
  //       right: {
  //         val: 2,
  //         left: null,
  //         right: null,
  //       },
  //     },
  //     right: {
  //       val: 3,
  //       left: null,
  //       right: null,
  //     },
  //   };
  // But we could represent it as an array. In python,
  // a heap is a built-in structure that exhibits itself as an
  // array. Such that when you add something to the heap,
  // the added element gets placed into the correct index,
  // as if you had a level order representation of a binary tree.
  // const heap = [5,4,3,2]
};

const nums = [3, 4, 5, 2];
// const nums = [1, 5, 4, 5];

console.log(maxProduct(nums));
