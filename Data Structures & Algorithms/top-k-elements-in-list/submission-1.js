class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            // map[nums[i]]++;
            map.set(nums[i],(map.get(nums[i]) || 0 )+1);
        }
        let sortedArr=[...map].sort((a,b)=>b[1]-a[1]);

        let ans=[];
        let count=k;
        for(let i=0;i<sortedArr.length && count;i++){
            count--;
            ans.push(sortedArr[i][0]);
        }
        return ans;
    }
}
