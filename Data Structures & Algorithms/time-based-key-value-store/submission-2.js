class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let ans = [];
        if (this.keyStore.has(key)) {
            ans = this.keyStore.get(key);
        }
        ans.push([timestamp, value]);
        this.keyStore.set(key, ans);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const sortedArr = this.keyStore.get(key);

        let l = 0;
        let r = sortedArr.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (sortedArr[mid][0] === timestamp) {
                return sortedArr[mid][1];
            }

            if (sortedArr[mid][0] < timestamp) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        if (r >= 0) {
            return sortedArr[r][1];
        }
        return "";
    }
}
