class Solution {
    minWindow(s, t) {
        let mapp = new Map();
        let mapp1 = new Map();
        let required = new Map();

        for (let i = 0; i < t.length; i++) {
            mapp.set(t[i], (mapp.get(t[i]) || 0) + 1);
            required.set(t[i], (required.get(t[i]) || 0) + 1);
        }

        let count = mapp.size;

        let l = 0;
        let r = 0;
        let ans = Infinity;
        let result = "";

        while (r < s.length) {
            mapp1.set(s[r], (mapp1.get(s[r]) || 0) + 1);

            if (mapp.has(s[r]) && mapp.get(s[r]) > 0) {
                mapp.set(s[r], mapp.get(s[r]) - 1);

                if (mapp.get(s[r]) === 0) {
                    count--;
                }
            }

            while (count === 0 && l <= r) {
                let len = r - l + 1;

                if (len < ans) {
                    result = s.substring(l, r + 1);
                    ans = len;
                }

                mapp1.set(s[l], mapp1.get(s[l]) - 1);

                if (mapp.has(s[l]) && mapp1.get(s[l]) < required.get(s[l])) {
                    mapp.set(s[l], mapp.get(s[l]) + 1);
                    count++;
                }

                l++;
            }

            r++;
        }

        return result;
    }
}
