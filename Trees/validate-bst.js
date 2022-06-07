// const root = {
//   val: 5,
//   left: {
//     val: 1,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 4,
//     left: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 6,
//       left: null,
//       right: null,
//     },
//   },
// };

const root = {
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
};

const isValidBST = (root) => {
  const traverse = (node, low, high) => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;

    return (
      traverse(node.left, low, node.val) && traverse(node.right, node.val, high)
    );
  };

  return traverse(root, -Infinity, Infinity);
};

console.log(isValidBST(root));
