const allPathsSourceTarget = (graph) => {
  const res = [];

  const dfs = (node, path) => {
    if (node === graph.length - 1) {
      res.push(path);
      return;
    }
    const connections = graph[node];

    connections.forEach((connection) => {
      path.push(connection);
      dfs(connection, [...path]);
      path.pop();
    });
    return;
  };

  dfs(0, [0]);
  return res;
};

const graph = [[1, 2], [3], [3], []];

console.log(allPathsSourceTarget(graph));
