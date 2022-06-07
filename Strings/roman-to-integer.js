const romanToInt = (s) => {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const currentDigit = s[i];
    if (i !== s.length - 1) {
      if (dictionary[s[i + 1]] > dictionary[currentDigit]) {
        res -= dictionary[currentDigit];
      } else {
        res += dictionary[currentDigit];
      }
    } else {
      res += dictionary[currentDigit];
    }
  }

  return res;
};

const s = "CMII";

console.log(romanToInt(s));
