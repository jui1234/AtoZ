let findPages=function(nums,m){
      if (m > nums.length) return -1;
    let low=Math.max(...nums);
    let high=nums.reduce((curr,sum)=>curr+sum);
    let ans=-1;
    while(low<=high){
        let total=0;
        let student=1;

        let mid=Math.floor((low+high)/2);
        for(let i=0;i<nums.length;i++){
          total+=nums[i]
        if(total>mid){
            student++;
            total=nums[i];
        }
       
        }

         if(student>m){
            low=mid+1;
        }else{
            ans=mid;
            high=mid-1;
        }
       
    }
    return ans;

}

console.log("findPages",findPages([12,34,67,90],2))
console.log("findPages",findPages( [25, 46, 28, 49, 24],4))
console.log("findPages",findPages( [15, 17, 20],2))