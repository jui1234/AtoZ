let numberOfInversions=function(nums){
    let count=0;

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j] && i<j){
                count++;
            }
        }
    }

    return count;
}

console.log("numberOfInversions",numberOfInversions([2, 3, 7, 1, 3, 5]))
console.log("numberOfInversions",numberOfInversions([-10, -5, 6, 11, 15, 17]))
console.log("numberOfInversions",numberOfInversions([9, 5, 4, 2]))