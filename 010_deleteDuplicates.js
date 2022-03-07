// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
let l1 = {
  val: 1,
  next: {
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
              val: 5,
              next: {
                val: 6,
                next: null
              }
            }
          }
        }
      }
    }
  }
};

const deleteDuplicates = head => {
  if (!head || !head.next) return;

  let dummy = {
    next: {}
  };

  dummy.next = head;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let v = cur.next.val;
      while (cur.next && cur.next.val === v) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
console.log(JSON.stringify(deleteDuplicates(l1)));
