let linearSearch=function(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
    }
    return -1;
}

console.log("linearSearch",linearSearch([2,3,4,5,3],3))
console.log("linearSearch",linearSearch([2,-4,4,0,10],6))