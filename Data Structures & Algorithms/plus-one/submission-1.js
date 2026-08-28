class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const revDigits = digits;

        let carry = 1;

        for (let i = revDigits.length-1; i >=0 ; i--) {
            let temp = revDigits[i] + carry;
            carry = Math.floor(temp / 10);
            revDigits[i] = temp % 10;
        }

        if (carry) {
            revDigits.unshift(carry);
        }
        return revDigits;
    }
}
