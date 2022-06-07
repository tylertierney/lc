// const findSmallestSetOfVertices = (n, edges) => {
//   const res = [];
//   const outdegrees = new Map();
//   const indegrees = new Map();

//   edges.forEach(([u, v]) => {
//     if (outdegrees.has(u)) {
//       outdegrees.get(u).push(v);
//     } else {
//       outdegrees.set(u, [v]);
//     }

//     if (indegrees.has(v)) {
//       indegrees.get(v).push(u);
//     } else {
//       indegrees.set(v, [u]);
//     }
//   });

//   const outs = outdegrees.keys();
//   for (const out of outs) {
//     if (!indegrees.has(out)) {
//       res.push(out);
//     }
//   }
//   return res;
// };

const findSmallestSetOfVertices = (n, edges) => {
  const res = [];
  const indegrees = new Set();
  const outdegrees = new Set();
  edges.forEach(([u, v]) => {
    indegrees.add(v);
    outdegrees.add(u);
  });
  outdegrees.forEach((out) => {
    if (!indegrees.has(out)) res.push(out);
  });
  return res;
};

// const n = 6;
// const edges = [
//   [0, 1],
//   [0, 2],
//   [2, 5],
//   [3, 4],
//   [4, 2],
// ];

const n = 5;
const edges = [
  [0, 1],
  [2, 1],
  [3, 1],
  [1, 4],
  [2, 4],
];
console.log(findSmallestSetOfVertices(n, edges));
