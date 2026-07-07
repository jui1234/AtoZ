let search=function(nums,target){
   for(let i=0;i<nums.length;i++){
    if(nums[i]===target){
        return i;
    }
   }
   return -1;
}

console.log("search",search([1,2,3,4,5,6],3))
console.log("search",search([3,4,5,6,7],7))
console.log("search",search([2,3,7,8,0],2))
console.log("search",search([2,3,7,8,0],10))