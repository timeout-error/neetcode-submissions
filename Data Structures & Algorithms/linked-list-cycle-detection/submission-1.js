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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;
        
        let first = head;
        let second = head.next;
        while (first && second) {
            if (first === second) return true;
            if (first && first.next) {
                first = first.next;
            }
            if (second && second.next && second.next.next) {
                second = second.next.next;
            } else {
                return false;
            }
        }
        return false;
    }
}
