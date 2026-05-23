let Factorial= function(n){
    if(n<=1)return 1;
    return n*Factorial(n-1);
}

console.log(Factorial(0))
console.log(Factorial(3))