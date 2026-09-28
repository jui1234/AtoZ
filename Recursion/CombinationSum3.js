let combinationSum3=function(k,n){
    let ans=[];
    let subset=[];


    let helper=function(index,sum){
        if(subset.length===k){
            if(sum===n){
                ans.push([...subset])
            }
                return;

        }

        for(let i=index;i<10;i++){
            subset.push(i);

            helper(i+1,sum+i)//take

            subset.pop();

            // helper(i+1,sum)
        }



    }
        helper(1,0)
    return ans;
}

console.log("combinationSum3",combinationSum3(3,7))
console.log("combinationSum3",combinationSum3(3,9))