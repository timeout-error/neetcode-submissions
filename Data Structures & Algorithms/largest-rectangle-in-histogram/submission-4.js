class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let result = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
                let nse = i;
                let indexCurr = stack.pop();
                let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
                result = Math.max(result, (nse - pse - 1) * heights[indexCurr]);
            }
            stack.push(i);
        }

        while (stack.length) {
            let nse = heights.length;
            let indexCurr = stack.pop();
            let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            result = Math.max(result, (nse - pse - 1) * heights[indexCurr]);
        }
        return result;
    }
}
