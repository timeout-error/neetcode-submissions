class Solution {
   public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq;

        for (int i = 0; i < nums.size(); i++) {
            pq.push(nums[i]);
        }

        int largestKth = k;
        int last=-1;
        while (largestKth) {
            last= pq.top();
            pq.pop();
            largestKth--;
        }

        return largestKth ? -1 : last;
    }
};
