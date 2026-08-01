let searchMatrix=function(mat,target){
    let row=mat.length;
    for(let i=0;i<row;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]===target){
                return true;
            }
        }
    }
    return false;
}

console.log("searchMatrix",searchMatrix([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ],8))
console.log("searchMatrix",searchMatrix([ [1, 2, 4], [6, 7, 8], [9, 10, 34] ],78))
console.log("searchMatrix",searchMatrix( [ [1, 2, 4], [6, 7, 8], [9, 10, 34] ],7))
console.log("searchMatrix",searchMatrix([ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ],5))
console.log("searchMatrix",searchMatrix([ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ],20))