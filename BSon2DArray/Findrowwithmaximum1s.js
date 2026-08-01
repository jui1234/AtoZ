let rowWithMax1s=function(mat){
    let row=mat.length;
    let max=0;
    let maxindex=-1;
    for(let i=0;i<row;i++){
    let total=0;
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]===1){
             total++;
            }
        }

        if(max<total){
            
              maxindex=i;
              max=total;
        }
    }
    return maxindex;
}

console.log("rowWithMax1s",rowWithMax1s([ [1, 1, 1], [0, 0, 1], [0, 0, 0]]));
console.log("rowWithMax1s",rowWithMax1s( [ [0, 0], [0, 0] ]))
console.log("rowWithMax1s",rowWithMax1s( [ [0, 0, 1], [0, 1, 1], [0, 1, 1] ]))