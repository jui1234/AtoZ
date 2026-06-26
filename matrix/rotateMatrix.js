let rotateMatrix=function(matrix){
    let newMatrix=[];
    for(let col=0;col<matrix.length;col++){
        let newRow=[];
        for(let row =matrix.length-1;row>=0;row--){
            newRow.push(matrix[row][col]);
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
}

console.log("rotateMatrix",rotateMatrix( [[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log("rotateMatrix",rotateMatrix([[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]))
console.log("rotateMatrix",rotateMatrix([[1, 1, 2], [5, 3, 1], [5, 3, 5]]))
//with newMatrix;;;