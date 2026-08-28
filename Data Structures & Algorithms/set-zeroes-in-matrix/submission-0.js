class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        let n=matrix.length;
        let m=matrix[0].length;

        let col=new Array({length:m}).fill(Infinity);
        let row=new Array({length:n}).fill(Infinity);
 

        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j]==0){
                    col[j]=0;
                    row[i]=0;
                }
            }
        }


        for(let i=0;i<n;i++){
            if(row[i]==0){
                for(let j=0;j<m;j++){
                    matrix[i][j]=0;
                }
            }
        }

        for(let j=0;j<m;j++){
            if(col[j]==0){
                for(let i=0;i<n;i++){
                    matrix[i][j]=0;
                }
            }
        }
    }
}
