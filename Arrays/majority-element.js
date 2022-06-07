const majorityElement = (nums) => {
  const minimum = Math.floor(nums.length / 2);

  const frequencies = {};

  let i = 0;
  while (i < nums.length) {
    if (nums[i] in frequencies) {
      frequencies[nums[i]]++;
    } else {
      frequencies[nums[i]] = 1;
    }
    i++;
  }

  for (const key in frequencies) {
    if (frequencies[key] > minimum) return key;
  }

  return -1;
};

// const nums = [3, 2, 3];
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
