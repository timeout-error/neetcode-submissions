class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let arr=stones.sort((a, b) => a - b);
        console.log("nsm",arr)
        while (arr.length >= 2) {
            let x1=arr[arr.length-1];
            arr.pop();
            let x2=arr[arr.length-1]
            arr.pop();
            if(x1!=x2) {
                let temp=Math.abs(x1-x2);
                arr.push(temp);
                arr=arr.sort((a, b) => a - b);
            }
        }
        return arr.length==0 ? 0 : arr.join("");
    }
}
