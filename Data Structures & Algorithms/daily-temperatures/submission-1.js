class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let len = temperatures.length;
        let result = new Array(len).fill(0);

        let stack=[];
        for(let i=len-1;i>=0;i--){
            let stLength=stack.length-1;
            while(temperatures[i]>=temperatures[stack[stLength]]){
               stack.pop();
               stLength--;
            }
           result[i]=stack.length ? stack[stack.length-1]-i : 0;
           stack.push(i);
        }
        return result;
    }
}

28

