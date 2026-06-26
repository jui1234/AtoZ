let rotatMatrixSame=function(matrix){
    for(let row=0;row<matrix.length;row++){
        for(let col=row+1;col<matrix.length;col++){
            [matrix[row][col],matrix[col][row]]=[matrix[col][row],matrix[row][col]]
        }
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse();
    }
    return matrix;
}

console.log("rotatMatrixSame",rotatMatrixSame([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log("rotatMatrixSame",rotatMatrixSame([[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]))
console.log("rotatMatrixSame",rotatMatrixSame([[1, 1, 2], [5, 3, 1], [5, 3, 5]]))