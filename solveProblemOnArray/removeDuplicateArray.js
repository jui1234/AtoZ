let removeDuplicates=function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                nums.splice(j,1)//splice will remove the element at index j and shift the rest of the elements to the left
                j--;
            }
        }
    }
    return nums;
}

console.log("removeDuplicates",removeDuplicates([0,0,3,3,5,6]))