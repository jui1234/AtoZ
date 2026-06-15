let secondLargestElement=function(nums){
 for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length-1;j++){
        if(nums[j]>nums[j+1]){
            [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
        }
    }
 }
 let largest=nums[nums.length-1];

 for(let i=nums.length-2;i>=0;i--){
    if(nums[i]!==largest){
         return nums[i];
    }  
 }
 return -1;
}

console.log("secondLargestElement",secondLargestElement([3,2,4,5,6,6]))
console.log("secondLargestElement",secondLargestElement([6,6,6,6,6,6]))
console.log("secondLargestElement",secondLargestElement([8, 8, 7, 6, 5]))