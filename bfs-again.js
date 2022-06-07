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

const bfs = (root) => {
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const len = queue.length;
    const curr = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      curr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(curr);
  }

  return res;
};

console.log(bfs(root));
