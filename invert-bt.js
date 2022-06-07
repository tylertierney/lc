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
//    A
//  B   C
//        D

const invertTree = (root) => {
  const dfs = (node) => {
    if (!node) return;

    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return root;
};

console.log(invertTree(root));
