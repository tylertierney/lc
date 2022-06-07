const lowestCommonAncestor = (root, p, q) => {
  // Recursive
  // Time: O(n)
  // Space: O(n)
  //   p = p.val;
  //   q = q.val;

  //   const traverse = (node) => {
  //     if (!node) return null;

  //     if (p < node.val && q < node.val) {
  //       return traverse(node.left);
  //     }

  //     if (p > node.val && q > node.val) {
  //       return traverse(node.right);
  //     }

  //     return node;
  //   };

  //   return traverse(root);

  // Iterative
  // Time: O(n)
  // Space: O(1)
  p = p.val;
  q = q.val;
  let node = root;

  while (node) {
    if (p < node.val && q < node.val) {
      if (node.left) node = node.left;
    } else if (p > node.val && q > node.val) {
      if (node.right) node = node.right;
    } else {
      return node;
    }
  }

  return root;
};

const root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
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
const p = root.left;
const q = root.right;

console.log(lowestCommonAncestor(root, p, q));
