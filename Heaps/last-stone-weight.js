const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    if (stones.length < 2) return stones[0];
    stones.sort((a, b) => b - a);
    const y = stones[0];
    const x = stones[1];

    if (y === x) {
      stones.splice(0, 2);
    } else {
      stones.splice(1, 1);
      stones[0] = y - x;
    }
  }

  if (stones.length >= 1) {
    return stones[0];
  }

  return 0;
};

const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));
