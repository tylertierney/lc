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

// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
//   right: null,
// };

const isBalanced = (root) => {
  if (!root) return true;

  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};

const getHeight = (node) => {
  if (!node) return -1;

  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
};

console.log(isBalanced(root));
// console.log(getHeight(root, 0));
