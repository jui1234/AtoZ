const checkSubsequenceSum=function(nums,k){
    let ans=[];
    let subseq=[];
    let helper=function(index,sum){
      if(index===nums.length){
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

    helper(0,0);

    if(ans.length>0){
        return true;
    }else{
        return false;
    }

}

console.log("checkSubsequenceSum",checkSubsequenceSum([1,2,3,4],8))
console.log("checkSubsequenceSum",checkSubsequenceSum([4,3,9,2],10))