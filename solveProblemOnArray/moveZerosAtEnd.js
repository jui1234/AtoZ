let moveZeroes=function(nums){
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
            nums.splice(i,1);
            i--;
        }
    }

    for(let i=0;i<count;i++){
        nums.push(0);
    }

    return nums;
}

console.log("moveZeroes",moveZeroes([0,1,4,0,5,2]))
console.log("moveZeroes",moveZeroes([1,0,0,0,1,3,-2]))