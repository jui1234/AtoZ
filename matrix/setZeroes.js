let setZeroes=function(matrix){
    let row=[];
    let col=[];

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                row[i]=true;
                col[j]=true;
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(row[i]===true || col[j]===true){
              matrix[i][j]=0;
            }
        }
    }
    return matrix;

}

console.log("setZeroes",setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log("setZeroes",setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))