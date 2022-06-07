const canFinish = (numCourses, prerequisites) => {
  if (prerequisites.length < 1) return true;

  const adjList = new Map();

  for (const [u, v] of prerequisites) {
    if (adjList.get(u)) {
      adjList.get(u).push(v);
    } else {
      adjList.set(u, [v]);
    }
  }

  // 0 => [1]
  // 1 => [0]
  // 2 => [0]

  //     const nodes = new Set();
  //     const connections = new Set();

  //   for(const course of adjList.keys()){
  //     const prereqs = adjList.get(course);

  //   }

  return adjList;
};

const numCourses = 2;
// const prerequisites = [[1, 0]];
const prerequisites = [
  [0, 2],
  [0, 1],
  [1, 3],
  [1, 4],
  [3, 4],
];

console.log(canFinish(numCourses, prerequisites));
