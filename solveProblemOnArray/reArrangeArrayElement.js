let rearrangeArray=function(nums){
    let postiveArray=[];
    let negativeArray=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            negativeArray.push(nums[i]);
        }
        else{
            postiveArray.push(nums[i]);
        }
    }

    for(let i=0;i<nums.length;i++){
        if(i%2===0){
            nums[i]=postiveArray.shift();
            // postiveArray.delete(0)
        }
        else{
            nums[i]=negativeArray.shift();
            // postiveArray.delete(0)
        }
    }

    return nums;
}

console.log("rearrangeArray",rearrangeArray([2, 4, 5, -1, -3, -4]))
console.log("rearrangeArray",rearrangeArray([1, -1, -3, -4, 2, 3]))
console.log("rearrangeArray",rearrangeArray([-4, 4, -4, 4, -4, 4]))
