let singleNonDuplicate=function(nums){
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1);
    }

   for(let [key,value] of map){
    if(value===1)return key;
   }
    return;
}

console.log("singleNonDuplicate",singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]))
console.log("singleNonDuplicate",singleNonDuplicate( [1, 1, 3, 5, 5]))
console.log("singleNonDuplicate",singleNonDuplicate([1, 1, 2, 2, 3, 3, 4,4 ,5, 5, 6, 6,7]))