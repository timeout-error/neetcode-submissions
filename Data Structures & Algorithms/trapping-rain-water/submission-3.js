class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = 0;
         const len = height.length;

        let prefixSum = new Array(len).fill(0);
        let suffixSum = new Array(len).fill(0);
        let total = 0;

        for (let i = 0; i < len; i++) {
            prefixSum[i] = left;
            left = Math.max(height[i], left);
        }

        for (let i = len - 1; i >= 0; i--) {
            suffixSum[i] = right;
            right = Math.max(height[i], right);
        }
        for (let i = 0; i < len; i++) {
            let waterLevel= Math.min(prefixSum[i], suffixSum[i]);
            if (height[i] < waterLevel)
                total += waterLevel - height[i];
        }
        return total;
    }
}
