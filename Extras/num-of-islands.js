// const numIslands = (grid) => {
//   // DFS Solution
//   // Time Complexity: O(numberOfRows * numberOfColumns)
//   // Space: O(numberOfRows * numberOfColumns)
//   const height = grid.length;
//   const width = grid[0].length;
//   let count = 0;

//   const traverse = (r, c) => {
//     if (r < 0 || r >= height || c < 0 || c >= width) return;
//     if (grid[r][c] !== "1") return;

//     grid[r][c] = "2";
//     traverse(r - 1, c);
//     traverse(r, c + 1);
//     traverse(r + 1, c);
//     traverse(r, c - 1);
//     return;
//   };

//   let i = 0;
//   while (i < height) {
//     let j = 0;
//     while (j < width) {
//       if (grid[i][j] === "1") {
//         traverse(i, j);
//         count++;
//       }
//       j++;
//     }
//     i++;
//   }

//   return count;
// };

const numIslands = (grid) => {
  // BFS Solution
  // Time complexity: O(numRows * numColumns)
  // Space complexity: O(min(numRows, numColumns))
  let count = 0;
  const height = grid.length;
  const width = grid[0].length;

  const bfs = (r, c) => {
    const queue = [[r, c]];
    const neighbors = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      neighbors.forEach(([m, n]) => {
        const newX = x + m;
        const newY = y + n;
        if (newX >= 0 && newX < height && newY >= 0 && newY < width) {
          if (grid[newX][newY] === "1") {
            grid[newX][newY] = "0";
            queue.push([newX, newY]);
          }
        }
      });
    }
  };

  let i = 0;
  while (i < grid.length) {
    let j = 0;
    while (j < grid[i].length) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        count++;
      }
      j++;
    }
    i++;
  }

  return count;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "1", "0", "1"],
];

console.log(numIslands(grid));
