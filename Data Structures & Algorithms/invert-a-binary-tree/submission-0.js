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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;
        let rightNode=this.invertTree(root.right);
        let leftNode=this.invertTree(root.left);
        root.left=rightNode;
        root.right=leftNode;
        return root;
    }
}
