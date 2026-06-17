let moveZeroes=function(nums){
    let count=0;
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
            nums.splice(i,1);
            i--;
        }
    }

    for(let i=0;i<count;i++){
        result.push(0);
    }

    for(let i=0;i<nums.length;i++){
        result.push(nums[i]);
    }


    return result;
}

console.log("moveZeroes",moveZeroes([0,1,4,0,5,2]))
console.log("moveZeroes",moveZeroes([1,3,-2,0,0,0,1]))