let pascalTriangleI=function(r,c){
    let n=r-1;
    let k=c-1;

     k=Math.min(k,n-k);
    let result=1;
    for(let i=0;i<k;i++){
         result=result*(n-i);
         result=result/(i+1);
    }
    return result;
}

console.log("pascalTriangleI",pascalTriangleI(4,2));
console.log("pascalTriangleI",pascalTriangleI(5,3));
console.log("pascalTriangleI",pascalTriangleI(6,4));