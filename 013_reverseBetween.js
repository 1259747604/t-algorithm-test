// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
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

const reverseBetween = (head, m, n) => {
  let pre, cur, leftnode;
  let dummy = { next: null };
  dummy.next = head;
  let p = dummy;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  leftnode = p;

  start = p.next;
  pre = start;
  cur = pre.next;
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  leftnode.next = pre;
  start.next = cur;
  return dummy.next;
};

console.log(JSON.stringify(reverseBetween(l1, 3, 6)));
