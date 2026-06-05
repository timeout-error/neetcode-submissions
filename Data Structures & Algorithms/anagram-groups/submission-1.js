class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map= {};
        for(let i=0;i<strs.length;i++){
           let arr= new Array(26).fill(0);
           for(let j=0;j<strs[i].length;j++){
                arr[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
           }
           let key=arr.join('#');
           if(!map[key]){
            map[key]=[];
           }
           map[key].push(strs[i]);
        }
        return Object.values(map)
    }
}
