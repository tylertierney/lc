const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (slow.next && fast.next) {
    if (!fast.next.next) return slow.next;
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// const head = {
//   val: 1,
//   next: null,
// };

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
};

console.log(middleNode(head));
