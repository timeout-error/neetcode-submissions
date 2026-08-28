class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //  1 4 7
        //  2 5 8
        //  3 6 9

        //  00  02->20 11->11 12->21 33
        //  01->10
         let n=matrix.length;
         for(let i=0;i<n;i++){
            for(let j=0;j<i;j++){
                let temp=matrix[i][j];
                matrix[i][j]=matrix[j][i];
                matrix[j][i]=temp;
            }
         }
         for(let i=0;i<n;i++){
            let temp=matrix[i].reverse();
            matrix[i]=temp;
         }
         return matrix;
    }

}
