let getFloorAndCeil = function(nums,x){
    let floor=-1;
    let ceil=-1;


    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]<=x){
            floor=nums[i];
            break;
        }
       
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=x){
            ceil=nums[i];
            break;
        }
      
    }

   return [floor,ceil];
}

console.log("getFloorAndCeil",getFloorAndCeil([2,4,6,8,10,12,14], 1))
console.log("getFloorAndCeil",getFloorAndCeil([3,4,4,7,8,10], 5))
console.log("getFloorAndCeil",getFloorAndCeil([3,4,4,7,8,10], 8))