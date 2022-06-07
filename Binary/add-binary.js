// const addBinary = (a, b) => {
//   let res = "";
//   let carried = 0;

//   a = a.split("").reverse().join("");
//   b = b.split("").reverse().join("");

//   let i = 0;
//   while (i < Math.max(a.length, b.length)) {
//     const digitA = a[i] ? Number(a[i]) : 0;
//     const digitB = b[i] ? Number(b[i]) : 0;

//     const total = digitA + digitB + carried;

//     const char = String(total % 2);
//     res = char + res;
//     carried = ~~(total / 2);

//     i++;
//   }

//   if (carried > 0) {
//     res = String(carried) + res;
//   }

//   return res;
// };

const addBinary = (a, b) => {
  let carried = 0;
  let res = "";
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  let i = 0;
  while (i < Math.max(a.length, b.length)) {
    const digitA = a[i] ? Number(a[i]) : 0;
    const digitB = b[i] ? Number(b[i]) : 0;

    const total = digitA + digitB + carried;

    const char = String(total % 2);

    res = char + res;
    if (total >= 2) {
      carried = 1;
    } else {
      carried = 0;
    }

    i++;
  }

  if (carried) {
    res = String(carried) + res;
  }

  return res;
};

//carry 1 1 1

//      1 0 1 1
//        1 1 1
//      --------
//    1 0 0 1 0

const a = "1011";
const b = "111";
console.log(addBinary(a, b));
