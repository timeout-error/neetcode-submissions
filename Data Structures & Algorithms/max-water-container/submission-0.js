class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
         let l=0;
         let h=heights.length-1;
         let maxi=0;
         while(l<=h){
            maxi=Math.max(maxi,(h-l)*Math.min(heights[l],heights[h]));
            if(heights[l]<heights[h]){
                l++;
            }else{
                h--;
            }
         }
         return maxi;
    }
}
