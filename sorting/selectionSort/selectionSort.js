let selectionSort=function(nums){
    for(let i=0;i<nums.length;i++){
    let minindex=i;
       for(let j=i+1;j<nums.length;j++){
        if(nums[minindex]>nums[j]){
            minindex=j;
        }
       }
       [nums[minindex],nums[i]]=[nums[i],nums[minindex]]
    }
    return nums;
}

console.log("selectionSort",selectionSort([13,46,24,52,20,9]))