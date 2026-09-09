let countSubsequenceWithTargetSumWithArray=function(nums,k){
    let ans=[];
    let subseq=[];

        
    let helper=function(index,sum){
        if(index===nums.length ){
            if(sum===k){
               ans.push([...subseq]);
            }
            return;
        }

        helper(index+1,sum)//dont take

        subseq.push(nums[index]);
        helper(index+1,sum+nums[index]);
        subseq.pop();
    }
    helper(0,0)
    return ans;
}
console.log("countSubsequenceWithTargetSumWithArray",countSubsequenceWithTargetSumWithArray([4,9,2,5,1],10))
console.log("countSubsequenceWithTargetSumWithArray",countSubsequenceWithTargetSumWithArray([4, 2, 10, 5, 1, 3],5))
