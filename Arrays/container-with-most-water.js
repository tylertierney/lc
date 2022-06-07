const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let max = -Infinity;

  while (l < r) {
    const a = (r - l) * Math.min(height[l], height[r]);

    max = Math.max(a, max);
    if (height[r] > height[l]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

// |
// |
// |
// |       |
// |___|___|___|_____
//     0   1   2

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];
const height = [1, 2, 1];

console.log(maxArea(height));
