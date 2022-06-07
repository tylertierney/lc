const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: null,
// };

const invertTree = (root) => {
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) continue;
    if (node.left || node.right) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  return root;
};

console.log(invertTree(root));
