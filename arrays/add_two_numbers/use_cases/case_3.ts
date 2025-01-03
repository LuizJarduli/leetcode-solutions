import { ListNode } from "../ListNode";

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

export default [l1, l2] as [ListNode | null, ListNode | null];
