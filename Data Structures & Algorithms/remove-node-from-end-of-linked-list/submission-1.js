/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);

        let first = dummy;
        let second = dummy;

        while(n && second){
            second=second.next;
            n--;
        }
        let last=first;
        while(second){
            last=first;
            first=first.next;
            second=second.next;
        }
        last.next=first.next;
        return dummy.next;
    }
}
