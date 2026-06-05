class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let i=0;i<strs.length;i++){
            encoded += strs[i].length + "#" + strs[i];
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr=[];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            arr.push(str.substring(i, i + length));
            i += length;
        }
        return arr;

    }
}
