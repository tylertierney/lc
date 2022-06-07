// const grid = [["1"], ["1"], ["1"]];
// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
const grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "0", "1"],
];

const numIslands = (grid) => {
  let res = 0;
  const height = grid.length - 1;
  const width = grid[0].length - 1;

  const dfs = (r, c) => {
    if (r < 0 || r > height || c < 0 || c > width) return;
    if (grid[r][c] !== "1") return;
    grid[r][c] = "2";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  let i = 0;
  while (i < grid.length) {
    let j = 0;
    while (j < grid[i].length) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        res++;
      }
      j++;
    }
    i++;
  }
  return res;
};

console.log(numIslands(grid));
