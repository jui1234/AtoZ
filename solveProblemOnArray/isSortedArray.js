let isSorted=function(nums){
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            return false;
        }
    }
        return true;
}

console.log("isSorted",isSorted([1,2,3,4,6,5]))
console.log("isSorted",isSorted([1,2,3,4,6]))