// This one I misunderstood, the key is in using a union find.
// Regions aren't dictated only by squares with a space,
// but by the inner triangles representing connected regions.

const regionsBySlashes = (grid) => {
  // Transform grid into a 2d array

  // const grid1 = [
  //     [" ", " ", "/"],
  //     ["/", "/", " "]
  // ]

  // Loop through the 2d array until we find a square
  // (a character) that is a space.

  // Then, perform DFS on all neighboring spaces, marking each
  // character as visited. Mark them using a new character.

  // When DFS ends, increase count of regions by one

  const gridArray = grid.map((row) => row.split(""));
  console.log(gridArray);
  const height = gridArray.length;
  const width = gridArray.length;

  const dfs = (r, c) => {
    if (r < 0 || r > height - 1 || c < 0 || c > width - 1) return;
    if (gridArray[r][c] !== " ") return;
    gridArray[r][c] = "x";

    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r + 1, c);
    dfs(r, c - 1);
    return;
  };

  let count = 0;

  let i = 0;
  while (i < gridArray.length) {
    let j = 0;
    while (j < gridArray[i].length) {
      if (gridArray[i][j] === " ") {
        dfs(i, j);
        count++;
      }
      j++;
    }
    i++;
  }

  return count;
};

const grid = [" /", "/ "];
// const grid = ["/\\", "\\/"];

console.log(regionsBySlashes(grid));
