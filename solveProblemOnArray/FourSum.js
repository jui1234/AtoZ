let FourSum=function(nums,target){
    // let mainresult=[];
    let result=[];
    let seen=new Set();

    for(let i=0;i<nums.length-3;i++){
        // result=[];
        for(let j=i+1;j<nums.length-2;j++){
            for(let k=j+1;k<nums.length-1;k++){
            for(let l=k+1;l<nums.length;l++){
                if(nums[i]+nums[j]+nums[k]+nums[l]===target ){
                    let FourSum=[nums[i],nums[j],nums[k],nums[l]].sort((a,b)=>a-b);
                    let key = FourSum.join(",");
                    if(!seen.has(key)){
                        seen.add(key)
                         result.push(FourSum)
                    }
                   
                }
            }
        }
        }
        // mainresult.push(result);
    }
    return result;
}

console.log("FourSum",FourSum([1, -2, 3, 5, 7, 9],7))
console.log("FourSum",FourSum([7, -7, 1, 2, 14, 3],9))
console.log("FourSum",FourSum( [1, 1, 3, 4, -3],5))