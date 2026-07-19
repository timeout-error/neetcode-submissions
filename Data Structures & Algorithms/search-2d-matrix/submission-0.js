class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n=matrix.length;
        let m=matrix[0].length;

        let l=0;
        let h=(n*m-1);
        while (l <= h){
           let mid=Math.floor((l+h)/2);
           let row = Math.floor(mid / m);
           let col = mid % m;

           if(matrix[row][col]===target){
               return true;
           }else if(matrix[row][col]<=target){
                 l=mid+1;
           }else{
              h=mid-1;
           }
        }
        return false;
    }
}
