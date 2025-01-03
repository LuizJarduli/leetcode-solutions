import { ListNode } from "../ListNode";

const l1: ListNode = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2: ListNode = new ListNode(5, new ListNode(6, new ListNode(4)));

export default [l1, l2] as [ListNode | null, ListNode | null];
