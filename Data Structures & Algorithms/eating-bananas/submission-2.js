class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    
    minEatingSpeed(piles, h) {
       piles.sort((a,b)=>a-b);

       let len=piles.length;
       let l=0;
       let r = piles[len - 1];

       let ans=1e9;
       while(l<=r){
           let mid=Math.floor((l+r)/2);
            let count=0;
           for(let i=0;i<len;i++){
               let tempCount = Math.ceil(piles[i] / mid) || 1;
                count+=tempCount;
           }
           if(count<=h && mid<=ans){
            ans=mid;
            r=mid-1;
           }else {
            l=mid+1;
           }
       }
       return ans;
    }
}
