let missingNumber=function(nums){
    let set=new Set(nums);

    for(let i=1;i<=nums.length+1;i++){
        if(!set.has(i)){
            return i;
        }
    }
}

console.log("missingNumber",missingNumber([2,1,3,4]))
console.log("missingNumber",missingNumber( [0, 2, 3, 1, 4]))
console.log("missingNumber",missingNumber(  [0, 1, 2, 4, 5, 6]))