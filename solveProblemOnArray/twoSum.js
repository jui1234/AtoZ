let twoSum=function(nums,target){
    let result=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log("result",twoSum([1, 6, 2, 10, 3],7))
console.log("result",twoSum([1, 3, 5, -7, 6, -3],0))
console.log("result",twoSum( [-6, 7, 1, -7, 6, 2],3))