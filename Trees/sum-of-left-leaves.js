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

const sumOfLeftLeaves = (root) => {
  let sum = 0;

  const traverse = (node, isLeft) => {
    if (!node) return;
    if (!node.left && !node.right) {
      if (isLeft) sum += node.val;
    }

    traverse(node.left, true);
    traverse(node.right, false);
  };

  traverse(root, false);
  return sum;
};

console.log(sumOfLeftLeaves(root));
