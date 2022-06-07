const n = 10;
const edges = [
  [4, 3],
  [1, 4],
  [4, 8],
  [1, 7],
  [6, 4],
  [4, 2],
  [7, 4],
  [4, 0],
  [0, 9],
  [5, 4],
];
const source = 5;
const destination = 9;

// const n = 6;
// const edges = [
//   [0, 1],
//   [0, 2],
//   [3, 5],
//   [5, 4],
//   [4, 3],
// ];
// const source = 0;
// const destination = 5;

// const n = 3;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [2, 0],
// ];
// const source = 0;
// const destination = 2;

const validPath = (n, edges, source, destination) => {
  const adj = new Map();
  const visited = new Set();

  for (const [u, v] of edges) {
    if (adj.has(u)) {
      adj.get(u).push(v);
    } else {
      adj.set(u, [v]);
    }

    if (adj.has(v)) {
      adj.get(v).push(u);
    } else {
      adj.set(v, [u]);
    }
  }

  const dfs = (node) => {
    visited.add(node);

    const edges = adj.get(node);

    if (edges && edges.length > 0) {
      for (const e of edges) {
        if (!visited.has(e)) dfs(e);
      }
    }
  };

  dfs(source);
  return visited.has(destination);
};

console.log(validPath(n, edges, source, destination));
