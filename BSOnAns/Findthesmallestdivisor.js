let smallestDivisor=function(nums,limit){
    let low=1;
    let high=Math.max(...nums);
    let ans=-1;

    while(low<=high){
        let total=0;
        let mid=Math.floor((low+high)/2);

        for(let i=0;i<nums.length;i++){
            total+=Math.ceil(nums[i]/mid);
        }

        if(total<=limit){
            ans=mid;
             high=mid-1;
        }
        else{
           
            low=mid+1;
        }
    }
    return ans;
}

console.log("smallestDivisor",smallestDivisor([1,2,3,4,5],8))