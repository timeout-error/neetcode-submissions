class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxi=0;
        let j=0;
        for(let i=1;i<prices.length;i++){
             maxi=Math.max(maxi,prices[i]-prices[j]);
             if(prices[i]<prices[j]){
                j=i;
             }
        }
        return maxi;
    }
}
