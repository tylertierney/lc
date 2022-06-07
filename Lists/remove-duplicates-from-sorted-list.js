const head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

const deleteDuplicates = (head) => {
  let curr = head;

  while (curr) {
    while (curr.next && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return head;
};

console.log(deleteDuplicates(head));
