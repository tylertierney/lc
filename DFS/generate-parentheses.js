const generateParenthesis = (n) => {
  const res = [];

  const backtrack = (numOpen, numClosed, stack) => {
    if (numOpen === numClosed && numOpen === n) {
      res.push(stack);
      return;
    }

    if (numOpen < n) {
      stack += "(";
      backtrack(numOpen + 1, numClosed, stack);
      stack = stack.slice(0, stack.length - 1);
    }

    if (numClosed < numOpen) {
      stack += ")";
      backtrack(numOpen, numClosed + 1, stack);
      stack = stack.slice(0, stack.length - 1);
    }
  };

  backtrack(0, 0, "");
  return res;
};

const s = "()";

console.log(generateParenthesis(3));
