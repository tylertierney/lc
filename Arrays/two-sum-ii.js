// This gives correct answer but it's a little
// too slow.
// const twoSum = (numbers, target) => {
//   const dictionary = {};

//   for (let i = 0; i < numbers.length; i++) {
//     const difference = target - numbers[i];

//     if (numbers[i] in dictionary) {
//       return [dictionary[numbers[i]] + 1, i + 1];
//     }

//     dictionary[difference] = i;
//   }
// };

// Two-pointer approach is faster
const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }

    if (sum > target) {
      r--;
    }
    if (sum < target) {
      l++;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(numbers, target));
