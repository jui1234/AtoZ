const combinationSum=function(candidates, target) {
    let ans=[];
    let subseq=[];

    let helper=function(index,sum){
     
            if(sum===target){
                ans.push([...subseq])
                return;
            }
            if(index===candidates.length || sum>target){
                return;
        }

        helper(index+1,sum);

        subseq.push(candidates[index])

        helper(index,sum+candidates[index])
        subseq.pop();
    }
    helper(0,0)

    return ans;
}

console.log("combinationSum",combinationSum([2, 3, 5, 4],7))