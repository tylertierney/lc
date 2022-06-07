const quickSort = (nums) => {
  const sort = (nums, l, r) => {
    if (l >= r) return;

    const pivot = nums[Math.floor((l + r) / 2)];
    const index = partition(nums, l, r, pivot);
    sort(nums, l, index - 1);
    sort(nums, index, r);

    return nums;
  };

  const partition = (nums, l, r, pivotVal) => {
    while (l <= r) {
      while (nums[l] < pivotVal) l++;
      while (nums[r] > pivotVal) r--;
      if (l <= r) {
        [nums[r], nums[l]] = [nums[l], nums[r]];
        l++;
        r--;
      }
    }

    return l;
  };

  return sort(nums, 0, nums.length - 1);
};

const nums = [3, 1, 4, 5, 2];
console.log(quickSort(nums));
