let minElementselectionSort=function(nums){
    for(let i=0;i<nums.length;i++){
    let minindex=i;
       for(let j=i+1;j<nums.length;j++){
        if(nums[minindex]>nums[j]){
            minindex=j;
        }
       }
       [nums[minindex],nums[i]]=[nums[i],nums[minindex]]
    }
    return nums[0];
}

console.log("selectionSort",minElementselectionSort([13,46,24,52,20,9]))
console.log("selectionSort",minElementselectionSort([3,4,2,5,1]))