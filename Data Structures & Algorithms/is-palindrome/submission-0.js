class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isalpha(ch){
        return /^[a-zA-Z]$/.test(ch)
    }
    isPalindrome(s) {
        let l=0;
        let r=s.length-1;
        while(l<=r){
            if(!this.isalpha(s[l])){
                l++;
                continue;
            }else if(!this.isalpha(s[r])){
                r--;
                continue;
            }else {
            if(s[l].toLowerCase()!==s[r].toLowerCase()) return false;
            l++;
            r--;
            }
        }
        return true;
    }
}
