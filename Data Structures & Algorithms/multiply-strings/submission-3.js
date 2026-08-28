class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") {
    return "0";
}

        const getSumResult = (temp1, temp2) => {
            let l1 = temp1.length;
            let l2 = temp2.length;
            let sumResult = [];
            let carry = 0;
            while (l1 && l2) {
                let res = Number(temp1[l1 - 1]) + Number(temp2[l2 - 1]);
                res = carry + res;
                carry = Math.floor(res / 10);
                res = res % 10;
                sumResult.push(res);
                l1--;
                l2--;
            }
            while (l1) {
                let res = Number(temp1[l1 - 1]);
                res = carry + res;
                carry = Math.floor(res / 10);
                res = res % 10;
                sumResult.push(res);
                l1--;
            }

            while (l2) {
                let res = Number(temp2[l2 - 1]);
                res = carry + res;
                carry = Math.floor(res / 10);
                res = res % 10;
                sumResult.push(res);
                l2--;
            }

            if (carry) {
                sumResult.push(carry);
            }

            return sumResult.reverse();
        };

        let l1 = num1.length - 1;
        let l2 = num2.length - 1;
        let result = [0];

        let input1 = num1.split("").reverse();
        let input2 = num2.split("").reverse();

        for (let i = 0; i <= l1; i++) {
            let carry = 0;
            let temp = [];
            for (let j = 0; j <= l2; j++) {
                let res = Number(input1[i]) * Number(input2[j]);
                res = carry + res;
                carry = Math.floor(res / 10);
                res = res % 10;
                temp.push(res);
            }

            if (carry) {
                temp.push(carry);
            }
            temp = temp.reverse();
            for (let k = 0; k < i; k++) {
                temp.push(0);
            }
            const sumResult = getSumResult(temp, result);
            result = sumResult;
        }
        return result.join("");
    }
}
