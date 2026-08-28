class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xorResult=0;
        for(let i=0;i<=nums.length;i++){
            xorResult=xorResult^i;
        }
        for(let i=0;i<nums.length;i++){
            xorResult=xorResult^nums[i];
        }
        return xorResult;
    }
}
