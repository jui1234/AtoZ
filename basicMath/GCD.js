
var GCD = function(n1,n2){
  let result=[];
  let limit=Math.min(n1,n2);
  
  for(let i=1;i<=limit;i++){
    if(n1%i===0 && n2%i===0){
      result.push(i);
    }
  }
   return result[result.length-1];
}

console.log(GCD(6,12));
console.log(GCD(4,6));
console.log(GCD(9,8));