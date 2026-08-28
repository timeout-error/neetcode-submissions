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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;
        const helper = (root) => {
            if (!root) return 0;

            let leftNode = helper(root.left);
            let leftRight = helper(root.right);

            diameter = Math.max(diameter, leftNode + leftRight);
            return 1 + Math.max(leftNode, leftRight);
        };
        helper(root);
        return diameter;
    }
}
