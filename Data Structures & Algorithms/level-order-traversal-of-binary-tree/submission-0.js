/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];


        let queue = [];
        queue.push(root);
        let levelOrder = [];
        while (queue.length) {
            let sz = queue.length;

            let temp = [];
            for (let i = 0; i < sz; i++) {
                let top = queue.shift();

                temp.push(top.val);

                if (top.left!=null) {
                    queue.push(top.left);
                }  
                
                if (top.right!=null) {
                    queue.push(top.right);
                }
            }
            levelOrder.push(temp);
        }
        return levelOrder;
    }
}
