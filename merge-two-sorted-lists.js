function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

// 4 => 6 => 8 => null
// 2 => 3 => 9 => null

const mergeTwoLists = (list1, list2) => {
  let newList = new ListNode(0);
  let prev = newList;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      prev = list2;
      list2 = list2.next;
    } else {
      prev = list1;
      list1 = list1.next;
    }
  }

  return newList;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

console.log(mergeTwoLists(list1, list2));
