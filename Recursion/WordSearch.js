let exist=function(board,word){
    let helper=function(row,col,index){
        if(index===word.length){
            return true;
        }

        if(row<0 || col<0 || row>=board.length || col>=board[0].length){
            return false;
        }

        if(board[row][col]!==word.charAt(index)){
            return false;
        }

        let temp=board[0][0];
        board[0][0]='#';

        let found=helper(row+1,col,index+1)//down
             ||  helper(row-1,col,index+1)//up
             ||  helper(row,col+1,index+1)//right
             ||  helper(row,col-1,index+1)//left

             board[row][col]=temp;

             return found;
    }

    for(let row=0;row<board.length;row++){
        for(let col=0;col<board[0].length;col++){
           if( helper(row,col,0)){
            return true;
           }
        }
    }
    return false;
}

let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "ABCB"));   // false
