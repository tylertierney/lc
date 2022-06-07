function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  },
};

//   3 4 2
// 3 4 6 5
// ------
// 3 8 0 7

const addTwoNumbers = (l1, l2) => {
  const res = new ListNode();
  const traverse = (node1, node2, carryOne, res) => {
    if (!node1 && !node2) {
      if (carryOne) res.next = new ListNode(1);
      return;
    }

    let p, q;
    node1 ? (p = node1) : (p = new ListNode());
    node2 ? (q = node2) : (q = new ListNode());

    let digit = p.val + q.val + carryOne;

    if (digit > 9) {
      digit -= 10;
      carryOne = 1;
    } else {
      carryOne = 0;
    }

    res.next = new ListNode(digit);
    res = res.next;

    traverse(p.next, q.next, carryOne, res);
  };
  traverse(l1, l2, 0, res);
  return res.next;
};

console.log(addTwoNumbers(l1, l2));
