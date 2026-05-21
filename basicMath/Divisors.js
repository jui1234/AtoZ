var divisors=function(n){
  let result=[];
  for(let i=1;i<=n;i++){
    if(n%i===0){
      result.push(i);
    }
  }
  return result;
}

console.log(divisors(6));
console.log(divisors(8));
console.log(divisors(7));