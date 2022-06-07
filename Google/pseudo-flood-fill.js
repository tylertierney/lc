// const grid = [
//   ["G", "G", "B", "R"],
//   ["G", "B", "R", "B"],
//   ["R", "B", "B", "B"],
// ];

const grid = [
  ["G", "G"],
  ["B", "R"],
];

// Given this grid, find the maximum number of
// connected colors. Connected meaning 4 directions,
// up, right, down, left.

const findMaxConnected = (grid) => {
  const width = grid[0].length - 1;
  const height = grid.length - 1;

  let i = 0;
  while (i < grid.length) {
    let j = 0;
    while (j < grid[i].length) {
      const temp = grid[i][j];
      grid[i][j] = [temp, false];
      j++;
    }
    i++;
  }

  let max = 0;

  const dfs = (grid, color, r, c) => {
    let sum = 0;
    console.log(color);

    const currentColor = grid[r][c][0];

    if (r - 1 >= 0 && !grid[r - 1][c][1]) {
      sum += dfs(grid, currentColor, r - 1, c);
    }

    if (c + 1 <= width && !grid[r][c + 1][1]) {
      sum += dfs(grid, currentColor, r, c + 1);
    }

    if (r + 1 <= height && !grid[r + 1][c][1]) {
      sum += dfs(grid, currentColor, r + 1, c);
    }

    if (c - 1 >= 0 && !grid[r][c - 1][1]) {
      sum += dfs(grid, currentColor, r, c - 1);
    }

    grid[r][c][1] = true;
    if (currentColor === color) {
      return sum + 1;
    }

    return 0;
  };

  max = Math.max(max, dfs(grid, grid[0][0][0], 0, 0));
  return grid;
};

console.log(findMaxConnected(grid));
