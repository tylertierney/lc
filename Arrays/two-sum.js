const twoSum = (nums, target) => {
  const dictionary = {};

  let i = 0;
  while (i < nums.length) {
    const difference = target - nums[i];

    if (nums[i] in dictionary) {
      return [dictionary[nums[i]], i];
    }
    dictionary[difference] = i;
    i++;
  }
};

// const nums = [2, 7, 11, 15];
// const nums = [3, 2, 4];
const nums = [3, 3];
const target = 6;

console.log(twoSum(nums, target));
