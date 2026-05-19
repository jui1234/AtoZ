let reverseNumber = function(number){
    let storenumber="";
    for(let i=number;i>0;i=Math.floor(i/10)){
        let lastDigit=i%10; 
        storenumber+=lastDigit;
    }
    return storenumber;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(100));
console.log(reverseNumber(0));