let powerSet=function(nums){
    let ans=[];
    let subset=[];

    let helper=function(index){
        if(index===nums.length){
            ans.push([...subset]);
            return;
        }

        helper(index+1)//dont take

        subset.push(nums[index]);
        helper(index+1);
        subset.pop();
    }
    helper(0);

    return ans;
}

console.log("powerSet",powerSet([1,2,3]))