const myPow=function(x,n){
    if(n===0){
        return 1;
    }

    let half=myPow(x,Math.floor(n/2));

    if(n%2==0){
        return half*half;

    }

    // if(n<=0){
    //     return x/myPow(x,n-1);
    // }
    return x*half*half;
}
const countGoodNumbers=function(n){
    let even=Math.ceil(n/2);
    let odd=Math.floor(n/2);

    return myPow(5,even) * myPow(4,odd);
}

console.log("myPow",countGoodNumbers(1))
console.log("myPow",countGoodNumbers(2))
console.log("myPow",countGoodNumbers(10000000000))