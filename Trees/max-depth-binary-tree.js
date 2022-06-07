const root = {
  val: -8,
  left: {
    val: -6,
    left: {
      val: 6,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
};

// const findHeight = (root) => {
//   const traverse = (node, level) => {
//     if (!node) return level;

//     const left = traverse(node.left, level + 1);
//     const right = traverse(node.right, level + 1);
//     return Math.max(left, right);
//   };

//   return traverse(root, 0);
// };

console.log(findHeight(root));
