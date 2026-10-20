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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    TreeCreate(preorder,preStart,preEnd,inorder,inStart,inEnd,inOrderMap){

        if(preStart>preEnd || inStart>inEnd) return null;

        let root=new TreeNode(preorder[preStart]);

        let rootIdx = inOrderMap.get(root.val);
        let numLeft=rootIdx-inStart;

        root.left=this.TreeCreate(preorder,preStart+1,preStart+numLeft,inorder,inStart,rootIdx-1,inOrderMap);

        root.right=this.TreeCreate(preorder,preStart+numLeft+1,preEnd,inorder,rootIdx+1,inEnd,inOrderMap);

        return root;
    }
    buildTree(preorder, inorder) {
        let inOrderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inOrderMap.set(inorder[i], i);
        }

        let root = this.TreeCreate(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1,inOrderMap);
        return root;
    }
}
