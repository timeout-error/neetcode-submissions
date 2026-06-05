class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    // 
    characterReplacement(s, k) {
       let maxf=0;
       let l=0;
       let map={};
       let count=0;
       for(let r=0;r<s.length;r++){
        map[s[r]] = (map[s[r]] || 0) + 1;
        maxf=Math.max(map[s[r]],maxf);
        while((r-l+1)-maxf>k){
           map[s[l]]--;
           l++;
        }
        count=Math.max((r-l+1),count);
       }
       return count;
    }
}
