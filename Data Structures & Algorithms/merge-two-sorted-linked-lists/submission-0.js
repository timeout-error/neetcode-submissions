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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let temp = new ListNode(null);
        let ans = temp;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                let next1 = list1.next;
                temp.next = list1;
                list1.next = null;
                list1 = next1;
                temp = temp.next;
            } else {
                let next1 = list2.next;
                temp.next = list2;
                list2.next = null;
                list2 = next1;
                temp = temp.next;
            }
        }
        while (list1) {
            let next1 = list1.next;
            temp.next = list1;
            list1.next = null;
            list1 = next1;
            temp = temp.next;
        }
        while (list2) {
            let next1 = list2.next;
            temp.next = list2;
            list2.next = null;
            list2 = next1;
            temp = temp.next;
        }
        return ans.next;
    }
}
