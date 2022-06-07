const findCenter = (edges) => {
  // There's actually no need for any for loops here.
  // Solution is a lot easier than anticipated.
  // Real answer below.
  //   const frequencies = {};
  //   for (let i = 0; i < edges.length; i++) {
  //     for (let j = 0; j < edges[i].length; j++) {
  //       const currentVal = edges[i][j];
  //       if (currentVal in frequencies) {
  //         frequencies[currentVal]++;
  //       } else {
  //         frequencies[currentVal] = 1;
  //       }
  //     }
  //   }

  //   let center = 0;
  //   for (const val in frequencies) {
  //     if (frequencies[val] > center) {
  //       center = val;
  //     }
  //   }
  //   return center;

  const x = edges[0][0];
  const y = edges[0][1];

  if (edges[1][0] === x || edges[1][0] === x) {
    return x;
  } else {
    return y;
  }
};

const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
console.log(findCenter(edges));
