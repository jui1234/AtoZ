let lowerBound=function(nums,x){
 for(let i=0;i<nums.length;i++){
    if(nums[i]>=x){
        return i;
    }
 }
 return;
}

console.log("lowerBound",lowerBound([1,2,2,3],2,0))
console.log("lowerBound",lowerBound([3,5,8,15,19],9,0))
console.log("lowerBound",lowerBound([3,5,8,15,19],3,0))