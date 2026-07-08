let searchInsert=function(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
        else if(nums[i]<target && nums[i+1]>target){
            return i+1;
        }
        else if(target<nums[0]){
            return 0;
        }
        else if(target>nums[nums.length-1]){
            return nums.length;
        }
    }
    return;
}

console.log("searchInsert",searchInsert([1,3,5,6],5))
console.log("searchInsert",searchInsert([1,3,5,6],2))
console.log("searchInsert",searchInsert([1,3,5,6],7))
console.log("searchInsert",searchInsert([1,3,5,6],0))