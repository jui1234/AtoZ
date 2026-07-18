let NthRoot=function(n,m){
    let low=0;
    let high=m;

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let value=mid**n;

        if(value===m){return mid};

        if(value<m){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return -1;

}

console.log("NthRoot",NthRoot(3,27))
console.log("NthRoot",NthRoot(4,69))
console.log("NthRoot",NthRoot(4,81))