let subsetSums=function(nums){
    let ans=[];

    let helper=function(index,sum){
        if(index===nums.length){
            ans.push(sum);
            return;
        }

        helper(index+1,sum+nums[index])//take

        // nums.pop();//if not take then remove which toke

        helper(index+1,sum);//not take and move to next 

    } 

    helper(0,0);

    return ans;
}

console.log("subsetSums",subsetSums([2,3]))
console.log("subsetSums",subsetSums([5,2,1]))