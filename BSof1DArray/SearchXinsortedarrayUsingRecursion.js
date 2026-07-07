let search=function(nums,target){
    let i=nums.length-1;
if(i<0)return -1;
if(nums[i]===target)return i;
return search(nums.slice(0,nums.length-1),target)
}

console.log("search",search([1,2,3,4,5,6],3))
console.log("search",search([3,4,5,6,7],7))
console.log("search",search([2,3,7,8,0],2))