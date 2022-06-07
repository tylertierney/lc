const invertTree = (root) => {
  const traverse = (node) => {
    if (!node) return null;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    node.left = traverse(node.left);
    node.right = traverse(node.right);
    return node;
  };

  return traverse(root);
};

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

console.log(invertTree(root));
