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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        let queue = [];
        queue.push(root);

        let ans = [];

        while (queue.length) {
            let sz = queue.length;

            for (let i = 0; i < sz; i++) {
                let top = queue.shift();
                if (i == sz - 1) {
                    ans.push(top.val);
                }

                if (top.left) queue.push(top.left);
                if (top.right) queue.push(top.right);
            }
        }
        return ans;
    }
}
