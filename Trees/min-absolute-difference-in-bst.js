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
    val: 6,
    left: null,
    right: null,
  },
};

const getMinimumDifference = (root) => {
  let prev = null;
  let min = Infinity;

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    if (prev !== null && min > node.val - prev) {
      min = node.val - prev;
    }
    prev = node.val;
    traverse(node.right);
  };

  traverse(root);
  return min;
};

console.log(getMinimumDifference(root));
