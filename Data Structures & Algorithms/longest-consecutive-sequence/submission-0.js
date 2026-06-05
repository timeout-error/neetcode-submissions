class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let set = new Set(nums);
        console.log("aa",set);
        let maxi = 1;
        for (let num of set) {
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (set.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                maxi = Math.max(maxi, currentStreak);
            }
        }
        return maxi;
    }
}