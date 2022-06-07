const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

const reverseList = (head) => {
  // Time: O(n)
  // Space: O(1)
  let prev = null;

  while (head) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }

  return prev;
};

console.log(reverseList(head));
