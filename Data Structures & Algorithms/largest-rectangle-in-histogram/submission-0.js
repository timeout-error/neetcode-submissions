class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const prevSmallerElement = () => {
            let output = new Array(heights.length).fill(-1);
            let stack = [];

            for (let i = 0; i < heights.length; i++) {
                while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                    stack.pop();
                }
                if (stack.length) {
                    output[i] = stack[stack.length - 1];
                }
                stack.push(i);
            }
            return output;
        };

        const nextSmallerElement = () => {
            let output = new Array(heights.length).fill(heights.length);
            let stack = [];

            for (let i = heights.length - 1; i >= 0; i--) {
                while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                    stack.pop();
                }
                if (stack.length) {
                    output[i] = stack[stack.length - 1];
                }
                stack.push(i);
            }
            return output;
        };

        const prev = prevSmallerElement();
        const next = nextSmallerElement();
        let maxi=0;
        for (let i = 0; i < heights.length; i++) {
            let temp=heights[i]*(next[i]-prev[i]-1);
            maxi=Math.max(maxi,temp);
        }
        return maxi;
    }
}
