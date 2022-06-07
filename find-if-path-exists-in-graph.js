// Best JS answer: https://leetcode.com/problems/find-if-path-exists-in-graph/discuss/1416463/Javascript-DFS-(Thought-Process)

const validPath = (n, edges, source, destination) => {
  if (source === destination) return true;
  let res = false;
  const adjList = new Map();
  const visited = new Set();

  edges.forEach(([node, child]) => {
    if (adjList.has(node)) {
      adjList.get(node).push(child);
    } else {
      adjList.set(node, [child]);
    }

    if (adjList.has(child)) {
      adjList.get(child).push(node);
    } else {
      adjList.set(child, [node]);
    }
  });

  const traverse = (node) => {
    if (visited.has(node)) return;
    visited.add(node);

    console.log("node: " + node);
    console.log("destination: " + destination);
    if (node === destination) res = true;

    const children = adjList.get(node);
    if (children) {
      for (const child of children) {
        traverse(child, visited);
      }
    }
  };

  for (const parent of adjList.keys()) {
    if (parent === source) {
      traverse(parent);
    }
  }
  return res;
};

// const n = 3;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [2, 0],
// ];
// const source = 0;
// const destination = 2;

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

// const n = 5;
// const edges = [[0, 4]];
// const source = 0;
// const destination = 4;

const n = 1;
const edges = [];
const source = 0;
const destination = 0;

// const n = 10;
// const edges = [
//   [0, 7],
//   [0, 8],
//   [6, 1],
//   [2, 0],
//   [0, 4],
//   [5, 8],
//   [4, 7],
//   [1, 3],
//   [3, 5],
//   [6, 5],
// ];
// const source = 7;
// const destination = 5;

console.log(validPath(n, edges, source, destination));
