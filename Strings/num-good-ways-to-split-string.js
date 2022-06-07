// const numSplits = (s) => {
//   let res = 0;

//   let i = 1;
//   while (i < s.length) {
//     const left = s.substring(0, i);
//     const right = s.substring(i, s.length);

//     const setLeft = new Set(left);
//     const setRight = new Set(right);

//     if (setLeft.size === setRight.size) {
//       res++;
//     }

//     i++;
//   }

//   return res;
// };
const numSplits = (s) => {
  let res = 0;
  let uniques = {};
  const prefixes = [];

  let uniqueCount = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] in uniques) {
      prefixes.push(uniqueCount);
    } else {
      uniques[s[i]] = "something";
      uniqueCount++;
      prefixes.push(uniqueCount);
    }

    i++;
  }

  let postfixes = [];
  uniques = {};
  uniqueCount = 0;
  let j = s.length - 1;
  while (j >= 0) {
    if (s[j] in uniques) {
      postfixes.unshift(uniqueCount);
    } else {
      uniques[s[j]] = "something";
      postfixes.unshift(uniqueCount);
      uniqueCount++;
    }
    j--;
  }

  let k = 0;
  while (k < s.length) {
    console.log("prefix: " + prefixes[k]);
    console.log("postfix: " + postfixes[k] + "\n");
    if (prefixes[k] === postfixes[k]) {
      res++;
    }
    k++;
  }

  return res;
};

// aabcd;
const s = "aabcd";
console.log(numSplits(s));
