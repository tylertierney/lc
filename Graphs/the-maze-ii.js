const shortestDistance = (maze, start, destination) => {
  const height = maze.length;
  const width = maze.length;

  const counts = [];

  const dfs = (r, c, count) => {
    if (r < 0 || r > height - 1 || c < 0 || c > width - 1) {
      return;
    }
    if (maze[r][c] !== 0) return;
    maze[r][c] = 2;

    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r + 1, c);
    dfs(r, c - 1);
  };

  //asdfasdf
  return "hi";
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

console.log(shortestDistance(maze, start, destination));
