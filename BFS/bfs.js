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

const bfs2dArray = (root) => {
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const level = [];
    const len = queue.length;

    let i = 0;
    while (i < len) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      i++;
    }

    res.push(level);
  }
  return res;
};

const bfs1dArray = (root) => {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
};

const nAryRoot = {
  val: 3,
  children: [
    {
      val: 9,
      children: [
        { val: 28, children: [] },
        { val: 4, children: [] },
      ],
    },
    {
      val: 20,
      children: [],
    },
    {
      val: 15,
      children: [
        {
          val: 7,
          children: [],
        },
      ],
    },
  ],
};

const bfsNaryTree = (root) => {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    let i = 0;
    const node = queue.shift();
    res.push(node.val);
    node.children.forEach((child) => {
      queue.push(child);
    });
  }

  return res;
};

console.log(bfsNaryTree(nAryRoot));
