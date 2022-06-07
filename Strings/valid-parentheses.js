const isValid = (s) => {
  const dictionary = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const stack = [];

  let i = 0;
  while (i < s.length) {
    if (s[i] in dictionary) {
      stack.push(s[i]);
    } else {
      const latest = stack[stack.length - 1];
      if (s[i] === dictionary[latest]) {
        stack.pop();
      } else {
        return false;
      }
    }
    i++;
  }

  return stack.length < 1 ? true : false;
};

const s = "(]";
console.log(isValid(s));
