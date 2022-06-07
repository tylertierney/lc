const maxDepth = (root) => {
  let res = 0;
  let count = 0;

  const traverse = (node, count) => {
    if (!node) return;
    count++;
    traverse(node.left, count);
    res = Math.max(count, res);
    traverse(node.right, count);
  };

  traverse(root, 0);
  return res;
};

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

console.log(maxDepth(root));
