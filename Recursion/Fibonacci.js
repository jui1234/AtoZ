let Fibonacci =function(n){
  if(n<=1)return n;
  
  return Fibonacci(n-1)+Fibonacci(n-2);
}

console.log("Fibonacci", Fibonacci(3));
console.log("Fibonacci", Fibonacci(6));