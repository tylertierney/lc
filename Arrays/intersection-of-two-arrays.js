const intersection = (nums1, nums2) => {
  // Time complexity: O(N+M)
  // Space complexity: O(N+M)
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const res = [];

  set1.forEach((val) => {
    if (set2.has(val)) res.push(val);
  });

  return res;
};

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersection(nums1, nums2));
