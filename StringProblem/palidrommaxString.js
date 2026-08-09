let isPalindrom=function(s){
    let i=0;
    let j=s.length-1;

    while(i<j){
        if(s[i]!==s[j]){
           
           return false;
        }
        i++;
        j--;
    }
    return true;
}

let longestPalindrome=function(s){
        let maxCount=0;
     for(let i=0;i<s.length;i++){

        for(let j=i+1;j<=s.length;j++){
             let str = s.slice(i, j);
            if(isPalindrom(str)){
            maxCount = Math.max(maxCount, str.length);
        }
        }
       
     }
     return maxCount;
}

console.log("isPalindrom",longestPalindrome("abba"))
console.log("isPalindrom",longestPalindrome("abbac")) 
console.log("isPalindrom",longestPalindrome("cbbd")) 

