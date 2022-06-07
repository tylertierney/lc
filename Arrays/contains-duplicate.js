const containsDuplicate = (nums) => {
  const dictionary = {};

  let i = 0;
  while (i < nums.length) {
    console.log(nums[i]);
    if (nums[i] in dictionary) return true;

    dictionary[nums[i]] = "something";
    i++;
  }

  return false;
};

const nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));
