const node = {
  val: 5,
  next: {
    val: 1,
    next: {
      val: 9,
      next: null,
    },
  },
};

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
  return node;
};

console.log(deleteNode(node));
