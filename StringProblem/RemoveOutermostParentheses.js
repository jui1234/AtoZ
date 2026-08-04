let removeOuterParentheses=function(s){
    let count=0;
    let start=0;
    let ans="";


 for (let i = 0; i < s.length; i++) {
    let storeend=-1;
    if (s.charAt(i) === '(') {
        count++;
    }
    else{
        count--;
    }

    if(count===0){
        ans+=s.slice(start+1,i);
        start=i+1;
    }
}

return ans;
}

console.log("removeOuterParentheses",removeOuterParentheses("((()))"))
console.log('removeOuterParentheses',removeOuterParentheses("()(()())(())"))