const kWeakestRows = (mat, k) => {
  // Initial brute force, slow solution.
  // Time complexity O(n^2).

  // 1. Reduce the matrix into an arr of ints (num of civilians)
  //      while storing each int's index
  //  e.g. [{i: 0, civilians: 3}, {i: 1, civilians: 1}...]

  // 2. Sort the array based on max num of civilians

  // 3. Return the indices of the first k elements

  const rows = mat.reduce((acc, curr, idx) => {
    const reduced = curr.reduce((soldiers, person) => {
      return person + soldiers;
    }, 0);
    acc.push({
      i: idx,
      soldiers: reduced,
    });
    return acc;
  }, []);

  const res = rows
    .sort((a, b) => a.soldiers - b.soldiers)
    .slice(0, k)
    .map((row) => row.i);

  return res;

  // Since the soldiers are always positioned to the left
  // of their row, we can make this faster by using binary
  // search on the row.

  // We can also make it faster by using a map to store our
  // indexes as we evaluate each row.
};

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

console.log(kWeakestRows(mat, k));
