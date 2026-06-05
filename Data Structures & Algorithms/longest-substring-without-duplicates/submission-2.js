class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxi=0;
        let map= new Map();
        let j=0;
        for(let i=0;i<s.length;i++){
             map.set(s[i],(map.get(s[i]) || 0)+1);
                while(map.get(s[i])>1){
                    map.set(s[j],map.get(s[j])-1);
                    j++;
                }
            
            maxi=Math.max(i-j+1,maxi);
            
        }
        return maxi;
    }
}
