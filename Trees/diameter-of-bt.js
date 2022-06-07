const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const getHeight = (node) => {
  if (!node) return 0;

  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
};

const diameterOfBinaryTree = (root) => {
  let max = 0;

  const traverse = (node) => {
    if (!node) return;
    let heightLeft = 0;
    let heightRight = 0;

    if (node.left) heightLeft = getHeight(node.left);
    if (node.right) heightRight = getHeight(node.right);
    // console.log(heightLeft);
    // console.log(heightRight);

    let diameter = heightLeft + heightRight;
    max = Math.max(diameter, max);

    traverse(node.left);
    traverse(node.right);
  };

  //   return getHeight(root.right);
  traverse(root);
  return max;
};

console.log(diameterOfBinaryTree(root));
