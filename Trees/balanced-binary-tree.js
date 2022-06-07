const height = (node) => {
  // Time: O(n log n)
  // Space: O(n)
  if (!node) return 0;

  const heightOfLeft = 1 + height(node.left);
  const heightOfRight = 1 + height(node.right);

  return Math.max(heightOfLeft, heightOfRight);
};

const isBalanced = (root) => {
  if (!root) return true;

  if (Math.abs(height(root.left) - height(root.right)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};

// const root = {
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
// };

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: null,
};

console.log(isBalanced(root));
