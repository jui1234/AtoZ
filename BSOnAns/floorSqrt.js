let floorSqrt=function(n){
    let low=0;
    let high=n;
    let ans=0;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        let square=mid*mid;

        if(square===n){
            return mid;
        }

        if(square<n){
            ans=mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return ans;
}

console.log("floorSqrt",floorSqrt(36))
console.log("floorSqrt",floorSqrt(28))
console.log("floorSqrt",floorSqrt(50))