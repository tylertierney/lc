const permute = (nums) => {
  const res = [];
  const n = nums.length;
  const backtrack = (first) => {
    if (first === n) res.push([...nums]);

    let i = first;
    while (i < n) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
      i++;
    }
  };

  backtrack(0);

  return res;
};

const nums = [1, 2];
// 1, 2, 3
// 1, 3, 2
// 2, 1, 3
// 2, 3, 1
// 3, 1, 2
// 3, 2, 1

console.log(permute(nums));
