let largestSubarraySumMinimized=function(a,k){
    let low=Math.max(...a);
    let high=a.reduce((curr,sum)=>curr+sum);
    let ans=-1;

    while(low<=high){
        let total=0;
        let student=1;
        let mid=Math.floor((low+high)/2);

        for(let i=0;i<a.length;i++){
            total+=a[i];
            if(total>mid){
               student++;
               total=a[i];
            }
        }
        if(student>k){
            low=mid+1;
        }
        else{
            ans=mid;
            high=mid-1;
        }
    }
    return ans;
}

console.log("largestSubarraySumMinimized",largestSubarraySumMinimized([1,2,3,4,5],3))
console.log("largestSubarraySumMinimized",largestSubarraySumMinimized([3,5,1],3))
console.log("largestSubarraySumMinimized",largestSubarraySumMinimized([1,2,3,4,5],2))
