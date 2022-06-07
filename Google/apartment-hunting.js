// https://www.youtube.com/watch?v=rw4s4M3hFfs&ab_channel=Cl%C3%A9mentMihailescu
const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const reqs = ["gym", "school", "store"];

const distanceToBuilding = (blocks, start, building) => {
  let l = 0;
  let r = blocks.length - 1;
  let min = Infinity;

  while (l <= r) {
    if (blocks[l][building]) {
      min = Math.min(min, Math.abs(l - start));
    }

    if (blocks[r][building]) {
      min = Math.min(min, Math.abs(r - start));
    }

    if (min === 0) return 0;
    l++;
    r--;
  }

  return min;
};

const minFurthestDistance = (blocks, reqs) => {
  const allDistances = [];

  let i = 0;
  while (i < blocks.length) {
    const distances = {};
    for (const req of reqs) {
      distances[req] = distanceToBuilding(blocks, i, req);
    }
    allDistances.push(distances);
    i++;
  }

  let res = 0;
  let furthestDistance = Infinity;
  let j = 0;
  while (j < allDistances.length) {
    const thisFurthestDistance = Math.max(...Object.values(allDistances[j]));

    if (thisFurthestDistance < furthestDistance) {
      furthestDistance = thisFurthestDistance;
      res = j;
    }
    j++;
  }

  return res;
};

console.log(minFurthestDistance(blocks, reqs));
