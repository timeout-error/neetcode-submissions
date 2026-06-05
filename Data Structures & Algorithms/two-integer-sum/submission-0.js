class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map=new Map();

        for(let i=0;i<nums.length;i++){
            if(map.has(target-nums[i])){
               let l=map.get(target-nums[i]);
               return [l,i];
            }else {
                map.set(nums[i],i);
            }
        }
        return -1;
    }
}
