var First50PositiveNumber = function(d) {
 let sum=0;
 let count=1;
 let num = (d === 0) ? 10 : d;


 while(count<=50){
   
       sum+=num;
       num+=10;
    
    count++;
 }
 return sum;
}

console.log(First50PositiveNumber(1));
console.log(First50PositiveNumber(2));
console.log(First50PositiveNumber(5));
console.log(First50PositiveNumber(0));