import { ListNode } from "./ListNode";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return addTwoNumbersHelper(l1, l2, 0);
}

function addTwoNumbersHelper(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number
): ListNode | null {
  if (l1 === null && l2 === null) {
    return carry === 0 ? null : new ListNode(carry);
  }

  if (l1 === null) {
    l1 = new ListNode(0);
  }

  if (l2 === null) {
    l2 = new ListNode(0);
  }

  const sum = l1.val + l2.val + carry;
  const node = new ListNode(sum % 10);

  node.next = addTwoNumbersHelper(l1.next, l2.next, Math.floor(sum / 10));

  return node;
}
