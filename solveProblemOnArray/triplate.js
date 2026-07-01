let threeSum=function(nums){
    // let mainresult=[];
    let result=[];
    let seen=new Set();

    for(let i=0;i<nums.length-2;i++){
        // result=[];
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]==0 ){
                    let triplet=[nums[i],nums[j],nums[k]].sort((a,b)=>a-b);
                    let key = triplet.join(",");
                    if(!seen.has(key)){
                        seen.add(key)
                         result.push(triplet)
                    }
                   
                }
            }
        }
        // mainresult.push(result);
    }
    return result;
}

console.log("threeSum",threeSum([2, -2, 0, 3, -3, 5]))
console.log("threeSum",threeSum([2, -1, -1, 3, -1]))
console.log("threeSum",threeSum( [8, -6, 5, 4]))