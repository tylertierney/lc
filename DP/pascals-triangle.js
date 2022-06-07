// Brute Force
// const generate = (numRows) => {
//   const res = [[1]];

//   let i = 1;
//   while (i < numRows) {
//     const prev = res[i - 1];
//     const row = [];
//     let j = 0;
//     while (j < prev.length + 1) {
//       if (j === 0 || j === prev.length) {
//         row.push(1);
//       } else {
//         const newVal = prev[j - 1] + prev[j];
//         row.push(newVal);
//       }
//       j++;
//     }
//     res.push(row);
//     i++;
//   }

//   return res;
// };

// const generate = (numRows) => {
//   if (numRows === 0) return [];
//   if (numRows === 1) return [[1]];

//   const row = [];
//   const prev = generate(numRows - 1);

//   let i = 0;
//   while (i < numRows) {
//     if (i === 0 || i === numRows - 1) {
//       row.push(1);
//     } else {
//       row.push(prev[prev.length - 1][i - 1] + prev[prev.length - 1][i]);
//     }
//     i++;
//   }

//   prev.push(row);
//   return prev;
// };

const generate = (numRows) => {
  const res = [];

  const create = (numRows) => {
    if (numRows <= 0) return;
    if (numRows === 1) {
      res.push([1]);
      return [1];
    }

    const prev = create(numRows - 1);
    const row = [];

    let i = 0;
    while (i < numRows) {
      if (i === 0 || i === numRows - 1) {
        row.push(1);
      } else {
        row.push(prev[i - 1] + prev[i]);
      }
      i++;
    }

    res.push(row);
    return row;
  };

  create(numRows);
  return res;
};

console.log(generate(5));
