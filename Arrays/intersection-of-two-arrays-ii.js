const intersect = (nums1, nums2) => {
  const countUnique = (nums, dict) => {
    let i = 0;
    while (i < nums.length) {
      if (nums[i] in dict) {
        dict[nums[i]]++;
      } else {
        dict[nums[i]] = 1;
      }
      i++;
    }
    return dict;
  };

  const dict1 = countUnique(nums1, {});
  const dict2 = countUnique(nums2, {});

  let res = [];
  for (const val in dict1) {
    if (val in dict2) {
      let j = 0;
      while (j < Math.min(dict1[val], dict2[val])) {
        res.push(parseInt(val, 10));
        j++;
      }
    }
  }
  return res;
};

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
