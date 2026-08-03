let findPeakGrid=function(mat){
    let row=mat.length;
    for(let i=0;i<row;i++){
        for(let j=0;j<mat[i].length;j++){
            let left = j > 0 ? mat[i][j-1] : -Infinity;
let right = j < mat[i].length-1 ? mat[i][j+1] : -Infinity;
let top = i > 0 ? mat[i-1][j] : -Infinity;
let bottom = i < row-1 ? mat[i+1][j] : -Infinity;
          if (
    mat[i][j] >= left &&
    mat[i][j] >= right &&
    mat[i][j] >= top &&
    mat[i][j] >= bottom
) {
    return [i, j];
}
        }
    }
    return [-1,-1];
}
console.log("findPeakGrid",findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]]))
console.log("findPeakGrid",findPeakGrid([[10, 7], [11, 17]]))
console.log("findPeakGrid",findPeakGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))