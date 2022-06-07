function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

const deleteNodes = (head, m, n) => {
  return "hi";
};

console.log(deleteNodes(head, 2, 3));
