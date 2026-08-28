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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let head = l2;
        let prev = l2;
        while (l1 && l2) {
            let sumVal = l1.val + l2.val + carry;
            carry = Math.floor(sumVal / 10);
            sumVal = sumVal % 10;
            l2.val = sumVal;
            prev = l2;
            l1 = l1.next;
            l2 = l2.next;
        }

        if(l1){
           prev.next=l1;
        }

        while(l1){
            let sumVal = l1.val + carry;
            carry = Math.floor(sumVal / 10);
            sumVal = sumVal % 10;
            l1.val = sumVal;
            prev = l1;
            l1 = l1.next;
        }

        while(l2){
            let sumVal = l2.val + carry;
            carry = Math.floor(sumVal / 10);
            sumVal = sumVal % 10;
            l2.val = sumVal;
            prev = l2;
            l2 = l2.next;
        }

        if (carry) {
            prev.next = new ListNode(carry);
        }
        return head;
    }
}
