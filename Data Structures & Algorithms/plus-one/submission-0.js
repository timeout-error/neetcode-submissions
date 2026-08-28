class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const revDigits = digits.reverse();

        let carry = 1;
        console.log("sxnakj", revDigits);

        for (let i = 0; i < revDigits.length; i++) {
            let temp = revDigits[i] + carry;
            carry = Math.floor(temp / 10);
            revDigits[i] = temp % 10;
        }

        if (carry) {
            revDigits.push(carry);
        }
        return revDigits.reverse();
    }
}
