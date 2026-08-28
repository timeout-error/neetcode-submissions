class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    maxSlidingWindow(nums, k) {

        let ans = [];
        let dequeu = [];
        let len = nums.length;
        
        for (let i = 0; i < len; i++) {
            if (dequeu.length && dequeu[0] <= i - k) {
                dequeu.shift();
            }
            while (dequeu.length && nums[dequeu[dequeu.length - 1]] <= nums[i]) {
                dequeu.pop();
            }
            dequeu.push(i);
            if(i-k+1 >= 0){
                 ans.push(nums[dequeu[0]]);
            }
        }
        return ans;
    }
}
