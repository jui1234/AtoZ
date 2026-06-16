let rotateArray=function(nums,k){
    let result=[];
      k = k % nums.length;
    for(let i=k;i<nums.length;i++){
        result.push(nums[i]);
    }
    for(let i=0;i<k;i++){
        result.push(nums[i]);
    }
    return result;
}

console.log("rotateArray",rotateArray([1,2,3,4,5,6],2))