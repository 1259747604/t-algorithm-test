// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
let l1 = {
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
            next: {
              val: 7,
              next: {
                val: 8,
                next: null
              }
            }
          }
        }
      }
    }
  }
};

const removeNthFromEnd = (head, n) => {
  let dummy = {
    next: {}
  };
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  while (n) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

console.log(JSON.stringify(removeNthFromEnd(l1, 2)));
