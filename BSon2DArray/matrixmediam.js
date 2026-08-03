let findMedian=function(matrix){
   let row=matrix.length;
   let result=[];

   for(let i=0;i<row;i++){
    for(let j=0;j<matrix[i].length;j++){
        result.push(matrix[i][j]);
    }
   }
    
   result.sort((a,b)=>a-b);

   let mid=Math.floor((result.length)/2);
 
   return result[mid];
   
}

console.log("findMedian",findMedian([ [1, 3, 8], [2, 3, 4], [1, 2, 5] ] ));
console.log("findMedian",findMedian([ [1, 4, 9], [2, 5, 6], [3, 7, 8] ] ));
console.log("findMedian",findMedian([ [1, 4, 15], [2, 5, 6], [3, 8, 11] ] ));