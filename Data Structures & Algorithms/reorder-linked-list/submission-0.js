/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

var reverse=function(head){
    let pre=null;
    let curr=head;
    while(curr){
        let nextCurr=curr.next;
        curr.next=pre;
        pre=curr;
        curr=nextCurr;
    }
    return pre;
}


class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
          let slow=head;
    let fast=head.next;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next;
        if(fast.next){
           fast=fast.next;
        }
    }

    let slowNext=slow.next;
    slow.next=null;
    let secondHead=reverse(slowNext);
    let firstHead=head;
    firstHead=firstHead.next;
    let lastHead=head;
    
    let flag=0;

    // 1-2
    // 4-3
     while(firstHead || secondHead){
        if(flag){
            flag=1-flag;
            if(!firstHead) continue;
            let nextFirst=firstHead.next;
            firstHead.next=null;
            lastHead.next=firstHead;
            lastHead=firstHead;
            firstHead=nextFirst;

        }else{
           flag=1-flag;
            if(!secondHead) continue;
           let nextSecond=secondHead.next;
            secondHead.next=null;
            lastHead.next=secondHead;
            lastHead=secondHead;
            secondHead=nextSecond;
        }
        
     }
     return head;
    }
}
