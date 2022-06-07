// const isSameTree = (p, q) => {
//   const original = [];
//   const clone = [];

//   const traverse = (node, arr) => {
//     if (!node) return;

//     traverse(node.left, arr);
//     arr.push(node.val);
//     traverse(node.right, arr);
//   };

//   traverse(p, original);
//   traverse(q, clone);

//   for (let i = 0; i < original.length; i++) {
//     if (original[i] !== clone[i]) {
//       return false;
//     }
//   }

//   return true;
// };

const p = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
const q = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

console.log(isSameTree(p, q));
