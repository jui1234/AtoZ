let XorOfArray=function(nums){
    let xor=0;

    for(let i=0;i<nums.length;i++){
        xor=xor^nums[i];
    }

    return xor;
}

console.log("XorOfArray",XorOfArray([1,2,3,4,5]))
console.log("XorOfArray",XorOfArray([1,2,3,4,5,6]))
console.log("XorOfArray",XorOfArray([1,2,3,4,5,7]))