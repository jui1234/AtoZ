let maxProduct=function(nums){
 let max=-Infinity;
 for(let i=0;i<nums.length;i++){
    let product=nums[i];
    for(let j=i+1;j<nums.length;j++){
        product*=nums[j];
        max=Math.max(max,product);
    }
 }
 return max;
}

console.log("maxProduct",maxProduct([4, 5, 3, 7, 1, 2]))
console.log("maxProduct",maxProduct( [-5, 0, -2]))
console.log("maxProduct",maxProduct( [1,-2,3,4,-4,-3]))