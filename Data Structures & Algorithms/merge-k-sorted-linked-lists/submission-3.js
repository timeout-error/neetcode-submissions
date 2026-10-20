class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }

        let interval = 1;

        while (interval < lists.length) {
            for (let i = 0; i + interval < lists.length; i += interval * 2) {
                lists[i] = this.mergeList(lists[i], lists[i + interval]);
            }

            interval *= 2;
        }

        return lists[0];
    }

    mergeList(l1, l2) {
        const dummy = new ListNode(-1);
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 || l2;

        return dummy.next;
    }
}
