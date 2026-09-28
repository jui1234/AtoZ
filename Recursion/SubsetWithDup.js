let subsetsWithDup=function(nums){
    let ans=[];
    let subset=[];

    nums.sort((a,b)=>a-b);
    let helper=function(index){
     
            ans.push([...subset]);
     
        for(let i=index;i<nums.length;i++){
            if(i>index && nums[i]===nums[i-1]){
                continue;
            }
        subset.push(nums[i])
        helper(i+1)
        subset.pop();

        }

    }
    helper(0);

    return ans;
}

console.log("subsetsWithDup",subsetsWithDup([1,2,2]))
console.log("subsetsWithDup",subsetsWithDup([1,2]))
console.log("subsetsWithDup",subsetsWithDup([1,3,3]))