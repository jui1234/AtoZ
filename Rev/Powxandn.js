let myPow=function(x,n){
    if(n===0){
        return 1;
    }

     if (n < 0) {
            return 1 / myPow(x, -n);
        }

    return x*myPow(x,n-1);
}

console.log("myPow",myPow(2,10));
console.log("myPow",myPow(2,-2));