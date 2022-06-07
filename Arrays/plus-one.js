const plusOne = (digits) => {
  let i = digits.length - 1;
  let carryOne = false;

  while (i >= 0) {
    if (digits[i] === 9) {
      carryOne = true;
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
    i--;
  }

  if (carryOne) {
    digits = [1, ...digits];
  }
  return digits;
};

const digits = [1, 2, 9];
// const digits = [9];

console.log(plusOne(digits));
