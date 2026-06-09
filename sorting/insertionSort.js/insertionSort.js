let insertionSort=function(nums){
    for(let i=1;i<nums.length;i++){
        let key=nums[i];
        j=i-1;

        while(j>=0 && nums[j]>key){
            nums[j+1]=nums[j];
            j--;
        }
        nums[j+1]=key;
    }
    return nums;
}

console.log("insertionSort",insertionSort([5,3,8,4,2]))
console.log("insertionSort",insertionSort([13,46,24,52,20,9]))