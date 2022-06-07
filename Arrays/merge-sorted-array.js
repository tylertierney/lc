const merge = (nums1, m, nums2, n) => {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[last] = nums2[n - 1];
      n--;
    } else {
      nums1[last] = nums1[m - 1];
      m--;
    }

    last--;
  }

  while (last > -1 && n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
// const nums1 = [0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;
console.log(merge(nums1, m, nums2, n));
