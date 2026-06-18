let findMaxConsecutiveOnes=function(nums){
    let maxcount=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1 )
         {
            count++;
            if(maxcount<count){
                maxcount=count;
            }
        }
        else{
            count=0;
        }
    }
    return maxcount;
}

console.log("findMaxConsecutiveOnes",findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0,1,1,1,1,0]))
console.log("findMaxConsecutiveOnes",findMaxConsecutiveOnes( [0, 0, 0, 0, 0, 0, 0, 0]))
console.log("findMaxConsecutiveOnes",findMaxConsecutiveOnes( [1, 0, 1, 1, 1, 0, 1, 1, 1]))