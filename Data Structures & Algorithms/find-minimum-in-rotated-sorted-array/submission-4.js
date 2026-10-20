class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let ans = 1e9;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[l] <= nums[mid]) {
                ans = Math.min(ans, nums[l]);
                l = mid + 1;
            } else {
                ans = Math.min(ans, nums[mid]);
                r = mid - 1;
            }
        }
        return ans;
    }
}
