let nextPermutation=function(nums){
    let storenumindex=-1;
    let minnum=Infinity;
    let minindex=-1;
    let result=[];
    for(let i=nums.length-1;i>0;i--){
        if(nums[i-1]<nums[i]){
            storenumindex=i-1;
            break;
        }
    }

     // Step 2: if no breakpoint, reverse whole array
    if (storenumindex === -1) {
        nums.reverse();
        return nums;
    }

    for(let i=storenumindex+1;i<nums.length;i++){
         if (nums[i] > nums[storenumindex] && nums[i] < minnum) {
            minnum=nums[i]
        minindex=i;
       }
    }

    [nums[storenumindex],nums[minindex]]=[nums[minindex],nums[storenumindex]];

     let left = storenumindex + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
}


console.log("nextPermutation",nextPermutation([1,2,3]))
console.log("nextPermutation",nextPermutation([3,2,1]))
console.log("nextPermutation",nextPermutation([1,1,5]))