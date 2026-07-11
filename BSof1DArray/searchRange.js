let searchRange=function(nums,target){
    let result=[];
    let finalresult=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
          result.push(i);
        }
    }

    if(result.length===0){
        result.push(-1);
        result.push(-1);
    }



    finalresult.push(result[0]);
    finalresult.push(result[result.length-1])
    
    return finalresult;

}

console.log("searchRange",searchRange([5, 7, 7, 8, 8, 10],8))
console.log("searchRange",searchRange([5, 7, 7, 8, 8, 10],6))
console.log("searchRange",searchRange([5, 7, 7, 8, 8, 10],5))