let findMisisngRepeatingNumbers=function(nums){
    // let result=[];
    let repeating =null;
    let missing=null;

    nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length-1;i++){
        
        if(nums[i]===nums[i+1]){
            repeating = nums[i];
        }

          if (nums[i + 1] - nums[i] > 1) {
                missing = nums[i] + 1;
            }
    }

     if (nums[0] !== 1) {
        missing = 1;
    }

    if (missing === null) {
        missing = nums.length;
    }

    return [repeating ,missing]

}

console.log("findMisisngRepeatingNumbers",findMisisngRepeatingNumbers( [3, 5, 4, 1, 1,1]))
console.log("findMisisngRepeatingNumbers",findMisisngRepeatingNumbers([1, 2, 3, 6, 7, 5, 7]))
console.log("findMisisngRepeatingNumbers",findMisisngRepeatingNumbers( [6, 5, 7, 1, 8, 6, 4, 3, 2]))