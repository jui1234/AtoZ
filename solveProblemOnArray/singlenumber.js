let singleNumber=function(nums){

 let map=new Map();
 for(let i=0;i<nums.length;i++){
    map.set(nums[i],(map.get(nums[i])||0)+1)
 }
 for(let i=0;i<nums.length;i++){
    if(map.get(nums[i])===1){
        return nums[i];
    }
 }
//  console.log(map)
}

console.log("singleNumber",singleNumber( [1,1, 2, 2,  3, 4, 4,10,3]))
