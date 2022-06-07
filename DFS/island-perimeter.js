// This is the dfs recursion version - it doesn't pass all test cases.
// Check for better ones on LC

const islandPerimeter = (grid) => {
  const height = grid.length - 1;
  const width = grid[0].length - 1;
  const visited = new Set();
  let res = 0;

  const dfs = (r, c) => {
    if (r < 0 || r > height || c < 0 || c > width) return 1;
    if (grid[r][c] !== 1) return 1;
    visited.add(String(r) + String(c));
    let sum = 0;

    const top = String(r - 1) + String(c);
    const right = String(r) + String(c + 1);
    const bottom = String(r + 1) + String(c);
    const left = String(r) + String(c - 1);

    if (!visited.has(top)) sum += dfs(r - 1, c);
    if (!visited.has(right)) sum += dfs(r, c + 1);
    if (!visited.has(bottom)) sum += dfs(r + 1, c);
    if (!visited.has(left)) sum += dfs(r, c - 1);

    return sum;
  };

  let i = 0;
  while (i < grid.length) {
    let j = 0;
    while (j < grid[i].length) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
      j++;
    }
    i++;
  }
  return res;
};

// const grid = [[1], [1]];
// const grid = [
//   [1, 1],
//   [0, 0],
// ];
// const grid = [
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 1, 0],
// ];
const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));

// This is the iterative approach. It works, but will only work for a grid
// with a single island.

// const islandPerimeter = (grid) => {
//   let res = 0;
//   const height = grid.length - 1;
//   const width = grid[0].length - 1;

//   const countPerimeter = (r, c) => {
//     const directions = [
//       [-1, 0],
//       [0, 1],
//       [1, 0],
//       [0, -1],
//     ];
//     let sum = 0;

//     directions.forEach((dir) => {
//       [x, y] = dir;
//       if (r + x < 0 || r + x > height || c + y < 0 || c + y > width) {
//         sum++;
//       } else {
//         if (grid[r + x][c + y] === 0) {
//           sum++;
//         }
//       }
//     });
//     return sum;
//   };

//   let i = 0;
//   while (i < grid.length) {
//     let j = 0;
//     while (j < grid[i].length) {
//       if (grid[i][j] === 1) res += countPerimeter(i, j);
//       j++;
//     }
//     i++;
//   }
//   return res;
// };
