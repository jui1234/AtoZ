let findKRotation=function(nums){
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            return count+1;
        }
        else{
            count++;
        }
    }
    return;
}

console.log("findKRotation",findKRotation( [4, 5, 6, 7, 0, 1, 2, 3]))
console.log("findKRotation",findKRotation([3, 4, 5, 1, 2]))
console.log("findKRotation",findKRotation([4, 5, 1, 2]))