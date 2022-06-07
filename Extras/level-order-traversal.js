const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

// This version uses recursion.
// Note how we assign an inner array within res.
// const levelOrder = (root) => {
//   const res = [];

//   const traverse = (node, level) => {
//     if (!node) return;

//     if (res[level]) {
//       res[level].push(node.val);
//     } else {
//       res[level] = [node.val];
//     }
//     level++;
//     traverse(node.left, level);
//     traverse(node.right, level);
//   };

//   traverse(root, 0);
//   return res;
// };

// Iterative
const levelOrder = (root) => {
  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    const current = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      current.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(current);
  }
  return res;
};

console.log(levelOrder(root));
