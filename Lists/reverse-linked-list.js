function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

// prev: n
// prev: 1 -> n
// prev: 2 -> 1 -> n

const reverseList = (head) => {
  let prev = null;
  while (head) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }

  // const reverse = (head, prev) => {
  //   if (!head) return prev;
  //   let temp = head.next;
  //   head.next = prev;
  //   prev = head;
  //   head = temp;
  //   return reverse(head, prev);
  // };

  return prev;
};

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

console.log(reverseList(head));
