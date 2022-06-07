// const getRow = (rowIndex) => {
//     // Brute force
//   if (rowIndex === 0) return [1];

//   const buildRow = (prev) => {
//     const row = [];
//     let j = 0;
//     while (j < prev.length + 1) {
//       if (j === 0 || j === prev.length) {
//         row.push(1);
//       } else {
//         row.push(prev[j - 1] + prev[j]);
//       }
//       j++;
//     }
//     return row;
//   };

//   let prev = [1];
//   let i = 1;
//   while (i < rowIndex + 1) {
//     prev = buildRow(prev);
//     if (i === rowIndex) return prev;
//     i++;
//   }
// };

const getRow = (rowIndex) => {
  // Recursion, good time complexity but poor space
  if (rowIndex <= 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let prev = getRow(rowIndex - 1);

  const row = [];
  let i = 0;
  while (i < prev.length + 1) {
    if (i === 0 || i === prev.length) {
      row.push(1);
    } else {
      row.push(prev[i - 1] + prev[i]);
    }
    i++;
  }

  return row;
};

console.log(getRow(3));
