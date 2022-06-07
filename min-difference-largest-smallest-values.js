const minDifference = (nums) => {
  const s = nums.sort((a, b) => b - a);
  const largest = s[0];
  const smallest = s[s.length - 1];

  let l = 0;
  let r = s.length - 1;
  while (l < 3) {
    const leftNum = s[l];
    const rightNum = s[r];
    s[l] = smallest;
    const diffIfLeft = Math.max(...s) - Math.min(...s);
    s[l] = leftNum;
    s[r] = largest;
    const diffIfRight = Math.max(...s) - Math.min(...s);
    s[r] = rightNum;

    if (diffIfLeft > diffIfRight) {
      s[r] = largest;
    } else {
      s[l] = smallest;
    }
    l++;
    r--;
  }

  return Math.max(...s) - Math.min(...s);
};

const nums = [5, 3, 2, 4];
// const nums = [6, 6, 0, 1, 1, 4, 6];
// 6, 6, 6, 4, 1, 1, 0
console.log(minDifference(nums));
