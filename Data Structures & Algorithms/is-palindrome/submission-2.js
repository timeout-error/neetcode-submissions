class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch) {
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
            return true;
        } else return false;
    }
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l <= r) {
            if (!this.isAlphaNumeric(s[l])) {
                l++;
                continue;
            } else if (!this.isAlphaNumeric(s[r])) {
                r--;
                continue;
            } else {
                if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
                l++;
                r--;
            }
        }
        return true;
    }
}
