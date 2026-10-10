let isPalindrom=function(s){
    let left=0;
    let right=s.length-1;

    while(left<right){
        if(s.charAt(left)!==s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


let partition=function(s){
    let ans=[];
    let subString=[];

    let helper=function(index){
        if(index===s.length){
            ans.push([...subString]);
            return;
        }

        for(let i=index;i<s.length;i++){
            let part=s.substring(index,i+1);

            if(isPalindrom(part)){
                subString.push(part);

                 helper(i+1);

            subString.pop();
            }

           
        }
    }
    helper(0);
    return ans;
}

console.log("partition",partition("aabaa"))