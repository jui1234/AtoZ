let subarraysWithXorK=function(nums,k){
    let mainresult=[];
    let maxCount=0;

    for(let i=0;i<nums.length;i++){
        let result=[];
        let xor=0;
        for(let j=i;j<nums.length;j++){
            xor^=nums[j];
            result.push(nums[j]);
            if(xor===k && result.length>maxCount){
                maxCount=result.length-1;
                mainresult=[...result];
            }
        }
    }
    return mainresult.length===0?0:mainresult.length;;
}
console.log("subarraysWithXorK",subarraysWithXorK([4,2,2,6,4],6))
console.log("subarraysWithXorK",subarraysWithXorK( [5, 6, 7, 8, 9],5))
console.log("subarraysWithXorK",subarraysWithXorK([4,2,2,6,4,5,7],6))