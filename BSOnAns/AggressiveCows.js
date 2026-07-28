let canPlaveCow=function(nums,k,distance){
    let count=1;
    let lastPlaceCow=nums[0];

    for(let i=1;i<nums.length;i++){
        if(nums[i]-lastPlaceCow>=distance){
            count++;
            lastPlaceCow=nums[i];
        }

    }

    return count>=k;
}

let aggressiaggressiveCows=function(nums,k){
    nums.sort((a,b)=>a-b);
    let low=1;
    let high=nums[nums.length-1]-nums[0];
    let ans=0;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(canPlaveCow(nums,k,mid)){
            ans=mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }

    return ans;
}


console.log("aggressiaggressiveCows",aggressiaggressiveCows([0, 3, 4, 7, 10, 9],4))
console.log("aggressiaggressiveCows",aggressiaggressiveCows([4, 2,1,3,6],2))