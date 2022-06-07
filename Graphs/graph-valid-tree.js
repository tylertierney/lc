const validTree = (n, edges) => {
  const visited = new Set();
  const adjList = new Map();
  const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    const children = adjList.get(node);
    if (!children) return;
    for (const child of children) {
      dfs(child);
    }
    return;
  };

  for (const [u, v] of edges) {
    if (adjList.has(u)) {
      adjList.get(u).push(v);
    } else {
      adjList.set(u, [v]);
    }

    if (adjList.has(v)) {
      adjList.get(v).push(u);
    } else {
      adjList.set(v, [u]);
    }
  }

  console.log(adjList);
  for (const parent of adjList.keys()) {
    dfs(parent);
  }

  return visited.size === n;
};

const n = 5;
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
// const edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [1, 3],
//   [1, 4],
// ];

console.log(validTree(n, edges));
