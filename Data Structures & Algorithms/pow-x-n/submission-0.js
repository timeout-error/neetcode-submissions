class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let temp = Math.abs(n);
        let ans = 1;
        let base = x;
        while (temp > 0) {
            
            if (temp % 2 == 1) {
                ans *= base;
            }
            base *= base;
            temp = Math.floor(temp / 2);
        }

        if (n < 0) {
            ans = 1 / ans;
        }
        return ans;
    }
}
