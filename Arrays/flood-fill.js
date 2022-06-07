const floodFill = (image, sr, sc, newColor) => {
  const originalColor = image[sr][sc];
  if (newColor === originalColor) return image;
  const width = image[0].length - 1;
  const height = image.length - 1;

  const dfs = (r, c) => {
    if (r > height || r < 0 || c > width || c < 0) return;
    if (image[r][c] !== originalColor) return;
    image[r][c] = newColor;

    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r + 1, c);
    dfs(r, c - 1);
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
