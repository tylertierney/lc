const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    const lowestHeight = Math.min(height[l], height[r]);
    const width = r - l;
    max = Math.max(max, lowestHeight * width);

    if (height[r] > height[l]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];
console.log(maxArea(height));
