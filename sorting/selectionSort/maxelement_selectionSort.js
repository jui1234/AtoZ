let maxElementselectionSort=function(nums){
    for(let i=0;i<nums.length;i++){
    let minindex=i;
       for(let j=i+1;j<nums.length;j++){
        if(nums[minindex]>nums[j]){
            minindex=j;
        }
       }
       [nums[minindex],nums[i]]=[nums[i],nums[minindex]]
    }
    return nums[nums.length-1];
}

console.log("selectionSort",maxElementselectionSort([13,46,24,52,20,9]))
console.log("selectionSort",maxElementselectionSort([3,4,2,5,1]))