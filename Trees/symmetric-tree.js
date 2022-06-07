const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

const isSymmetric = (root) => {
  if (!root) return true;

  const traverse = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return (
      node1.val === node2.val &&
      traverse(node1.left, node2.right) &&
      traverse(node1.right, node2.left)
    );
  };
  return traverse(root.left, root.right);
};

console.log(isSymmetric(root));
