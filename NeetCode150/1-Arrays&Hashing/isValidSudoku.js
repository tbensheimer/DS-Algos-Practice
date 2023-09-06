let isValidSudoku = (board) => {
    for(let i = 0; i < board.length; i++) {
        let rowHash = {};
        let colHash = {};
        let boxHash = {};

        for(let j = 0; j < board[i].length; j++) {

            //row check
            if(board[i][j] != ".") {
                if(rowHash[board[i][j]]) return false;
                rowHash[board[i][j]] = 1;
            }

            //col check
            if(board[j][i] != ".") {
                if(colHash[board[j][i]]) return false;
                colHash[board[j][i]] = 1;
            }

            //box check
            let box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            if(boxHash[box] != ".") {
                if(boxHash[box]) return false;
                boxHash[box] = 1;
            }
        }
    }
    return true;
}

//time - O(N^2)
//space - O(1)
