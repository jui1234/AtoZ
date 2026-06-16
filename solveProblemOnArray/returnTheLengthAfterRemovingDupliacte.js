let removeDuplicatesLength=function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                nums.splice(j,1)
                j--;
            }
        }
    }
    return nums.length;
}

console.log("removeDuplicatesLength",removeDuplicatesLength([0,0,3,3,5,6]))