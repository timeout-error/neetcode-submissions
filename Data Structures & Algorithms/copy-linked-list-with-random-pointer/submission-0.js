// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        let copyNode=new Node(head.val,head.next,null);

        let result=copyNode;
        let itrNode=head;

  
        let mapp=new Map();
        mapp.set(itrNode,copyNode);
        
        while(itrNode.next){
              itrNode=itrNode.next;
              let tempNode=new Node(itrNode.val,itrNode.next,null);
              mapp.set(itrNode,tempNode);
              copyNode.next=tempNode;
              copyNode=tempNode;
        }

        while(head){
            let tempNode=mapp.get(head);
            tempNode.random = mapp.get(head.random);
            head=head.next;
        }
        return result;
    }
}
