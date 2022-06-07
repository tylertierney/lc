const floodFill = (image, sr, sc, newColor) => {
  // Time: O(n)
  // Space: O(n)
  if (newColor === image[sr][sc]) return image;
  const height = image.length;
  const width = image[0].length;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const originalColor = image[sr][sc];

  const dfs = (r, c) => {
    if (r < 0 || r >= height || c < 0 || c >= width) return;
    if (image[r][c] !== originalColor) return;
    image[r][c] = newColor;

    directions.forEach(([x, y]) => {
      dfs(x + r, c + y);
    });
  };

  dfs(sr, sc);
  return image;
};

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const newColor = 2;

// const image = [
//   [0, 0, 0],
//   [0, 1, 1],
// ];
// const sr = 1;
// const sc = 1;
// const newColor = 1;

console.log(floodFill(image, sr, sc, newColor));
