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
                let index = stack.pop();
                let height = heights[index];

                let pse = stack.length ? stack[stack.length - 1] : -1;

                result = Math.max(result, height * (nse - pse - 1));
            }
            stack.push(i);
        }

        while (stack.length) {
            let nse = heights.length;
            let index = stack.pop();
            let height = heights[index];

            let pse = stack.length ? stack[stack.length - 1] : -1;
            result = Math.max(result, height * (nse - pse - 1));
        }
        return result;
    }
}
