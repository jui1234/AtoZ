let SumOfBigNumber=function(number){
  if (number<=0) return 0;
  let lastDigit=number%10;
  
  // console.log("lastDigit",Math.floor(number/10));
  return lastDigit+SumOfBigNumber(Math.floor(number/10));
  
}

console.log(SumOfBigNumber(12345));