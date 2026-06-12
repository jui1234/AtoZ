let recursionQuickSort=function(nums){
    if(nums.length<=1)return nums;

    let pivot=nums[nums.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<pivot){
            left.push(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }

    return [...recursionQuickSort(left),pivot,...recursionQuickSort(right)];

}

console.log(recursionQuickSort([5,3,8,4,2]))