// null
// 1 -> null
// 2 -> 1 -> null

const reverseList = (head) => {
  // Recursive
  // Time: O(n)
  // Space: O(n)
  const reverse = (head, prev) => {
    if (!head) return prev;
    // let temp = prev;
    // prev = head;
    // head = head.next;
    // prev.next = temp;
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;

    return reverse(head, prev);
  };

  return reverse(head, null);

  // Iterative
  // Time: O(n)
  // Space: O(1)

  // let prev = null;

  // while (head) {
  //   let temp = prev;
  //   prev = head;
  //   head = head.next;
  //   prev.next = temp;
  // }

  // return prev;
};

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
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(head));
