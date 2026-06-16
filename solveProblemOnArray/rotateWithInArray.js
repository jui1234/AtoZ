let rotateWithInArrayByOne=function(nums){
    let store=nums[0];

    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i+1];
    }
    
    nums[nums.length-1]=store;
    console.log(nums)
}

console.log("rotateWithInArrayByOne",rotateWithInArrayByOne([1,2,3,4,5]))