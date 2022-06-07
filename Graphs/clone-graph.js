function Node(val, neighbors) {
  this.val = val ? val : 0;
  this.neighbors = neighbors ? neighbors : [];
}

const cloneGraph = (node) => {
  const adjList = new Map();

  node.forEach(([u, v]) => {
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
  });

  return adjList;
};

const node = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];
console.log(cloneGraph(node));
