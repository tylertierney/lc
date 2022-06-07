const findJudge = (n, trust) => {
  const outgoing = new Array(n).fill(0);
  const incoming = new Array(n).fill(0);

  for ([u, v] of trust) {
    outgoing[u - 1]++;
    incoming[v - 1]++;
  }

  let i = 0;
  while (i < outgoing.length) {
    if (outgoing[i] === 0 && incoming[i] === n - 1) {
      return i + 1;
    }
    i++;
  }
  return -1;
};

// const n = 5;
// const trust = [
//   [1, 3],
//   [2, 3],
//   [4, 3],
//   [4, 1],
//   [5, 3],
//   [5, 1],
//   [5, 4],
// ];
// const n = 4;
// const trust = [
//   [1, 3],
//   [2, 3],
//   [4, 3],
//   [4, 2],
// ];

const n = 2;
const trust = [[1, 2]];

// const n = 1;
// const trust = [];

console.log(findJudge(n, trust));
