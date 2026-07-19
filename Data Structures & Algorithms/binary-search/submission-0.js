class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0;
        let h=nums.length;
        while(l<=h){
            let mid=Math.floor((l+h)/2);
            if(nums[mid]===target){
                return mid;
            }else if(nums[mid]<=target){
                l++;
            }else{
                h--;
            }
        }
        return -1;
    }
}
