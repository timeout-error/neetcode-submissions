class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxi=0;
        let j=0;
        for(let i=1;i<prices.length;i++){
             if(prices[i]-prices[j]>0){
                maxi=Math.max(maxi,prices[i]-prices[j]);
             }else {
                j++;
             }
        }
        return maxi;
    }
}
