class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    
    isHappy(n) {
        const map=new Map();
        const helper=(n)=>{
            let temp=n;
            let ans=0;

            while(temp){
                let digit=temp%10;
                temp = Math.floor(temp / 10);
                ans+=Math.floor(digit*digit);
            }
            return ans;
        }

        let temp=n;
        map.set(temp,1);
       while (true) {
            let result=helper(temp);
            if(result==1) return true;
            if(map.get(result)) return false;
            map.set(result,1);
            temp=result;
        }

        return false;
    }
}
