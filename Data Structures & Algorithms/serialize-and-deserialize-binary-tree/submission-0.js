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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return null;

        let queue = [];
        queue.push(root);
        let ans = [];

        while (queue.length) {
            let sz = queue.length;
            for (let i = 0; i < sz; i++) {
                let front = queue.shift();

                if (front) {
                    ans.push(front.val);
                    queue.push(front.left);
                    queue.push(front.right);
                } else {
                    ans.push("#");
                }
            }
        }
        console.log("akns", ans.join(","));
        return ans.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // return null;
        if(!data) return null;
        
        const arr = data.split(",");
        let queue = [];
        let curr = 0;

        let root = new TreeNode(arr[curr]);
        queue.push(root);

        while (queue.length) {
            let sz = queue.length;
            for (let i = 0; i < sz; i++) {
                let front = queue.shift();
                curr = curr + 1;
                if (arr[curr] != "#") {
                    front.left = new TreeNode(arr[curr]);
                    queue.push(front.left);
                }
                curr = curr + 1;
                if (arr[curr] != "#") {
                    front.right = new TreeNode(arr[curr]);
                    queue.push(front.right);
                }
            }
        }
        return root;
    }
}
