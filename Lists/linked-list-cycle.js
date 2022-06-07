const hasCycle = (head) => {
  // Using a set
  // Time: O(n)
  // Space: O(n)
  //   const visited = new Set();
  //   let node = head;

  //   while (node) {
  //     if (visited.has(node)) return true;
  //     visited.add(node);
  //     node = node.next;
  //   }

  //   return false;

  // Both of these ones are valid.
  // 2-pointer solution, one fast, one slow.
  // If they ever meet up, there's a cycle.
  // Time: O(n)
  // Space: O(1)
  //   let slow = head;
  //   let fast = head.next;

  //   while (slow !== fast) {
  //     if (!slow || !fast.next) return false;

  //     slow = slow.next;
  //     fast = fast.next.next;
  //   }

  //   return true;

  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (slow && fast) {
    if (slow === fast) return true;

    if (!slow.next || !fast.next || !fast.next.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

// 3 2 0 4

const head = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null,
      },
    },
  },
};

head.next.next.next.next = head.next;

console.log(hasCycle(head));
