class Solution {
    checkInclusion(s1, s2) {
       const n=s1.length;
       const m=s2.length;

       if(n>m) return false;

       let freq=new Array(26).fill(0);
       let win=new Array(26).fill(0);

       for(let i=0;i<n;i++){
         freq[s1[i].charCodeAt(0) - 97]++;
         win[s2[i].charCodeAt(0) - 97]++;
       }

      if (freq.join() === win.join()) return true;
       for(let i=n;i<m;i++){
          win[s2[i].charCodeAt(0) - 97]++;
          win[s2[i-n].charCodeAt(0) - 97]--;
         if(freq.join()==win.join()) return true;

       }
       return false;
    }
}