class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let i=0;i<strs.length;i++){
            encoded+=strs[i];
            if(i<strs.length-1){
              encoded+="#*"
            }
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr=str.split('#*');
        return arr;

    }
}
