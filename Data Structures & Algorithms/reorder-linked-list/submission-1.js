/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

var reverse = function (head) {
    let pre = null;
    let curr = head;
    while (curr) {
        let nextCurr = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nextCurr;
    }
    return pre;
};

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let slowNext = slow.next;
        slow.next = null;
        let secondHead = reverse(slowNext);
        let firstHead = head;

        while (secondHead) {
            let firstnext = firstHead.next;
            let secondnext = secondHead.next;

            firstHead.next = secondHead;
            secondHead.next = firstnext;

            firstHead = firstnext;
            secondHead = secondnext;
        }
    }
}
