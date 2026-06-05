class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mpp=new Map();
        for(let i=1;i<nums.length;i++){
            if(mpp.has(nums[i])){
                return true;
            }else{
               mpp.set(nums[i],1);
            }
        }
        return false;
    }
}
