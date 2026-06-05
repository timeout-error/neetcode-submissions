class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map= {};
        for(let i=0;i<strs.length;i++){
            let sortedStr=strs[i].split('').sort().join('');
            if(!map[sortedStr]){
                map[sortedStr]=[];
            }
            map[sortedStr].push(strs[i]);
        }
        return Object.values(map)
    }
}
