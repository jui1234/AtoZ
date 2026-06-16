let rotateArrayByOne=function(nums){
    let k=1;
    let result=[];
    for(let i=k;i<nums.length;i++){
        result.push(nums[i]);
    }
    for(let i=0;i<k;i++){
        result.push(nums[i])
    }
    return result;
}

console.log("rotateArrayByOne",rotateArrayByOne([1,2,3,4,5]))