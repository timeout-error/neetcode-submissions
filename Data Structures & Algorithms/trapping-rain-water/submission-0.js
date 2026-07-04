class Solution {
    trap(height) {
        const n = height.length;

        let left = 0;
        let right = 0;

        let prefixSum = new Array(n).fill(0);
        let suffixSum = new Array(n).fill(0);

        let total = 0;

        for (let i = 0; i < n; i++) {
            prefixSum[i] = left;
            left = Math.max(left, height[i]);
        }

        for (let i = n - 1; i >= 0; i--) {
            suffixSum[i] = right;
            right = Math.max(right, height[i]);
        }

        for (let i = 0; i < n; i++) {
            const waterLevel = Math.min(prefixSum[i], suffixSum[i]);

            if (waterLevel > height[i]) {
                total += waterLevel - height[i];
            }
        }

        return total;
    }
}