// Maybe possible to solve with pre and post fix arrays?

const blocks = [
  {
    // pre: 1,
    // post: 1, 2, 0, 0, 1
    gym: false,
    school: true,
    store: false,
  },
  {
    // pre: 1, 0
    // post: 1, 2, 0, 0
    gym: true,
    school: false,
    store: false,
  },
  {
    // pre: 1, 0, 0
    // post: 1, 2, 0
    gym: true,
    school: true,
    store: false,
  },
  {
    // pre: 1, 0, 0, 1
    // post: 1, 2
    gym: false,
    school: true,
    store: false,
  },
  {
    // pre: 1, 0, 0, 1, 2
    // post: 1
    gym: false,
    school: true,
    store: true,
  },
];

const reqs = ["gym", "school", "store"];

const minFurthestDistance = (blocks, reqs) => {
  const furthestDistances = [];

  blocks.forEach((block, i) => {
    const minDistances = [];
    for (const req of reqs) {
      minDistances.push(distanceToBuilding(blocks, i, req));
    }
    furthestDistances.push(Math.max(...minDistances));
  });

  let min = Infinity;
  let j = 0;
  while (j < furthestDistances.length) {
    min = Math.min(min, furthestDistances[j]);
    j++;
  }

  return furthestDistances.indexOf(min);
};

const distanceToBuilding = (blocks, start, building) => {
  if (blocks[start][building]) return 0;

  let min = Infinity;
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i][building] && i !== start) {
      min = Math.min(min, Math.abs(start - i));
    }
    i++;
  }

  return min;
};

console.log(minFurthestDistance(blocks, reqs));
