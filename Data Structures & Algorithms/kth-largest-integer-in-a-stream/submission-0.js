class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }

    add(val) {
        this.nums.push(val);

        this.nums.sort((a, b) => b - a);

        return this.nums[this.k - 1];
    }
}