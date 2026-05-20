var isArmstrong = function(n){
  let firstDigit=n/10;
  let lastDigit=n%10;
  let length=n.toString().length;
   let sum=0;
 
  for(let i=n;i>0;i=Math.floor(i/10)){
    let lastDigit=i%10;
    sum += Math.pow(lastDigit, length);
  }
 if(n===sum){
   return true;
 }
 return false;//// this is main
 
}

console.log(isArmstrong(12));
console.log(isArmstrong(153));