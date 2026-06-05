class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];
        let unMap={'{':'}','(':')','[':']'};
        for(let i=0;i<s.length;i++){
              if(s[i]=='(' || s[i]=='{' || s[i]=='['){
                 stack.push(s[i]);
              }else{
                if (stack.length === 0) {
                    return false;
                }

                let tp=stack.pop();
                 if(unMap[tp]!=s[i]){
                    return false;
                 }
              }
        }
        return stack.length===0;
    }
}
