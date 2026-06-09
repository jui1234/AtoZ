let insertionSortsmallestElement=function(nums){
    for(let i=1;i<nums.length;i++){
        let key=nums[i];
        j=i-1;

        while(j>=0 && nums[j]>key){
            nums[j+1]=nums[j];
            j--;
        }
        nums[j+1]=key;
    }
    return nums[0];
}

console.log("insertionSortsmallestElement",insertionSortsmallestElement([5,3,8,4,2]))