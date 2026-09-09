let countSubsequenceWithTargetSum=function(nums,k){
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
    return ans.length;
}
console.log("countSubsequenceWithTargetSum",countSubsequenceWithTargetSum([4,9,2,5,1],10))
console.log("countSubsequenceWithTargetSum",countSubsequenceWithTargetSum([4, 2, 10, 5, 1, 3],5))
