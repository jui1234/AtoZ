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

console.log('isPalindrom',isPalindrom("abaaba"))
console.log('isPalindrom',isPalindrom("abacba"))