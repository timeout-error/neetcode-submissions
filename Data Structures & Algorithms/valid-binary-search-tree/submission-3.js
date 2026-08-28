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
     * @return {boolean}
     */
    isValidBST(root) {
       
         
         const helper=(root,min,max)=>{
            if(!root) return true;

            if(root.val>=max || root.val<=min) return false;

            return helper(root.left,min,root.val) && helper(root.right,root.val,max);
         }

         return helper(root,-Infinity,Infinity);
    }
}
