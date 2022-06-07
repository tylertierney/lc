const romanToInt = (s) => {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;

  let i = 0;
  while (i < s.length) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      count -= legend[s[i]];
    } else {
      count += legend[s[i]];
    }
    i++;
  }

  return count;
};

// const s = "III";
// const s = "LVIII";
const s = "V";

console.log(romanToInt(s));
