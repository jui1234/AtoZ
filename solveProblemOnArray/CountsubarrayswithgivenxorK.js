let subarraysWithXorK=function(nums,k){
    // let mainresult=[];
    let count=0;
    // let maxCount=0;

    for(let i=0;i<nums.length;i++){
        let result=[];
        let xor=0;
        for(let j=i;j<nums.length;j++){
            xor^=nums[j];
            // result.push(nums[j]);
            if(xor===k ){
               count++;
            }
        }
    }
    return count;
}
console.log("subarraysWithXorK",subarraysWithXorK([4,2,2,6,4],6))
console.log("subarraysWithXorK",subarraysWithXorK([5, 6, 7, 8, 9],5))
console.log("subarraysWithXorK",subarraysWithXorK([5, 2,9],7))