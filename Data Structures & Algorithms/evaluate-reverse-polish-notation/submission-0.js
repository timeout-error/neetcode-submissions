class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let len = tokens.length;
        for (let i = 0; i < len; i++) {
            if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "/" || tokens[i] == "*") {
                let first = stack.pop();
                let second = stack.pop();

                let result;

                switch (tokens[i]) {
                    case "+":
                        result = second + first;
                        break;
                    case "-":
                        result = second - first;
                        break;
                    case "*":
                        result = second * first;
                        break;
                    case "/":
                        result = Math.trunc(second / first);
                        break;
                }

                stack.push(result);
            } else {
                stack.push(Number(tokens[i]));
            }
        }
        console.log("mdsnc",len)
        return stack[0];
    }
}
