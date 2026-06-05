class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isNotValid(board,i,j){
        let val=board[i][j];
        board[i][j]='.';
        for(let k=0;k<board.length;k++){
            if(board[i][k]===val) return true;
            if(board[k][j]===val) return true;
            let row = 3 * Math.floor(i / 3) + Math.floor(k / 3);
            let col = 3 * Math.floor(j / 3) + (k % 3);

            if (board[row][col] === val) return true;
        }
        board[i][j]=val;
        return false;
    }
    isValidSudoku(board) {
        let row=board.length;
        let col=board[0].length;
        for(let i=0;i<row;i++){
            for(let j=0;j<col;j++){
                if(board[i][j]=='.') continue;

                if(this.isNotValid(board,i,j)){
                    return false;
                }
            }
        }
        return true;
    }
}
