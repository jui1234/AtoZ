let NSum=function(n){
   if(n==1)return 1;
   return n + NSum(n-1)
}

console.log(NSum(2));