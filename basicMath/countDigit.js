let countDigit = function(number){
  let count=0;
  for(let i=number;i>0;i=Math.floor(i/10)){
   
      count++;
   
  }
  
  return count;
}

console.log(countDigit(12680));
console.log(countDigit(3));
console.log(countDigit(0));