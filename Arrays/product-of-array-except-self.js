const productExceptSelf = (nums) => {
  const answer = [1];

  let prefixesProduct = 1;
  let i = 0;
  while (i < nums.length - 1) {
    prefixesProduct = prefixesProduct * nums[i];
    answer[i + 1] = prefixesProduct;
    i++;
  }

  let postfixesProduct = 1;
  let j = nums.length - 1;

  while (j > -1) {
    answer[j] = postfixesProduct * answer[j];
    postfixesProduct = postfixesProduct * nums[j];
    j--;
  }

  return answer;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
