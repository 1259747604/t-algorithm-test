// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
let l1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
};

const deleteDuplicates = head => {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
console.log(JSON.stringify(deleteDuplicates(l1)));
