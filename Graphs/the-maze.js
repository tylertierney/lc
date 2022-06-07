const shortestDistance = (maze, start, destination) => {
  // DFS needs to maintain knowledge of which direction
  // we're currently traveling in. We can only execute
  // recursive DFS functions when we have a wall in the
  // current direction.

  const height = maze.length;
  const width = maze.length;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let res = false;

  const dfs = (r, c) => {
    // if (r < 0 || r > height - 1 || c < 0 || c > width - 1) {
    //   return;
    // }
    if (maze[r][c] !== 0) return;
    maze[r][c] = 2;

    for (const [x, y] of directions) {
      let newX = r + x;
      let newY = c + y;
      let nextSquare = maze[newX][newY];
      while (nextSquare === 0) {
        newX = newX + x;
        newY = newY + y;
        nextSquare = maze[newX][newY];
      }
      if (newX === destination[0] && newY === destination[1]) res = true;
      dfs(newX, newY);
    }

    return;
  };

  dfs(start[0], start[1]);
  console.log(maze);
  return res;
};

const maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];
const start = [0, 4];
const destination = [4, 4];

// const maze = [
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
// ];
// const start = [0, 4];
// const destination = [3, 2];

console.log(shortestDistance(maze, start, destination));
