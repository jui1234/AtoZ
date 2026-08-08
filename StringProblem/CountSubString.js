let countSubstrings=function(s){
    let count=0;

    for(let i=0;i<s.length-1;i++){
        let str=s[i];
        for(let j=i+1;j<s.length;j++){
            count++;
            str+=s[j]
            console.log("str",str)
        }
    }
    return count;
}

console.log("countSubstrings",countSubstrings("pqpqs"))