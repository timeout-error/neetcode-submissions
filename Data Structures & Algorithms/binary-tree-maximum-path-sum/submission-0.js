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
    maxPathSum(root) {
        let sum = -Infinity;

        const helper = (root) => {
            if (!root) return 0;

            let l = Math.max(0, helper(root.left));

            let r = Math.max(0, helper(root.right));

            sum = Math.max(sum, l + r + root.val);

            return root.val + Math.max(l, r);
        };
        helper(root);
        return sum;
    }
}
