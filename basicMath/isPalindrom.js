let isPalindrom = function(number){
    let storereverse=0;
    let originalnumber=number;
    for(let i=number;i>0;i=Math.floor(i/10)){
        let lastDigit=i%10;
        storereverse=storereverse*10+lastDigit;
    }
    return originalnumber===storereverse;
}

console.log(isPalindrom(12321));
console.log(isPalindrom(12345));
console.log(isPalindrom(0));    