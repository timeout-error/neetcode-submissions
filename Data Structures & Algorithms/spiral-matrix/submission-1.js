class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let m = matrix.length - 1;
        let n = matrix[0].length - 1;

        let ans = [];
        let top = 0;
        let left = 0;
        let right = n;
        let bottom=m;

        while (left<=right && top<=bottom) {

            for (let j = left; j <= right; j++) {
                ans.push(matrix[top][j]);
            }
            top++;

            if(top>bottom || left>right) break;

            for (let i = top; i <= bottom; i++) {
                ans.push(matrix[i][right]);
            }
            right--;

            if(top>bottom || left>right) break;

            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }

            bottom--;
            
            if(top>bottom || left>right) break;

            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
        return ans;
    }
}
