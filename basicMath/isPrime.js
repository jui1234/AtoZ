var primenumber= function(n){
  for(let i=2;i<n;i++){
    if(n%i===0){
      return false;
    }
  }
  return true;
}

console.log(primenumber(5))
console.log(primenumber(8))
console.log(primenumber(9))