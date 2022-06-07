const isValid = (s) => {
  const dictionary = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  let i = 0;
  while (i < s.length) {
    if (s[i] in dictionary) {
      if (stack[stack.length - 1] === dictionary[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }

    i++;
  }

  return stack.length > 0 ? false : true;
};

// const s = "()";
// const s = "()[]{}";
// const s = "(]";
const s = "]";

console.log(isValid(s));
