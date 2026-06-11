let RecursionInsertionSort=function(nums){
    if(nums.length<=1){
        return nums;
    }

    let sorted=RecursionInsertionSort(nums.slice(0,nums.length-1));
    let key=nums[nums.length-1];
    let j=sorted.length-1;

    while(j>=0 && sorted[j]>key){
        sorted[j+1]=sorted[j];
        j--;
    }

    sorted[j+1]=key;
    return sorted;
}

console.log("RecursionInsertionSort",RecursionInsertionSort([5,3,8,4,2]))
console.log("RecursionInsertionSort",RecursionInsertionSort([13,46,24,52,20,9]))